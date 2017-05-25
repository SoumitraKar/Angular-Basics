import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftmenuitem',
  templateUrl: './leftmenuitem.component.html',
  styleUrls: ['./leftmenuitem.component.css']
})
export class LeftmenuitemComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() visible: boolean;
  @Input() selectedone: string;
  @Input() hoveringon: string;
  constructor() { }

  ngOnInit() {
  }

}
