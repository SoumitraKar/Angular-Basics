import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})

export class LeftPanelComponent {
  cunstructor (){};
  @Output() linkChange = new EventEmitter<string>();
  @Output() toggleLeftPanel = new EventEmitter<boolean>();

  teftpanelshow = false;
  selected = 'BASICS';
  hovering = "";
  leftpaneltoggle(){
    this.teftpanelshow = !this.teftpanelshow;
    this.toggleLeftPanel.emit(this.teftpanelshow);
  }
  select(data) {
    this.selected = data;
    this.linkChange.emit(data);
  }
  hoveron(data){
    this.hovering = data;
  }
  removehover() {
    this.hovering = "";
  }
}
