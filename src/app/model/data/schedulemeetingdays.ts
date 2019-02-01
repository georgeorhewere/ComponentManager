export class ScheduleMeetingDays {
    private selectedMeetingDays: Array<MeetingDay>;

    constructor() {
        this.initDays();
    }

    private initDays() {
        this.selectedMeetingDays = new Array<MeetingDay>();

        this.selectedMeetingDays.push(new MeetingDay("Monday", true, true, 1));
        this.selectedMeetingDays.push(new MeetingDay("Tuesday", true, true, 2));
        this.selectedMeetingDays.push(new MeetingDay("Wednesday", true, true, 3));
        this.selectedMeetingDays.push(new MeetingDay("Thursday", true, true, 4));
        this.selectedMeetingDays.push(new MeetingDay("Friday", true, true, 5));
        this.selectedMeetingDays.push(new MeetingDay("Saturday", false, false, 6));
        this.selectedMeetingDays.push(new MeetingDay("Sunday", false, false, 7));
    }

    getMeetingDaysOfTheWeek(): Array<MeetingDay> {
        return this.selectedMeetingDays.filter(x=> x.visible);
    }

}


export class MeetingDay {
    constructor(dayValue: string, isSelected: boolean, isVisible: boolean, order: number) {
        this.day = dayValue;
        this.selected = isSelected;
        this.visible = isVisible;
        this.order = order;
    }

    day: string;
    selected: boolean;
    visible: boolean;
    order: number;
}