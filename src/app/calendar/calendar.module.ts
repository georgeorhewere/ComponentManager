import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, Form} from '@angular/forms'
import { ModelModule } from '../model/modelmodule/modelmodule.module'
import { CalendarComponent } from './calendarcomponent/calendar.component'

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,ModelModule, BrowserModule,FormsModule
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
