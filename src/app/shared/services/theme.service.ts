import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  checkTheme(): void {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (localStorage.getItem('theme')) {
      localStorage.getItem('theme') === 'dark'
        ? document.body.classList.add('dark-theme')
        : document.body.classList.remove('dark-theme');
    } else {
      if (prefersDarkTheme.matches) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-theme');
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-theme');
      }
    }
  }

  checkDarkMode(): void {
    localStorage.getItem('theme') === 'dark'
      ? this.isDarkMode.next(true)
      : this.isDarkMode.next(false);
  }
}
