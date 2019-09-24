import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElMessageService } from 'element-angular';

import { HTTP_URL } from 'src/assets/ts/vars';

@Component({
  selector: 'app-star-add',
  templateUrl: './star-add.component.html',
  styleUrls: ['./star-add.component.scss']
})
export class StarAddComponent implements OnInit {

  // 明星状态
  status = '-2';

  count = 0;

  page = 0;

  page_size = 20;

  list: Array<any>;

  push = {
    show: false,
    name: null,
    id: null
  };

  constructor(private http: HttpClient,
    private message: ElMessageService) { }

  ngOnInit() {
    this.queryStar();

  }

  // statusChange
  statusChange(event) {
    if (event !== this.status) {
      this.status = event;
      this.page = 0;
      this.count = 0;
      this.queryStar();
    }
  }

  // pageChange
  pageChange(page) {
    if (page - 1 !== this.page) {
      this.page = page - 1;
      this.queryStar();
    }
  }

  // 查询明星列表
  queryStar() {
    this.http.get(`${HTTP_URL.STAR_LIST}?page=${this.page}&page_size=${this.page_size}&type=1&status=${this.status !== '-2' ? this.status : ''}`).subscribe(
      (data) => {
        this.count = data['count'];
        this.list = data['list'];
      },
      (err) => {
        this.message.error(err.error['message']);
      },
      () => {
      }
    );
  }

  // 推送确认
  confirm(item) {
    this.push = {
      show: true,
      name: item.name,
      id: item.id,
    };
  }

  // 关闭确认框
  cancle() {
    this.push = {
      show: false,
      name: null,
      id: null
    };
  }

  // 推送
  pushExec() {
    this.http.put(`${HTTP_URL.STAR_PUSH}${this.push.id}`, null)
    .subscribe(
      (data) => {
        this.queryStar();
        this.cancle();
      },
      (err) => {
        this.message.error(err.error['message']);
        this.cancle();
      },
      () => {
        this.cancle();
      }
    );
  }

}
