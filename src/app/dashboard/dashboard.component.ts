import { Component, OnInit } from '@angular/core';

import { GetJsonService } from '../services/get-json.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [GetJsonService]
})
export class DashboardComponent implements OnInit {

  constructor(private jsonStr: GetJsonService) {
    console.log("DashboardComponent");
    
   }
   jsonValue;
  ngOnInit() {
  }

  getJsonFromService() {
    console.log("getJsonFromService");
    
    this.jsonValue = this.jsonStr.getJson();
  }
}
