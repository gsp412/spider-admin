import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms'
import {RouterModule} from '@angular/router';

/* 第三方插件 */
import { ElModule } from 'element-angular';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { EchartsComponent } from './echarts/echarts.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ElModule.forRoot(),
    // NgxEchartsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
