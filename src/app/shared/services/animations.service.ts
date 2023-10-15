import { SETTINGS_DEFAULT_ANIMATIONS } from '@shared/constants/settings';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  public isAnimationsDisabled: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.checkAnimationLocalStorage());

  public checkAnimationLocalStorage(state?: boolean): boolean {
    if (!localStorage.getItem('animations') && !state)
      return SETTINGS_DEFAULT_ANIMATIONS;
    if (!localStorage.getItem('animations') && state) return state;
    switch (localStorage.getItem('animations')) {
      case 'enabled':
        return false;
        break;
      case 'disabled':
        return true;
        break;
      default:
        break;
    }
  }
}
