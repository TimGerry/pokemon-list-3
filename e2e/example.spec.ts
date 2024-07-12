import { test, expect, Locator, Page } from '@playwright/test';

test.describe('Pokemon page', () => {
  
  let page: PokemonPage;

  test.beforeEach(async ({ page: p }) => {
    page = new PokemonPage(p);
    await page.navigate();
  })

  test('has title', async () => {  
    // Expect a title "to contain" a substring.
    expect(await page.getTitle()).toBe('PokemonList3');
  });
  
  test('form is valid', async () => {
    await page.form.fill('water', 'attack');
    expect(await page.form.isEnabled()).toBe(true);
  })
})

abstract class PageObject {
  constructor(protected host: Locator) {}
}

class PokemonPage {

  public form = new PokemonForm(this.page.locator('app-pokemon-form'));
  
  constructor(private page: Page) {}

  async navigate() {
    return this.page.goto('pokemon');
  }

  async getTitle() {
    return this.page.title();
  }
}

class PokemonForm extends PageObject {

  #inputType = this.host.locator('#inputType');
  #inputAttack = this.host.locator('#inputAttack');
  #formSubmit = this.host.locator('button[type="submit"]');
  
  async fill(type: string, attack: string) {
    await this.#inputType.fill(type);
    await this.#inputAttack.fill(attack);
  }

  async isEnabled() {
    return await this.#formSubmit.isEnabled();
  }
}