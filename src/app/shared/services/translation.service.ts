import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SETTINGS_DEFAULT_INTERFACE_LANGUAGE } from '@shared/constants/settings';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('language') || SETTINGS_DEFAULT_INTERFACE_LANGUAGE);

  public currentContentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('contentLanguage'));

  defaultLanguage = 'ru';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLanguage);
    this.checkLanguage();
  }

  checkLanguage(): void {
    this.translate.use(localStorage.getItem('language'));
  }

  
}
