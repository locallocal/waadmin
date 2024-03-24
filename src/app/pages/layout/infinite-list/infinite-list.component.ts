import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbListComponent, NbListItemComponent } from '../../../@theme/components/list/list.component';
import { CommonModule } from '@angular/common';
import { NewsPostPlaceholderComponent } from './news-post-placeholder/news-post-placeholder.component';
import { NewsPostComponent } from './news-post/news-post.component';
import { NbInfiniteListDirective } from '../../../@theme/components/list/infinite-list.directive';
import { NbLayoutScrollService } from '../../../@theme/services/scroll.service';
import { NbLayoutRulerService } from '../../../@theme/services/ruler.service';

@Component({
  standalone: true,
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
  providers: [
    NbLayoutScrollService,
    NbLayoutRulerService,
  ],
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbListComponent,
    NbListItemComponent,
    NewsPostPlaceholderComponent,
    NewsPostComponent,
    NbInfiniteListDirective,
    CommonModule,
  ]
})
export class InfiniteListComponent {


  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private newsService: NewsService) {}

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }
}
