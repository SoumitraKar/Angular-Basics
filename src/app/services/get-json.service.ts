import { Injectable } from '@angular/core';

@Injectable()
export class GetJsonService {

  constructor() {  console.log("SERVICE RUNNING"); }

  jsonVar  = [
    {
      "name" : "Soumitra"
    }
  ];

  getJson() {
    console.log("getJson run");
    return (this.jsonVar);
  }

}
