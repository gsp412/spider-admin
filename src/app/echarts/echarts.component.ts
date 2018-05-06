import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {
	showloading:boolean = true;
	echartOption: any;

  constructor() { 
  	setTimeout(()=>{
  		this.showloading = false;
  	},2000);
  }

  ngOnInit() {
  	this.echartOption = {
	    xAxis: {
	        type: 'category',
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	        data: [820, 932, 901, 934, 1290, 1330, 1320],
	        type: 'line',
	        smooth: true
	    }]
	};
  }

   

}
