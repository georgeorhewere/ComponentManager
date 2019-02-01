/**
 * Created by gorhewere on 1/31/2019.
 */
import { Injectable } from "@angular/core";
import { DistrictCalendar,ClassMeetingOption,DurationMeetingOption } from "./districtcalendar";
import { Observable, from } from "rxjs";



@Injectable()
export class StaticDataSource
{
    private calendars:Array<DistrictCalendar> = [
        new DistrictCalendar(690,"Nassau - Block A Nassau 2018-2019 Academic Year",62),
        new DistrictCalendar(691,"Nassau - Block B Nassau 2018-2019 Academic Year",62),
        new DistrictCalendar(689,"Nassau - Nassau 2018-2019 Academic Year",62),
        new DistrictCalendar(799,"Nassau - Nassau Winter 2019 - 2020",62),
    ];

    private meeting_options: ClassMeetingOption[] = [
        new ClassMeetingOption(1,"The same time every day",true),
        new ClassMeetingOption(2,"Different times based on the days of the week",false)
    ];

    private duration_option:DurationMeetingOption[] = [
        new DurationMeetingOption(1,"I have the same Class Meeting Schedule all year long",true),
        new DurationMeetingOption(2,"My Class Meeting Schedule change throughout the year",false),
    ];

    getCalendars(): Observable<Array<DistrictCalendar>>{
        return from([this.calendars]);
    }

  /**/
  getMeetingOptions():Observable<ClassMeetingOption[]>{
        return from([this.meeting_options]);
    }

    getDurationOptions():Observable<DurationMeetingOption[]>{
        return from([this.duration_option]);
    }




}