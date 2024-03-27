import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';
import { MatRippleModule } from '@angular/material/core';
import { NgFor, DatePipe } from '@angular/common';
import { NbCardModule, NbTabsetModule, NbListModule, NbUserModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-contacts',
    styleUrls: ['./contacts.component.scss'],
    templateUrl: './contacts.component.html',
    standalone: true,
    imports: [NbCardModule, NbTabsetModule, NbListModule, NgFor, MatRippleModule, NbUserModule, NbIconModule, DatePipe]
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
