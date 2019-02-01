import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { DistrictCalendar, DurationMeetingOption,ClassMeetingOption } from '../../model/districtcalendar'
import { SchedulerRepository} from '../../model/repository/scheduler.repository'



@Component({
  selector: 'app-wizard-step1',
  templateUrl: './wizard-step1.component.html',
  styleUrls: ['./wizard-step1.component.css']
})
export class WizardStep1Component implements OnInit {

  constructor(private  repository:SchedulerRepository, private router:Router) {

  }

  ngOnInit() {
  }

  getCalendars():DistrictCalendar[]{
    return this.repository.getDistrictCalendars();
  }

  getMeetingSchedule():ClassMeetingOption[]{
    return this.repository.getClassMeetingSchedule();
  }

  getClassDuration(): DurationMeetingOption[]{
    return this.repository.getClassDuration();
  }

  nextStep(){
    this.router.navigateByUrl("/Next", { skipLocationChange: true });
  }
}
