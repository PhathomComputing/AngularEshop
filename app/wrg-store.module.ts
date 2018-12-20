import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './wrg-store.component';
import { WrgNavComponent } from './wrg-store/wrg-nav/wrg-nav.component';
import { WrgSearchComponent } from './wrg-store/wrg-search/wrg-search.component';
import { WrgBodyComponent } from './wrg-store/wrg-body/wrg-body.component';
import { WrgFooterComponent } from './wrg-store/wrg-footer/wrg-footer.component';
import { WrgBannerComponent } from './wrg-store/wrg-banner/wrg-banner.component';
import { WrgSingleComponent } from './wrg-store/wrg-body/wrg-single/wrg-single.component';
import { WrgProductComponent } from './wrg-store/wrg-body/wrg-single/wrg-product/wrg-product.component';
import { WrgGridComponent } from './wrg-store/wrg-body/wrg-single/wrg-grid/wrg-grid.component';
import { WrgSearchResponseComponent } from './wrg-store/wrg-body/wrg-single/wrg-search-response/wrg-search-response.component';
import { WrgDashComponent } from './wrg-dash/wrg-dash.component';
import { WrgRouterModule } from './wrg-router.module';
import { heartBeat } from './shared/services/heartbeat.service';
import { UserService } from './shared/services/users.service';
import { DropdownDirective } from './shared/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    WrgNavComponent,
    WrgSearchComponent,
    WrgBodyComponent,
    WrgFooterComponent,
    WrgBannerComponent,
    WrgSingleComponent,
    WrgProductComponent,
    WrgGridComponent,
    WrgSearchResponseComponent,
    WrgDashComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    WrgRouterModule,
  ],
  providers: [heartBeat,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
