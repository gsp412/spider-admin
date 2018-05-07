import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {homeRoutes} from './home.routes';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PageNotFoundComponent} from '../not-found.component';
import { HeaderComponent } from './header/header.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { EchartsComponent } from './echarts/echarts.component';

import { ElModule } from 'element-angular';

@NgModule({
  imports: [
    CommonModule,
    ElModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
	  HomeComponent,
	  DashboardComponent,
	  PageNotFoundComponent,
	  HeaderComponent,
	  SitebarComponent,
    FormComponent
  ]
})
export class HomeModule { }
