
import { Component, OnInit, HostListener } from '@angular/core';
import { navMenuModel } from './nav-model/nav-menu.model';
@Component({
  selector: 'app-wrg-nav',
  templateUrl: './wrg-nav.component.html',
  styleUrls: ['./wrg-nav.component.css']
})
export class WrgNavComponent implements OnInit {
 
  accountToggle = false;
  marketToggle = false;
  printToggle = false;
  navMenu = new navMenuModel(
    
      'menuToggle','link',false
    
  );
  constructor() { }

  ngOnInit() {
  }

  menuToggle(eventData, item) {
    if(item == 'market')
    {
      this.accountToggle=false;
      this.marketToggle=!this.marketToggle;
      this.printToggle=false;
    } else if( item == 'print'){
      this.accountToggle=false;
      this.marketToggle=false;
      this.printToggle=!this.printToggle;
    } else if( item == 'account'){
      this.accountToggle=!this.accountToggle;
      this.marketToggle=false;
      this.printToggle=false;
    }

    console.log(eventData);
  }
  
}
