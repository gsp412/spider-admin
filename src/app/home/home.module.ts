import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from '../not-found.component';
import { HeaderComponent } from './header/header.component';
import { SitebarComponent } from './sitebar/sitebar.component';

import { ElModule } from 'element-angular';
import { StarAddComponent } from './star-add/star-add.component';

import { CodesPipe } from 'src/app/pipes/codes.pipe';

@NgModule({
  imports: [
    CommonModule,
    ElModule,
    ReactiveFormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    CodesPipe,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SitebarComponent,
    StarAddComponent
  ]
})
export class HomeModule { }
