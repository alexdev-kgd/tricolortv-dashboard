import { ThemeService } from '@services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'tricolortv-dashboard';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.checkTheme();
    this.themeService.checkDarkMode();
  }
}
