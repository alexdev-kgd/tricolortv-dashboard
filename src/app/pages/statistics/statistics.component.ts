import { Component, OnInit } from '@angular/core';
import { FontSizeService } from '@shared/services/font-size.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass'],
})
export class StatisticsComponent implements OnInit {
  fontSizeValue: string;

  constructor(private fontSizeService: FontSizeService) {}

  ngOnInit(): void {
    this.fontSizeValue = this.fontSizeService.getFontSizeClass();
  }
}
