import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  public isAnimationsDisabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
