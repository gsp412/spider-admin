import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { ElModule } from 'element-angular';

import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    ElModule,
    RouterModule.forChild([
    	{path:"", component: ListComponent}
    ])
  ],
  declarations: [
  	ListComponent
  ]
})
export class ListModule { }
