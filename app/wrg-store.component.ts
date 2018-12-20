import { Component } from '@angular/core';
import { heartBeat } from './shared/services/heartbeat.service';
import { UserService } from './shared/services/users.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'project-wrg';
  public pulse = new heartBeat();
  public userService = new UserService();
  showTime(){
    console.log(this.pulse.getPulse());
  }

  onLogin(){
    this.userService.loggedIn=true;
    console.log(this.userService.loggedIn);
  }
  onLogout(){
    this.userService.loggedIn=false;
    console.log(this.userService.loggedIn);

  }
}
