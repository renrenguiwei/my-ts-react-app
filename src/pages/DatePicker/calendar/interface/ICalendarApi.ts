// 接口参数
import { IHolidayTypeEnum, IWeekday, IWorkdayTypeEnum } from "./ICalendar";

export interface ICalendarApi {
  generalRules: {
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    weekdaysAmFromTime: string
    weekdaysAmThruTime: string
    weekdaysPmFromTime: string
    weekdaysPmThruTime: string
  }
  specialDays: ISpecialDays
}

interface ISpecialDays {
  [key: string]: Array<ISpecialDay>
}

export interface ISpecialDay {
  workdayTypeEnum: IWorkdayTypeEnum
  holidayTypeEnum: IHolidayTypeEnum
  workday: string // "2023-10-18 00:00:00"
}

