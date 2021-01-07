import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.sass']
})
export class LinearChartComponent implements OnInit, OnChanges {

  //@ViewChild('satelliteProviders', { static: true }) chart: ElementRef;
  @Input() data: number[];
  @Input() xmax = 45;
  @Input() ymax = 200;
  @Input() transitionTime = 1000;
  @Input() hticks = 60;

  hostElement;
  viewBoxWidth;
  viewBoxHeight
  colorScale;
  bins; // Array of frequency distribution
  svg;
  g; // Group Element
  x;
  y;
  histogram // D3 histogram function

  constructor(private elRef: ElementRef) { 
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  private createChart(hostElement, viewBoxWidth, viewBoxHeight) {
  }

  private setChartDimensions() {
    this.svg = d3.select(this.hostElement).append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 ' + this.viewBoxWidth + ' ' + this.viewBoxHeight);
  }

  private setGraphicsElement() {
    this.g = this.svg.append("g").attr("transform", "translate(0,0)");
  }

  private setColorscale() {
    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  }

  private setAxisX(x) {
    x = d3.scaleLinear()
          .domain([0, 45])
          .range([30, 170]);
  }

  private setAxisY(y) {
    y = d3.scaleLinear()
          .domain([0, 45])
          .range([30, 170]);
  }

  // ngAfterViewInit(): void {
  //   d3.json('assets/json/satelliteProviders.json', (err, json) => {
  //     try {
  //       let svg = d3.select(this.chart.nativeElement).append('svg')
  //       .attr('width', 300).attr('height', 300);
  //       console.log(svg);
  //       svg.selectAll('rect')
  //       .data(json)
  //       .enter()
  //       .append('rect')
  //       .attr('width', 10)
  //       .attr('height', 10)
  //       .attr('x', (d, i) => {
  //           return d
  //       }).attr('y', (d, i) => {
  //           return d
  //       }).attr('fill', (d, i) => {
  //         let colors = {};
  //         return colors[d]
  //       });        
  //     } catch (err) {
  //       console.log(`Cannot load file ${err}`);
  //     }
  //   });
  // }

}
