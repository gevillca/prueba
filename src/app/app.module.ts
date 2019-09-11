import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './compoents/prueba/prueba.component';
import { Prueba1Component } from './compoents/prueba1/prueba1.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
