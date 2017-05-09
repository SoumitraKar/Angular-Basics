import { Component } from '@angular/core';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})

export class LeftPanelComponent {
  teftpanelshow = false;
  leftpaneltoggle(){
    this.teftpanelshow = !this.teftpanelshow;
  }

}
