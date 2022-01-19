import { AnimationsService } from '@services/animations.service';
import { ThemeService } from '@services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  toggleThemeChecked: boolean;

  toggleAnimationsChecked: boolean;

  articlesCountValue;

  staffCountValue;
  
  modulesCountValue;

  commentsCountValue;

  constructor(private themeService: ThemeService, private animationsService: AnimationsService) {}

  ngOnInit(): void {
    localStorage.getItem('theme') === 'dark'
      ? this.toggleThemeChecked = true
      : this.toggleThemeChecked = false;

    localStorage.getItem('animations') === 'enabled'
      ? this.toggleAnimationsChecked = true
      : this.toggleAnimationsChecked = false;

    this.articlesCountValue = localStorage.getItem('articlesCount') || 10;
    
    this.staffCountValue = localStorage.getItem('staffCount') || 10;

    this.modulesCountValue = localStorage.getItem('modulesCount') || 10;

    this.commentsCountValue = localStorage.getItem('commentsCount') || 10;
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

    localStorage.setItem('theme', theme);

    this.themeService.checkDarkMode();
  }

  toggleAnimations(event): void {
    if(event.checked) {
      this.animationsService.isAnimationsDisabled.next(false);
      localStorage.setItem("animations", "enabled");
    } else {
      this.animationsService.isAnimationsDisabled.next(true);
      localStorage.setItem("animations", "disabled");
    }
  }

  itemCount(event): void {
    const name = event.source.ariaLabel;
    const value = event.value;

    localStorage.setItem(name, value);
  }
}
