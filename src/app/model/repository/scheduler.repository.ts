import {Injectable} from '@angular/core'
import {DistrictCalendar, DurationMeetingOption, ClassMeetingOption}  from '../districtcalendar'
import  {StaticDataSource} from '../static.datasource'

@Injectable({ providedIn:'root' })
export class SchedulerRepository {
    private district_calendars: DistrictCalendar[] = [];
    private meeting_options: ClassMeetingOption[] = [];

    private durations_options: DurationMeetingOption[] = [];

    constructor(private datasource: StaticDataSource) {
        //Load calendars
        datasource.getCalendars().subscribe(data => {
            this.district_calendars = data;
        });

 /**/       //Load meeting options
        datasource.getMeetingOptions().subscribe(options => {
            this.meeting_options = options;
        });

        //load duration options
        datasource.getDurationOptions().subscribe(durations => {
            this.durations_options = durations;
        });

    }

    getDistrictCalendars(): DistrictCalendar[]
    {
        return this.district_calendars;
    }


}
