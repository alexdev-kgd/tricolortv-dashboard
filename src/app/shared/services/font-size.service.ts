import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  public fontSize: BehaviorSubject<number> = new BehaviorSubject<number>(14);

  getFontSizeClass(): string {
    this.checkFontSize();
    return 'fs-' + this.fontSize.getValue();
  }

  checkFontSize(): void {
    const fontSize = localStorage.getItem('fontSize');
    if(fontSize) this.fontSize.next(+fontSize);
  }
}
