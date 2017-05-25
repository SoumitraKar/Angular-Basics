import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = "/a";
  open:boolean = false;
  constructor(
    private router: Router
  ) {
    router.events.subscribe((url:any) => this.url = url);
    console.log(this.url);    
    // if(this.url == "/"){
    //   this.router.navigate(['/rightpanel']);
    // }
  }
  toggleLeftPanel(open) {
    this.open = open;
  }
  changeLink(link){
    switch (link) {
      case "BASICS": 
        this.router.navigate(['/rightpanel']);
        break;
      case "DASHBOARD": 
        this.router.navigate(['/dashboard']);
        break;
      case "NEW ORDER": 
        this.router.navigate(['/dashboard']);
        break;
      case "ABOUT ME": 
        this.router.navigate(['/aboutme']);
        break;
      default:
        break;
    }
    // this.router.navigate(['/aboutme']);
  }
  name = 'app works!';
}
