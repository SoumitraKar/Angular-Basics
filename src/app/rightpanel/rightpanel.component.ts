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

  textFromFunc() {
    return this.dataString;
  }

  onclickBtn() {
    this.data = "Changes on click"
  }
}
