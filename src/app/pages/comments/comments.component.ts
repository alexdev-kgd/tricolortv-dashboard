import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorCommentsService } from './paginator-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: PaginatorCommentsService
  }]
})
export class CommentsComponent {
  // MatPaginator Inputs
  length = 50;

  pageSize = 10;
}
