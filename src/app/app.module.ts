import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DblclickComponent } from './capturing-double-click-event/dblclick/dblclick.component';
@NgModule({
  declarations: [
    AppComponent,
    DblclickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
