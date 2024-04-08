import { Component } from '@angular/core';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { ECommerceVisitorsAnalyticsComponent } from './visitors-analytics/visitors-analytics.component';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import { CountryOrdersComponent } from './country-orders/country-orders.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { EarningCardComponent } from './earning-card/earning-card.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';

@Component({
    selector: 'ngx-ecommerce',
    templateUrl: './e-commerce.component.html',
    standalone: true,
    imports: [
        ProfitCardComponent,
        EarningCardComponent,
        TrafficRevealCardComponent,
        ECommerceChartsPanelComponent,
        CountryOrdersComponent,
        ECommerceProgressSectionComponent,
        ECommerceVisitorsAnalyticsComponent,
        ECommerceUserActivityComponent,
    ]
})
export class ECommerceComponent {
}
