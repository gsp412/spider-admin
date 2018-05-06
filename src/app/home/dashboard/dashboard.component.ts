import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
}
