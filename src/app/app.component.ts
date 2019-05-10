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
    console.log(link)
    switch (link) {
      case "BASICS":
        this.router.navigate(['/basics']);
        break;
      case "TODO":
        this.router.navigate(['/todo']);
        break;
      case "MATERIAL":
        this.router.navigate(['/AngularMaterial']);
        break;
      case "SERVICES":
        this.router.navigate(['/services']);
        break;
      case "ES6":
        this.router.navigate(['/es6']);
        break;
      case "OTHERS":
        this.router.navigate(['/others']);
        break;
      default:
        break;
    }
    // this.router.navigate(['/aboutme']);
  }
  name = 'app works!';
}
