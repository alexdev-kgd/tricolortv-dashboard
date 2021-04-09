import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
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
export class ArticlesComponent {
  // MatPaginator Inputs
  length = 50;

  pageSize = 10;
}
