import { Injectable } from '@angular/core';
import * as d3 from "d3";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() {}

  loadD3JSON(filename:string, element:string) {
    d3.json(filename, (err, json) => {
      try {
        let svg = d3.select(element).append('svg')
        .attr('width', 300).attr('height', 300);

        svg.selectAll('rect')
        .data(json)
        .enter()
        .append('rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('x', (d, i) => {
            return d
        }).attr('y', (d, i) => {
            return d
        }).attr('fill', (d, i) => {
          let colors = {};
          return colors[d]
        });        
      } catch (err) {
        console.log(`Cannot load file ${err}`);
      }
    });
  }

}
