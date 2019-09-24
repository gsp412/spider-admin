
import { Component } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  template: `
    <img class="PageNotFoundComponent" (click)="goBack()"
         src="https://dwz.cn/UKMGUmwu" alt="页面没找到">
  `,
  styles: [ ' .PageNotFoundComponent  { height: 800px  }' ],
})
export class PageNotFoundComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
