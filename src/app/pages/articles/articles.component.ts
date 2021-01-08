import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PaginatorLabelService } from 'src/app/shared/services/paginator-label.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements AfterViewInit {
  value = ""

  //MatPaginator Inputs
  length = 50;
  pageSize = 10;

  constructor() { }

  ngAfterViewInit(): void {

  }
}


