import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentfulService } from './contenful.service';

import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbTabsetModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
