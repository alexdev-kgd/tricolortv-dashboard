import { TranslationService } from '@services/translation.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';

const moment = _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11lyLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
})
export class DatepickerComponent implements OnInit {
  constructor(private _adapter: DateAdapter<any>, private translationService: TranslationService) {}

  date = new FormControl(moment());

  setLocale(lang: string) {
    this._adapter.setLocale(lang);
  }

  ngOnInit(): void {
    this.translationService.currentLanguage.subscribe(() => {
      this.setLocale(localStorage.getItem('language'))

      this.translationService.currentLanguage.subscribe(() => this.translationService.checkLanguage());
    });
  }
}
