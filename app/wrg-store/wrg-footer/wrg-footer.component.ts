import { Component, OnInit,  } from '@angular/core';
import { heartBeat } from '../../shared/services/heartbeat.service';

@Component({
  selector: 'app-wrg-footer',
  templateUrl: './wrg-footer.component.html',
  styleUrls: ['./wrg-footer.component.css']
})
export class WrgFooterComponent implements OnInit {

  pulse = new heartBeat();
  constructor() { }

  ngOnInit() {
    setTimeout(this.showTime(),1000);
  }
  startTime(){
  
  }
  showTime(){
    this.pulse.timeTick();
  }
  
  incTime(){
  }


}
