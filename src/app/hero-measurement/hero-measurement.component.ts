import { Component, OnInit} from '@angular/core';
import { MeasurementService } from "../measurement.service";

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
  constructor(private measureService: MeasurementService) {
  }

  // <!--EventEmitter－－通过事件机制来贯穿父子组件-->
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }


  ngOnInit() {

  }

  // <!--父组件和子组件通过服务来通讯-->

}
