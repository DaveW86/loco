import { Component, OnInit } from '@angular/core';
import { LocomotiveService } from './service/locomotive.service';

import { Loco } from './components/loco/loco.interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  locos:Loco[] = [];

  constructor( private _locoService:LocomotiveService ){}

  ngOnInit(){
    this.locos = this._locoService.getListLoco();
  }
  addLoco(loco:Loco){
    this.locos.push(loco)
    console.log(this.locos);
    
  }
}
