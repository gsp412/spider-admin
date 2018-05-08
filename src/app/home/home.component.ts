import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/index';
import { routerTransition } from '../common/config';

@Component({
  selector: 'app-home',
  animations: [routerTransition],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private myService: MyService) { }
  
   getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
  	this.myService.getposter()
  	.subscribe({
      next(resp){
    		console.log(resp);
      },
      error(err){
        console.log(err);
      }
  	})
  }

}
