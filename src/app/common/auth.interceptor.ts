import { Injectable } from '@angular/core';
import { HttpRequest,HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { tap,catchError,map } from 'rxjs/operators';


import { UserService } from '../services/user.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor{
	constructor(private userService: UserService) {}
	intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
		let authReq: HttpRequest<any>;
		if(this.userService.getToken()){
			authReq = req.clone({
				headers: req.headers.set('Authorization', `JWT ${this.userService.getToken()}`)
			})
		}else{
			authReq = req.clone()
		}
		return next.handle(authReq)
			.pipe(
				map(resp=>{return resp}),
				tap(
					event =>{},
					err=>{
						if(err.status === 403){
							console.log("这是个403错误")
						}
					}
				)
			)

		
	}

}