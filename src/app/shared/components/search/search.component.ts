import { MatMenuTrigger } from '@angular/material/menu';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  @ViewChild(MatMenuTrigger) filterDropdownTrigger: MatMenuTrigger;

  value = ""; // Search value
}
