import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-step2',
  templateUrl: './wizard-step2.component.html',
  styleUrls: ['./wizard-step2.component.css']
})
export class WizardStep2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }



  previousStep(){
    this.router.navigateByUrl("/Previous", { skipLocationChange: true });
  }
}
