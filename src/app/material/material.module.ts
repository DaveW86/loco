import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const MatLib =[
  MatButtonModule
]

@NgModule({
  imports: [ MatLib ],
  exports: [ MatLib ]
})
export class MaterialModule { }
