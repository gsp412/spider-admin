import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../common/config';

@Component({
  selector: 'app-home',
  animations: [routerTransition],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

   getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
  }

}
