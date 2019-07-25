import {Component, OnInit, ViewChild} from '@angular/core';
import { MeasurementService } from "../measurement.service";
import {HeroMeasurementChildrenComponent} from "../hero-measurement-children/hero-measurement-children.component";

@Component({
  selector: 'app-hero-measurement',
  templateUrl: './hero-measurement.component.html',
  styleUrls: ['./hero-measurement.component.scss'],
  providers:[MeasurementService]
})
export class HeroMeasurementComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission= 0;


  //viewChild
  @ViewChild(HeroMeasurementChildrenComponent,{static:false})
  private heroMeasure: HeroMeasurementChildrenComponent;

  seconds(){return 0}

  ngAfterViewInit(){
    setTimeout(()=>{this.seconds=()=>this.heroMeasure.seconds,0})
  }

  start(){this.heroMeasure.start()}
  stop(){this.heroMeasure.stop()}


  constructor(
      private measureService: MeasurementService
  ) {
    measureService.missionConfitmed$.subscribe(
        astronaut=>{
          this.history.push(`${astronaut} confirmed the mission`);
        }
    )
  }

  announce(){
    let mission = this.missions[this.nextMission++];
    this.measureService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission>= this.missions.length){
      this.nextMission = 0
    }
  }

  // <!--EventEmitter－－通过事件机制来贯穿父子组件-->
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }


  ngOnInit() {

  }

  // <!--父组件和子组件通过服务来通讯-->

}
