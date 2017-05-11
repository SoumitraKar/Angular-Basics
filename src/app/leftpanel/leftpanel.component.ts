import { Component } from '@angular/core';

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})

export class LeftPanelComponent {
  teftpanelshow = false;
  leftpaneltoggle(){
    this.teftpanelshow = !this.teftpanelshow;
  }
  onClick(event: Event){
    if ( (<HTMLInputElement>event.target).className  != 'left-panel' &&
    (<HTMLInputElement>event.target).className  != 'left-panel-toggle' &&
    (<HTMLInputElement>(<HTMLInputElement>event.target).parentNode).className  != 'left-panel' &&
    (<HTMLInputElement>(<HTMLInputElement>event.target).parentNode).className  != 'left-panel-toggle') {
        this.teftpanelshow = false;
    }
  }
}
