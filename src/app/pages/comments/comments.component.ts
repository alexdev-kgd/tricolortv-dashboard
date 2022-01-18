import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { FontSizeService } from '@shared/services/font-size.service';
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
export class CommentsComponent implements OnInit {
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
