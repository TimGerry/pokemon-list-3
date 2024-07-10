import { OptionalPipe } from './optional.pipe';

describe('OptionalPipe', () => {

  let sut: OptionalPipe;

  beforeEach(() => {
    sut = new OptionalPipe();
  });

  it('should create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should display present values', () => {
    const actual = sut.transform('hello');
    expect(actual).toBe('hello');
  })

  it('should replace value', () => {
    const actual = sut.transform(undefined);
    expect(actual).toBe('-');
  });

  it('should replace value with specified string', () => {
    const actual = sut.transform(undefined, '/');
    expect(actual).toBe('/');
  });
});
