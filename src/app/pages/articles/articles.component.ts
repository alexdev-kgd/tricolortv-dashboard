import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { FontSizeService } from '@shared/services/font-size.service';
import { PaginatorArticlesService } from './paginator-articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: PaginatorArticlesService
  }]
})
export class ArticlesComponent implements OnInit {
  // MatPaginator Inputs
  length = 50;

  pageSize = 10;

  fontSizeValue: string;

  constructor(private fontSizeService: FontSizeService) {
  }

  ngOnInit(): void {
    this.fontSizeValue = this.fontSizeService.getFontSizeClass();
  }
}
