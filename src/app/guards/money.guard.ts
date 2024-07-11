import { CanActivateFn } from '@angular/router';

export const moneyGuard: CanActivateFn = () => {
  return window.confirm('You can only proceed if you have money!');
};
