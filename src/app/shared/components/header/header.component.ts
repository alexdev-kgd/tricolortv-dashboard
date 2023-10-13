import { TranslationService } from '@services/translation.service';
import { ThemeService } from '@services/theme.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() menuOpened: boolean;

  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  isDarkMode: boolean;

  latinLetters: boolean; 

  toggleSidebar(): void {
    this.showSidebar.emit(!this.menuOpened);
  }

  constructor(private translationService: TranslationService, private themeService: ThemeService) { }

  ngOnInit() {
    const mediaColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    mediaColorScheme.addEventListener("change", () => this.checkColorScheme(mediaColorScheme));
    this.checkColorScheme(mediaColorScheme);
    this.themeService.isDarkMode.subscribe((bool) => this.isDarkMode = bool)

    this.translationService.currentLanguage.subscribe((lang) => {
      this.latinLetters = lang === 'ru' ? false : true;
      this.translationService.checkLanguage()
    });
  }

  checkColorScheme(mediaColorScheme: MediaQueryList): void {
    if(localStorage.getItem('theme')) {
      (localStorage.getItem('theme') === 'dark') 
        ? this.isDarkMode = true
        : this.isDarkMode = false;
    } else {
      mediaColorScheme.matches ? this.isDarkMode = true : this.isDarkMode = false;
    }    
  }

}
