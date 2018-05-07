import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MyService {

  constructor(public http: HttpClient) {
  }


  // 数据获取
  private getUrl = 'http://www.yunye123.com/api/v1/poster/posters';
  getposter(){
    // return this.http.get(this.getUrl)
    return this.http.get(this.getUrl)
    
  }


}