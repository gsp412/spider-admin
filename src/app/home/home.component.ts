import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private myService: MyService) { }

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
