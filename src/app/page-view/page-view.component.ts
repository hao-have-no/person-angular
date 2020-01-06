import { Component, OnInit } from '@angular/core';
import { PageService } from "../page.service";
import {pageInfo} from "../pageInfo";
import * as echarts from 'echarts';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {

  public visit={
    pageName:[],
    sum:[],
    count:[],
    avg:[]
  };

  public visitOption={};

  constructor(private pageService: PageService) {

  }

  //处理图表数据
  fitChartData(val){
    val.data.map(item=>{
      this.visit.pageName.push(item.page_name);
      this.visit.sum.push(item.sum);
      this.visit.count.push(item.count);
      this.visit.avg.push(Math.ceil((item.sum/item.count)));
    });
    this.drawCharts();
  }

  //渲染图表
  drawCharts(){
    this.visitOption= {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data:['时间','访问量','平均访问量']
      },
      xAxis: [
        {
          type: 'category',
          data: this.visit.pageName,
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '时长/次数',
          interval: 500,
          axisLabel: {
            formatter: '{value} min/次'
          }
        },
        {
          type: 'value',
          name: '平均每次停留时间',
          interval: 10,
          axisLabel: {
            formatter: '{value} 次/min'
          }
        }
      ],
      series: [
        {
          name:'访问时长',
          type:'bar',
          data:this.visit.sum
        },
        {
          name:'访问次数',
          type:'bar',
          data:this.visit.count
        },
        {
          name:"平均每次停留时长",
          type:'line',
          yAxisIndex: 1,
          data:this.visit.avg
        }
      ]
    };
  }

  ngOnInit() {
    this.pageService.getPageInfo().subscribe(
        val=>{
          this.fitChartData(val)
        }
    )
  }

}
