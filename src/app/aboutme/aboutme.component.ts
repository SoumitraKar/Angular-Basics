import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '../services/test-service.service';
import { GetJsonService } from '../services/get-json.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  providers: [GetJsonService]
})
export class AboutmeComponent implements OnInit {

  jsonValue;
  private details = [];
  private errordata:any;
  constructor(private testServiceService: TestServiceService, private jsonStr: GetJsonService) { // dependancy injector
    this.getJsonFromService()
  }

  ngOnInit() {
    this.testServiceService.getDetails().subscribe(data => this.details = data);
    this.testServiceService.getErrorToHandle().subscribe(
                                            data => this.errordata = data,
                                            error => this.errordata = error
                                          );
  }

    getJsonFromService() {
      this.jsonValue = this.jsonStr.getJson();
      console.log("getJsonFromService output : " + this.jsonValue);
    }
}
