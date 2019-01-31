import { DistrictCalendar } from './districtcalendar';
import {expect, describe} from "@angular/core/testing/src/testing_internal";


describe('DistrictCalendar', () => {
  it('should create an instance', () =>  {
    expect(new DistrictCalendar(1,"Base calender",23)).toBeDefined();
  });
});
