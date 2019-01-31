export class DistrictCalendar {
    constructor(id:number,display:string,district:number){
        this.CalendarId = id;
        this.CalendarText = display;
        this.DistrictId = district;
    }

    CalendarId: number;
    CalendarText:string;
    DistrictId:number;
}

export class ClassMeetingOption {
    constructor(id:number, display:string, isDefault:boolean){
        this.meetingOptionId = id;
        this.meetingOption= display;
        this.isDefault = isDefault;
    }
    meetingOptionId: number;
    meetingOption:string;
    isDefault:boolean;
}

export class DurationMeetingOption {
    constructor(id:number, display:string, isDefault:boolean){
        this.durationOptionId = id;
        this.durationOption = display;
        this.isDefault = isDefault;
    }
    durationOptionId: number;
    durationOption:string;
    isDefault:boolean;
}

