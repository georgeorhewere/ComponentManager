import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, Form} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { ModelModule } from '../model/modelmodule/modelmodule.module';
import { CalendarComponent } from './calendarcomponent/calendar.component';
import { WizardStep1Component } from './wizard-step1/wizard-step1.component';
import { WizardStep2Component } from './wizard-step2/wizard-step2.component';

export const appRoutes:Routes = [
  // 1st Route
  { path: 'Previous',  component: WizardStep1Component },
  // 2nd Route
  { path: 'Next',  component: WizardStep2Component },
  // 3rd Route
 // { path: 'address',  component: AddressComponent },
  // 4th Route
  //{ path: 'result',  component: ResultComponent },
  // 5th Route
 // { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  // 6th Route
  { path: '**', component: WizardStep1Component }
]

@NgModule({
  declarations: [CalendarComponent, WizardStep1Component, WizardStep2Component],
  imports: [
    CommonModule,ModelModule, BrowserModule,FormsModule,RouterModule.forRoot(appRoutes, { useHash: true} )
  ],

  exports:[CalendarComponent,RouterModule],

})
export class CalendarModule { }
