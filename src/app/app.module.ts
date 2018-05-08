import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


/* 第三方插件 */
import { ElModule } from 'element-angular';
// import { NgProgressModule } from '@ngx-progressbar/core';

/* 组件 */ 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { appRoutes } from './app.routes';
import { MyService } from './services/index';
import { UserService } from './services/user.service';
import { JWTInterceptor } from './common/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // NgProgressModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ElModule.forRoot()
  ],
  providers: [
    FormBuilder,
    MyService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
