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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass'],
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('barChartContainer', { static: false })
  barChartContainer: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const DATA = [
      { name: '2018', value: 10 },
      { name: '2019', value: 20 },
      { name: '2020', value: 30 },
      { name: '2021', value: 40 },
      { name: '2022', value: 50 },
    ];

    const chart = this.barChart(DATA, {
      x: (d) => d.name,
      y: (d) => d.value,
      yLabel: 'Кол-во оборудования',
      width: 850,
      height: 450,
      color: 'steelblue',
      marginLeft: 20,
    });

    this.renderer.appendChild(this.barChartContainer.nativeElement, chart);
  }

  ngOnInit(): void {}

  barChart(
    data,
    {
      x = (d, i) => i, // given d in data, returns the (ordinal) x-value
      y = (d) => d, // given d in data, returns the (quantitative) y-value
      title = undefined, // given d in data, returns the title text
      marginTop = 20, // the top margin, in pixels
      marginRight = 0, // the right margin, in pixels
      marginBottom = 30, // the bottom margin, in pixels
      marginLeft = 40, // the left margin, in pixels
      width = 640, // the outer width of the chart, in pixels
      height = 400, // the outer height of the chart, in pixels
      xDomain = undefined, // an array of (ordinal) x-values
      xRange = [marginLeft, width - marginRight], // [left, right]
      yType = d3.scaleLinear, // y-scale type
      yDomain = undefined, // [ymin, ymax]
      yRange = [height - marginBottom, marginTop], // [bottom, top]
      xPadding = 0.1, // amount of x-range to reserve to separate bars
      yFormat = '', // a format specifier string for the y-axis
      yLabel = '', // a label for the y-axis
      color = 'currentColor', // bar fill color
    } = {},
  ) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);

    // Compute default domains, and unique the x-domain.
    if (xDomain === undefined) xDomain = X;
    if (yDomain === undefined) yDomain = [0, d3.max(Y)];
    xDomain = new d3.InternSet(xDomain);

    // Omit any data not present in the x-domain.
    const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

    // Compute titles.
    if (title === undefined) {
      const formatValue = yScale.tickFormat(1, yFormat);
      title = (i) => `${X[i]}\n${formatValue(Y[i])}`;
    } else {
      const O = d3.map(data, (d) => d);
      const T = title;
      title = (i) => T(O[i], i, data);
    }

    const svg = d3
      .create('svg')
      .attr('viewBox', [0, -10, width, height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .classed('svg-content-responsive', true);

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

    const bar = svg
      .append('g')
      .attr('fill', color)
      .selectAll('rect')
      .data(I)
      .join('rect')
      .attr('x', (i) => xScale(X[i]))
      .attr('y', (i) => yScale(Y[i]))
      .attr('height', (i) => yScale(0) - yScale(Y[i]))
      .attr('width', xScale.bandwidth());

    if (title) bar.append('title').text(title);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(xAxis);

    const node = svg.node();

    return node;
  }
}
