import { TranslationService } from '@services/translation.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FontSizeService } from '@shared/services/font-size.service';
import { Observable } from 'rxjs';
import { PaginatorArticlesService } from './paginator-articles.service';
import Article from '@shared/models/article.model';
import { SETTINGS_DEFAULT_CONTENT_LANGUAGE } from '@shared/constants/settings';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: PaginatorArticlesService
  }]
})
export class ArticlesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // MatPaginator Inputs
  length = 50;

  pageSize = +localStorage.getItem('articlesCount') || 10;

  fontSizeValue: string;

  articles_en: Article[] = [{
    title: 'Information about Tricolor TV',
    datePublished: '15.06.19',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'In malesuada mi lorem, non ultricies eros consequat eget. Nullam blandit ' +
    'consectetur arcu, pharetra rutrum leo pharetra et. Praesent luctus ipsum ac ' +
    'tellus placerat, a dapibus felis suscipit. Curabitur in tristique metus. Etiam ' +
    'euismod tincidunt lorem vitae consequat. Nam a elit quam. Duis non vulputate justo. ' +
    'Phasellus odio erat, luctus sed auctor tempus, vehicula at tortor. Quisque hendrerit ' +
    'tristique dui a pellentesque. Vestibulum in molestie metus, nec vulputate lectus. ' +
    'Aliquam erat volutpat. Nunc convallis tortor commodo elit lacinia egestas.'
  }, {
    title: 'Information about Tricolor TV',
    datePublished: '15.06.19',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'In malesuada mi lorem, non ultricies eros consequat eget. Nullam blandit ' +
    'consectetur arcu, pharetra rutrum leo pharetra et. Praesent luctus ipsum ac ' +
    'tellus placerat, a dapibus felis suscipit. Curabitur in tristique metus. Etiam ' +
    'euismod tincidunt lorem vitae consequat. Nam a elit quam. Duis non vulputate justo. ' +
    'Phasellus odio erat, luctus sed auctor tempus, vehicula at tortor. Quisque hendrerit ' +
    'tristique dui a pellentesque. Vestibulum in molestie metus, nec vulputate lectus. ' +
    'Aliquam erat volutpat. Nunc convallis tortor commodo elit lacinia egestas.'
  }, {
    title: 'Information about Tricolor TV',
    datePublished: '15.06.19',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'In malesuada mi lorem, non ultricies eros consequat eget. Nullam blandit ' +
    'consectetur arcu, pharetra rutrum leo pharetra et. Praesent luctus ipsum ac ' +
    'tellus placerat, a dapibus felis suscipit. Curabitur in tristique metus. Etiam ' +
    'euismod tincidunt lorem vitae consequat. Nam a elit quam. Duis non vulputate justo. ' +
    'Phasellus odio erat, luctus sed auctor tempus, vehicula at tortor. Quisque hendrerit ' +
    'tristique dui a pellentesque. Vestibulum in molestie metus, nec vulputate lectus. ' +
    'Aliquam erat volutpat. Nunc convallis tortor commodo elit lacinia egestas.'
  }];

  articles: Article[] = [{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, ' +
    'осуществляющий с конца 2005 года цифровое вещание пакета телевизионных каналов на европейскую ' +
    'часть страны, а также территории Сибирского, Уральского и части Дальневосточного округов. ' +
    'Согласно исследованиям компании IHS Screen Digest, Триколор – лидер российского рынка платного ' +
    'телевидения (37,4% абонентов). В сегменте спутникового ТВ доля абонентов оператора целых 83%! ' +
    'На текущий момент Триколор является самым массовым оператором платного телевидения в Европе. ' +
    'Входит по этому показателю в четверку мировых лидеров платного -ТВ. В рейтинге крупнейших ' +
    'спутниковых ТВ-операторов в мире «Триколор ТВ» занимает третью строчку по количеству абонентов.'
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, ' +
    'осуществляющий с конца 2005 года цифровое вещание пакета телевизионных каналов на европейскую ' +
    'часть страны, а также территории Сибирского, Уральского и части Дальневосточного округов. ' +
    'Согласно исследованиям компании IHS Screen Digest, Триколор – лидер российского рынка платного ' +
    'телевидения (37,4% абонентов). В сегменте спутникового ТВ доля абонентов оператора целых 83%! ' +
    'На текущий момент Триколор является самым массовым оператором платного телевидения в Европе. ' +
    'Входит по этому показателю в четверку мировых лидеров платного -ТВ. В рейтинге крупнейших ' +
    'спутниковых ТВ-операторов в мире «Триколор ТВ» занимает третью строчку по количеству абонентов.'
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, ' +
    'осуществляющий с конца 2005 года цифровое вещание пакета телевизионных каналов на европейскую ' +
    'часть страны, а также территории Сибирского, Уральского и части Дальневосточного округов. ' +
    'Согласно исследованиям компании IHS Screen Digest, Триколор – лидер российского рынка платного ' +
    'телевидения (37,4% абонентов). В сегменте спутникового ТВ доля абонентов оператора целых 83%! ' +
    'На текущий момент Триколор является самым массовым оператором платного телевидения в Европе. ' +
    'Входит по этому показателю в четверку мировых лидеров платного -ТВ. В рейтинге крупнейших ' +
    'спутниковых ТВ-операторов в мире «Триколор ТВ» занимает третью строчку по количеству абонентов.'
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, ' +
    'осуществляющий с конца 2005 года цифровое вещание пакета телевизионных каналов на европейскую ' +
    'часть страны, а также территории Сибирского, Уральского и части Дальневосточного округов. ' +
    'Согласно исследованиям компании IHS Screen Digest, Триколор – лидер российского рынка платного ' +
    'телевидения (37,4% абонентов). В сегменте спутникового ТВ доля абонентов оператора целых 83%! ' +
    'На текущий момент Триколор является самым массовым оператором платного телевидения в Европе. ' +
    'Входит по этому показателю в четверку мировых лидеров платного -ТВ. В рейтинге крупнейших ' +
    'спутниковых ТВ-операторов в мире «Триколор ТВ» занимает третью строчку по количеству абонентов.'
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, ' +
    'осуществляющий с конца 2005 года цифровое вещание пакета телевизионных каналов на европейскую ' +
    'часть страны, а также территории Сибирского, Уральского и части Дальневосточного округов. ' +
    'Согласно исследованиям компании IHS Screen Digest, Триколор – лидер российского рынка платного ' +
    'телевидения (37,4% абонентов). В сегменте спутникового ТВ доля абонентов оператора целых 83%! ' +
    'На текущий момент Триколор является самым массовым оператором платного телевидения в Европе. ' +
    'Входит по этому показателю в четверку мировых лидеров платного -ТВ. В рейтинге крупнейших ' +
    'спутниковых ТВ-операторов в мире «Триколор ТВ» занимает третью строчку по количеству абонентов.'
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ 2222',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  },{
    title: 'Информация о Триколор ТВ',
    datePublished: '15.06.19',
    text: 'Триколор — это самый крупный оператор цифрового спутникового телевидения в России, '
  }];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.getContentByLanguage());

  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private fontSizeService: FontSizeService,
              private translationService: TranslationService) {
  }

  getContentByLanguage(): Article[] {
    const contentLanguage = localStorage.getItem('contentLanguage') || SETTINGS_DEFAULT_CONTENT_LANGUAGE;

    switch (contentLanguage) {
      case 'ru':
        return this.articles;
        break;
      case 'en':
        return this.articles_en;
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.fontSizeValue = this.fontSizeService.getFontSizeClass();

    this.translationService.currentLanguage.subscribe(() => this.translationService.checkLanguage());
  }

  ngOnDestroy(): void {
    if(this.dataSource) this.dataSource.disconnect();
  }
}
