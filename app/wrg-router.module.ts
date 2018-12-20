import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrgBodyComponent } from './wrg-store/wrg-body/wrg-body.component';
import { WrgSingleComponent } from './wrg-store/wrg-body/wrg-single/wrg-single.component';
import { WrgProductComponent } from './wrg-store/wrg-body/wrg-single/wrg-product/wrg-product.component';
import { WrgGridComponent } from './wrg-store/wrg-body/wrg-single/wrg-grid/wrg-grid.component';
import { WrgSearchResponseComponent } from './wrg-store/wrg-body/wrg-single/wrg-search-response/wrg-search-response.component';
import { WrgDashComponent } from './wrg-dash/wrg-dash.component';

const wrgMap: Routes = [
    { path: '', redirectTo: '/wrg-store', pathMatch: 'full'},
    { path: 'wrg-store', component: WrgBodyComponent, children: [
        {path: '', component:WrgGridComponent },
        {path: 'product', component:WrgSingleComponent },
        {path: 'search-results', component:WrgSearchResponseComponent },
        {path: 'home', component:WrgGridComponent },
    ]},
    { path: 'wrg-dash', component: WrgDashComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(wrgMap)],
    exports: [RouterModule]
})
export class WrgRouterModule {
    
}