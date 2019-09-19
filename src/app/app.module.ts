import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocoComponent } from './components/loco/loco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocomotiveService } from './service/locomotive.service';

import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LocomotiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
