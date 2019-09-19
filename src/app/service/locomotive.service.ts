import { Injectable } from '@angular/core';

import { Loco } from '../components/loco/loco.interface'

@Injectable({
  providedIn: 'root'
})
export class LocomotiveService {
  locos:Loco[] = [
    {
      id:'UP8888',
      ip1:'8.8.8.8'
    }, 
    {
      id:'UP1111'
    }, 
    {
      id:'UP2222',
      ip1:'2.2.2.2'
    }
  ]
  constructor() { }

  getListLoco():Loco[]{
    return this.locos;
  }
}
