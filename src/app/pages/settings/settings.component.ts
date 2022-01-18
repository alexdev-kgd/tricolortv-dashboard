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

  constructor(private themeService: ThemeService, private animationsService: AnimationsService) {}

  ngOnInit(): void {
    localStorage.getItem('theme') === 'dark'
      ? this.toggleThemeChecked = true
      : this.toggleThemeChecked = false;

    localStorage.getItem('animations') === 'enabled'
      ? this.toggleAnimationsChecked = true
      : this.toggleAnimationsChecked = false;
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
}
