import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.loadD3JSON('../../../json/satelliteProviders.json', '#satellite');
  }

}
