import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';
import { MatRippleModule } from '@angular/material/core';
import { DatePipe, CommonModule } from '@angular/common';
import { NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbTabComponent, NbTabsetComponent } from '../../../@theme/components/tabset/tabset.component';
import { NbListComponent, NbListItemComponent } from '../../../@theme/components/list/list.component';
import { NbUserComponent } from '../../../@theme/components/user/user.component';
import { NbIconComponent } from '../../../@theme/components/icon/icon.component';

@Component({
    selector: 'ngx-contacts',
    styleUrls: ['./contacts.component.scss'],
    templateUrl: './contacts.component.html',
    standalone: true,
    imports: [
      NbCardComponent,
      NbTabsetComponent,
      NbTabComponent,
      NbListComponent,
      NbListItemComponent,
      NbUserComponent,
      NbIconComponent,
      MatRippleModule,
      CommonModule,
      DatePipe,
    ]
})
export class ContactsComponent implements OnDestroy {

  private alive = true;

  contacts: any[];
  recent: any[];

  constructor(private userService: UserData) {
    forkJoin(
      this.userService.getContacts(),
      this.userService.getRecentUsers(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
        this.contacts = contacts;
        this.recent = recent;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
