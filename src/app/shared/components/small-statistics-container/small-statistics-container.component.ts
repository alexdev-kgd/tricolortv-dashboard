import { Component, OnInit } from '@angular/core';
import { FontSizeService } from '@shared/services/font-size.service';

@Component({
  selector: 'app-small-statistics-container',
  templateUrl: './small-statistics-container.component.html',
  styleUrls: ['./small-statistics-container.component.sass'],
})
export class SmallStatisticsContainerComponent implements OnInit {
  fontSizeValue: string;

  constructor(private fontSizeService: FontSizeService) {}

  ngOnInit(): void {
    this.fontSizeValue = this.fontSizeService.getFontSizeClass();
  }
}
