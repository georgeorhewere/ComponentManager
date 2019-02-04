import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleMeetingDays} from '../../model/data/schedulemeetingdays'

@Component({
  selector: 'app-wizard-step2',
  templateUrl: './wizard-step2.component.html',
  styleUrls: ['./wizard-step2.component.css']
})
export class WizardStep2Component implements OnInit {

  public meetingDays: ScheduleMeetingDays;
  constructor(private router:Router) { }

  ngOnInit() {
    this.meetingDays = new ScheduleMeetingDays();
  }

  start_time={hour:8,minute:30};
  end_time={hour:18,minute:30};

  previousStep(){
    this.router.navigateByUrl("/Previous", { skipLocationChange: true });
  }
}
