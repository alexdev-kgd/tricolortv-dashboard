import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {
  value = ""

  //MatPaginator Inputs
  length = 50;
  pageSize = 10;

  constructor() { }

  ngOnInit(): void {

  }
}


