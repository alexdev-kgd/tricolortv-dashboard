import { TranslationService } from '@services/translation.service';
import { Component, OnInit } from '@angular/core';
import { FontSizeService } from '@services/font-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  fontSizeValue: string;

  constructor(private fontSizeService: FontSizeService, private translationService: TranslationService) {
  }

  ngOnInit(): void {
    this.fontSizeValue = this.fontSizeService.getFontSizeClass();

    this.translationService.currentLanguage.subscribe(() => this.translationService.checkLanguage());
  }
}
