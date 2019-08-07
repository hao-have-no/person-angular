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

  private name:{
    pageName:any,
    sum:any,
    count:any
  };

  public chartOption={
    backgroundColor: '#2c343c',
    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 274, name: '联盟广告' },
          { value: 235, name: '视频广告' },
          { value: 400, name: '搜索引擎' }
        ].sort(function(a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.6)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
          return Math.random() * 200;
        }
      }
    ]
  }


  constructor(private pageService: PageService) {

  }

  //处理图表数据
  fitChartData(val: any){
    val.data.map(item=>{
      this.name.pageName.push(item.page);
      this.name.sum.push(item.sum);
      this.name.count.push(item.count);
    })
  }

  //渲染图表
  // drawCharts(){
  //   const echarts=echarts.init(document.getElementById('routeView'));
  //   const option = {
  //     tooltip: {
  //       trigger: 'axis',
  //       axisPointer: {
  //         type: 'cross',
  //         crossStyle: {
  //           color: '#999'
  //         }
  //       }
  //     },
  //     toolbox: {
  //       feature: {
  //         dataView: {show: true, readOnly: false},
  //         magicType: {show: true, type: ['line', 'bar']},
  //         restore: {show: true},
  //         saveAsImage: {show: true}
  //       }
  //     },
  //     legend: {
  //       data:['蒸发量','降水量','平均温度']
  //     },
  //     xAxis: [
  //       {
  //         type: 'category',
  //         data: this.name.pageName,
  //         axisPointer: {
  //           type: 'shadow'
  //         }
  //       }
  //     ],
  //     yAxis: [
  //       {
  //         type: 'value',
  //         name: '停留时长',
  //         min: 0,
  //         max: 250,
  //         interval: 50,
  //         axisLabel: {
  //           formatter: '{value} min'
  //         }
  //       },
  //       {
  //         type: 'value',
  //         name: '访问量',
  //         min: 0,
  //         max: 25,
  //         interval: 5,
  //         axisLabel: {
  //           formatter: '{value} 次'
  //         }
  //       }
  //     ],
  //     series: [
  //       {
  //         name:'访问时长',
  //         type:'bar',
  //         data:this.name.sum
  //       },
  //       {
  //         name:'访问次数',
  //         type:'line',
  //         yAxisIndex: 1,
  //         data:this.name.count
  //       }
  //     ]
  //   };
  //   echarts.setOption
  // }

  ngOnInit() {
    this.pageService.getPageInfo().subscribe(
        val=>{this.fitChartData(val)}
    )
  }

}
