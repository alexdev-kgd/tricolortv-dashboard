import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  value = "" // Search value

  @ViewChild(MatMenuTrigger) filterDropdownTrigger: MatMenuTrigger

  cancelClick = (ev: MouseEvent) => {
    ev.stopPropagation();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
