import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tableData=[
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422},
  	{date:"2017-1-4",new: 500,day_active:2815,week_active: 5544,month_active:1422}
  ]


  handle(time: number): void {
	  // [time] is string
	  // date style follow format props
	  console.log(time)
	}
}
