import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-news-post-placeholder',
  templateUrl: 'news-post-placeholder.component.html',
  styleUrls: ['news-post-placeholder.component.scss'],
})
export class NewsPostPlaceholderComponent {

  @HostBinding('attr.aria-label')
  label = 'Loading';
}
