import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.sass'],
})
export class LinearChartComponent implements OnInit, AfterViewInit {
  @ViewChild('linearChartContainer', { static: false })
  linearChartContainer: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const DATA = [
      { date: 2020 - 0o3 - 17, value: 10 },
      { date: 2021 - 0o3 - 17, value: 20 },
      { date: 2022 - 0o3 - 17, value: 30 },
    ];

    const chart = this.lineChart(DATA, {
      // @ts-ignore
      x: (d) => d.date, // @ts-ignore
      y: (d) => d.value,
      yLabel: 'Количество абонентов',
      width: 850,
      height: 450,
      color: 'steelblue',
      marginLeft: 20,
      marginRight: 0,
    });

    this.renderer.appendChild(this.linearChartContainer.nativeElement, chart);
  }

  ngOnInit(): void {}

  lineChart(
    data,
    {
      x = ([x]) => x, // given d in data, returns the (temporal) x-value
      y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
      defined = undefined, // for gaps in data
      curve = d3.curveLinear, // how to interpolate between points
      marginTop = 20, // top margin, in pixels
      marginRight = 30, // right margin, in pixels
      marginBottom = 30, // bottom margin, in pixels
      marginLeft = 40, // left margin, in pixels
      width = 640, // outer width of chart, in pixels
      height = 400, // outer height of chart, in pixels
      xType = d3.scaleUtc, // the x-scale type
      xDomain = undefined, // [xmin, xmax]
      xRange = [marginLeft, width - marginRight], // [left, right]
      yType = d3.scaleLog, // the y-scale type
      yDomain = undefined, // [ymin, ymax]
      yRange = [height - marginBottom, marginTop], // [bottom, top]
      color = 'currentColor', // stroke color of line
      strokeLinecap = 'round', // stroke line cap of the line
      strokeLinejoin = 'round', // stroke line join of the line
      strokeWidth = 1.5, // stroke width of line, in pixels
      strokeOpacity = 1, // stroke opacity of line
      yFormat = '', // a format specifier string for the y-axis
      yLabel = undefined, // a label for the y-axis
    } = {},
  ) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const I = d3.range(X.length);
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);

    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = d3.extent(Y);

    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(width / 80)
      .tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

    // Construct a line generator.
    const line = d3
      .line()
      .defined((i) => D[i])
      .curve(curve)
      .x((i) => xScale(X[i]))
      .y((i) => yScale(Y[i]));

    const svg = d3
      .create('svg')
      .attr('viewBox', [0, -10, width, height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .classed('svg-content-responsive', true);

    svg
      .append('g')
      .attr('transform', `translate(0,${yScale(1)})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('x2', width - marginLeft - marginRight)
          .attr('stroke-opacity', 0.1),
      )
      .call((g) =>
        g
          .append('text')
          .attr('x', -marginLeft)
          .attr('y', 5)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text(yLabel),
      );

    svg
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-linecap', strokeLinecap)
      .attr('stroke-linejoin', strokeLinejoin)
      .attr('stroke-opacity', strokeOpacity)
      .attr('d', line(I));

    return svg.node();
  }
}
