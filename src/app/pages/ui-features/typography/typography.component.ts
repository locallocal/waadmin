import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService, NbCardModule, NbAlertModule } from '@nebular/theme';

@Component({
    selector: 'ngx-typography',
    styleUrls: ['./typography.component.scss'],
    templateUrl: './typography.component.html',
    standalone: true,
    imports: [NbCardModule, NbAlertModule]
})
export class TypographyComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
