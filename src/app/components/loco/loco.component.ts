import { Component, OnInit } from '@angular/core';

import { Loco } from './loco.interface'

@Component({
  selector: 'app-loco',
  templateUrl: './loco.component.html',
  styleUrls: ['./loco.component.css']
})
export class LocoComponent implements OnInit {
  public id:string;
  public ip1:string;

  constructor() { }

  ngOnInit() {
  }

}
