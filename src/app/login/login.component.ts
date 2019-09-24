import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { HTTP_URL, DEFAULT, MESSAGE } from 'src/assets/ts/vars';
import { ElMessageService } from 'element-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // 验证码参数
  param: string = null;

  // 验证码图片
  code_url = DEFAULT.CODE_PIC;

  // username
  user_name: string = null;

  // password
  password: string = null;

  // code
  code: string = null;

  constructor(private http: HttpClient,
     private message: ElMessageService,
     private router: Router) { }

  ngOnInit() {
    this.getCode();
  }

  // 获取验证码
  getCode() {
    const tm = Date.parse(new Date().toString());
    this.param = (tm * (1 + Math.random() * 0.01)).toFixed();

    this.http.get(`${HTTP_URL.CODE_URL}?param=${this.param}&_=${tm.toFixed()}`, {}).subscribe(
      (data) => {
        if (data['code'] === '200') {
          this.code_url = `http://${environment.casHost}/${data['url']}`;
        }
      },
      (err) => {
      },
      () => {
      }
    );
  }

  // 检查参数有效性
  check() {
    if (this.user_name == null || this.user_name.length === 0) {
      this.message.error(MESSAGE.USER_NAME_NOT_EMPTY);
      return false;
    }

    if (this.password == null || this.password.length === 0) {
      this.message.error(MESSAGE.PASSWORD_NOT_EMPTY);
      return false;
    }

    return true;
  }

  // login
  login() {
    if (!this.check()) {
      return;
    }

    const param = {
      user_name: this.user_name,
      password: this.password,
      param: this.param,
      code: this.code
    };

    this.http.post(HTTP_URL.LOGIN, param).subscribe(
      (data) => {
        console.log(data);
        // 跳转
        this.router.navigate(['/home']);
      },
      (err) => {
        this.message.error(err.error['message']);
      },
      () => {
      }
    );
  }
}
