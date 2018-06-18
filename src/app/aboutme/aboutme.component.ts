import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  private details = [];
  private errordata:any;
  constructor(private testServiceService: TestServiceService) { // dependancy injector
  }

  ngOnInit() {
    this.testServiceService.getDetails().subscribe(data => this.details = data);
    this.testServiceService.getErrorToHandle().subscribe(
                                            data => this.errordata = data,
                                            error => this.errordata = error
                                          );
  }

}
