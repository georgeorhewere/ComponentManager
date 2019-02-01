import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchedulerRepository } from '../repository/scheduler.repository';
import { StaticDataSource } from '../static.datasource';



@NgModule({
  providers:[StaticDataSource, SchedulerRepository],
  imports: [
    CommonModule

  ]
})
export class ModelModule { }
