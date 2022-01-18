import { ThemeService } from '@services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  toggleThemeChecked = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    localStorage.getItem('theme') === 'dark'
      ? this.toggleThemeChecked = true
      : this.toggleThemeChecked = false;
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

    localStorage.setItem('theme', theme);

    this.themeService.checkDarkMode();
  }
}
