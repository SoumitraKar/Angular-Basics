import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  data:string = "This is a test Data";
  items:any = {
    "Name" : "Soumitra",
    "Contact No" : "+91 900 843 4668",
    "Nationality" : "Indian"
  };
  dateVar:any = new Date();
  aNumber:number = 76.55;

}
