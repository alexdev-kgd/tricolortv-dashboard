import {
  SETTINGS_DEFAULT_ITEM_COUNT_PER_PAGE,
  SETTINGS_DEFAULT_INTERFACE_LANGUAGE,
  SETTINGS_DEFAULT_CONTENT_LANGUAGE,
} from './../../shared/constants/settings';
import { TranslationService } from './../../shared/services/translation.service';
import { AnimationsService } from '@services/animations.service';
import { ThemeService } from '@services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent implements OnInit {
  toggleThemeChecked: boolean;

  toggleAnimationsChecked: boolean;

  articlesCountValue;

  staffCountValue;

  modulesCountValue;

  commentsCountValue;

  langValue;

  contentLangValue;

  constructor(
    private themeService: ThemeService,
    private animationsService: AnimationsService,
    private translationService: TranslationService,
  ) {}

  ngOnInit(): void {
    localStorage.getItem('theme') === 'dark'
      ? (this.toggleThemeChecked = true)
      : (this.toggleThemeChecked = false);

    this.toggleAnimationsChecked =
      !this.animationsService.checkAnimationLocalStorage();

    this.articlesCountValue =
      localStorage.getItem('articlesCount') ||
      SETTINGS_DEFAULT_ITEM_COUNT_PER_PAGE;

    this.staffCountValue =
      localStorage.getItem('staffCount') ||
      SETTINGS_DEFAULT_ITEM_COUNT_PER_PAGE;

    this.modulesCountValue =
      localStorage.getItem('modulesCount') ||
      SETTINGS_DEFAULT_ITEM_COUNT_PER_PAGE;

    this.commentsCountValue =
      localStorage.getItem('commentsCount') ||
      SETTINGS_DEFAULT_ITEM_COUNT_PER_PAGE;

    this.langValue =
      localStorage.getItem('language') || SETTINGS_DEFAULT_INTERFACE_LANGUAGE;

    this.contentLangValue =
      localStorage.getItem('contentLanguage') ||
      SETTINGS_DEFAULT_CONTENT_LANGUAGE;

    this.translationService.currentLanguage.subscribe(() =>
      this.translationService.checkLanguage(),
    );
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light';

    localStorage.setItem('theme', theme);

    this.themeService.checkDarkMode();
  }

  toggleAnimations(event): void {
    if (event.checked) {
      this.animationsService.isAnimationsDisabled.next(false);
      localStorage.setItem('animations', 'enabled');
    } else {
      this.animationsService.isAnimationsDisabled.next(true);
      localStorage.setItem('animations', 'disabled');
    }
  }

  onSelectChangeLang(event) {
    this.onSelectChange(event);
    this.translationService.currentLanguage.next(event.value);
  }

  onSelectChangeContentLang(event) {
    this.onSelectChange(event);
    this.translationService.currentContentLanguage.next(event.value);
  }

  onSelectChange(event): void {
    const name = event.source.ariaLabel;
    const value = event.value;

    localStorage.setItem(name, value);
  }
}
