import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {MeasurementService} from "../measurement.service";

@Component({
  selector: 'app-hero-measurement-children',
  templateUrl: './hero-measurement-children.component.html',
  styleUrls: ['./hero-measurement-children.component.scss']
})
export class HeroMeasurementChildrenComponent implements OnInit {
  @Input() name:string;
  @Input() astronaut: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  intervalId = 0;
  message = '';
  seconds = 11;

  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService:MeasurementService) {
    this.subscription= missionService.missionAnnounced$.subscribe(
        mission=>{
          this.mission = mission;
          this.announced = true;
          this.confirmed = false;
        }
    );
  }

  confirm(){
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(){
    this.clearTimer();
    this.subscription.unsubscribe();
  }

  // <!--EventEmitter－－通过事件机制来贯穿父子组件-->
  vote(agreed: boolean){
    this.voted.emit(agreed);
    this.didVote=true;
  }

  clearTimer(){
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.start();
  }

  // ngOnDestroy(){
  //
  // }

  start(){
    this.countDown();
  }

  stop(){
    this.clearTimer();
    this.message=`hold at T-${this.seconds} seconds`;
  }

  private countDown(){
    this.clearTimer();
    this.intervalId=window.setInterval(()=>{
      this.seconds -=1;
      if (this.seconds === 0){
        this.message = 'Blast off!';
      }else{
        if (this.seconds< 0){
          this.seconds = 10;
        }
        this.message =  `T-${this.seconds} seconds and counting`;
      }
    },1000);
  }

}
