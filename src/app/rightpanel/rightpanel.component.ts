import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {

  constructor() {
  //alert("constructor");
  }

  ngOnInit() {
  //alert("ngOnInit");
  }
  data ='Text From Variable';
  id = "text1";
  dataString = 'Text From Function';
  showthis = true;
  dontShowthis = false;
  showIf = true;
  items = ['item 1', 'item 2'];
  
  toggleIfElse() {
    this.showIf = !this.showIf;
  }
  textFromFunc() {
    return this.dataString;
  }
  onChangeOfTextBox(event: Event){ // or event: any
    this.data = (<HTMLInputElement>event.target).value //event.target.value if event is any
  }
  onclickBtn() {
    this.data = "Changes on click"
  }
  additems() {
    var item = "item " + Math.floor(Math.random()*10);
    this.items.push(item);
    console.log(this.items)
  }

}
