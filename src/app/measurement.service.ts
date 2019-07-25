import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor() { }

  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfitmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string){
    this.missionAnnouncedSource.next(mission);
    //next方法向Ｏｂｓｅｒｖａｂｌｅ（监听－发布者机制的实例）中推送新值，通过监听值的变化来调用方法
  }

  confirmMission(astronaut: string){
    this.missionConfirmedSource.next(astronaut);
  }

}
