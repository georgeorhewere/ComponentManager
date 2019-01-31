import { DistrictCalendar } from './districtcalendar';
import {expect} from "jasmine";

describe('DistrictCalendar', () => {
  it('should create an instance', () => {
    var dCalendear =new DistrictCalendar(1,"Base calender",23);

    expect(dCalendear).toBeTruthy();
  });
});
