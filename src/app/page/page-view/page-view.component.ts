import { Component, OnInit } from '@angular/core';
import { PageService } from "../../services/page.service";

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
        ],
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
          name:"平均访问次数",
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
