import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('language'));

  defaultLanguage = 'ru';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLanguage);
    this.checkLanguage();
  }

  checkLanguage(): void {
    this.translate.use(localStorage.getItem('language'));
  }

}
