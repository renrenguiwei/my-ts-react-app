import dayjs from "dayjs";
import {
  IDays,
  IDisabledDate,
  IEnableDate,
  IHolidayTypeEnum,
  ILabel,
  INow,
  IWeekday,
  IWorkdayTypeEnum
} from "../interface/ICalendar";
import { ICalendarApi, ISpecialDay } from "../interface/ICalendarApi";

/*
  小文字
  1. 休 				- OFF_DAY[休息日]/HOLIDAYS[节假日]
  2. 元旦、春节…… - HOLIDAYS[节假日]
*/
const today = dayjs();
export const renderCalendarLabel = (date: Date, days?: IDays): ILabel | undefined => {
  let label: ILabel | undefined = undefined
  const Y_M_D: string = dayjs(date).format('YYYY-MM-DD') // 2023-10-01

  if (dayjs(date).isSame(today, "day")) label = INow.NOW

  if (days?.[Y_M_D]) {
    label = days?.[Y_M_D]
  }

  return label
}

/*
  置灰规则
  1. 处理 星期
  2. 处理 OFF_DAY[休息日]/HOLIDAYS[节假日]
  特殊可选
  1. 处理 WORKING_DAY[工作日]
*/
export const shouldDisableDate = (date: Date, disabledDate?: IDisabledDate, enableDate?: IEnableDate): boolean => {
  const { week: weekDisabled, days: daysDisabled } = disabledDate || {}
  const { days: daysEnable } = enableDate || {}

  const nowWeek: IWeekday = date.getDay()
  const Y_M_D: string = dayjs(date).format('YYYY-MM-DD') // 2023-10-01

  // 默认启用
  let status: boolean = false

  if (
    weekDisabled?.includes(nowWeek) ||
    daysDisabled?.[Y_M_D]
  ) status = true

  if (daysEnable?.includes(Y_M_D)) status = false

  return status
}

export const onChange = (val: any) => {

}

// 对日历数据进行整理
export const assignCalendarDate = (data: ICalendarApi): {
  disabledDate?: IDisabledDate
  enableDate?: IEnableDate
} | {} => {
  let res: any = {}
  const { generalRules, specialDays } = data || {}

  // 处理星期
  if (generalRules) {
    let disabledDate: IDisabledDate = { week: [] }
    for (let key in generalRules) {
      // @ts-ignore
      const match = IWeekday?.[key]
      // @ts-ignore
      const val = generalRules[key]
      if (match !== undefined && val === false) {
        disabledDate.week?.push(match)
      }
    }
    res.disabledDate = disabledDate
  }

  // 小字、处理额外工作日
  if (specialDays) {
    let disabledDate: IDisabledDate = { days: {} }
    let enabledDate: IEnableDate = { days: [] }

    for (let key in specialDays) {
      const days: Array<ISpecialDay> = specialDays[key] || []

      days.forEach((item) => {
        const Y_M_D = item?.workday?.substring(0, 10)
        if (Y_M_D) {
          // 休
          if ([IWorkdayTypeEnum.OFF_DAY, IWorkdayTypeEnum.HOLIDAYS].includes(item?.workdayTypeEnum)) {
            // @ts-ignore
            disabledDate['days'][Y_M_D] = INow.REST
          }
          // 春节
          if (item?.holidayTypeEnum !== undefined) {
            // @ts-ignore
            disabledDate['days'][Y_M_D] = IHolidayTypeEnum[item?.holidayTypeEnum]
          }
          // 处理额外工作日
          if (item?.workdayTypeEnum === IWorkdayTypeEnum.WORKING_DAY) {
            enabledDate.days?.push(Y_M_D)
          }
        }
      })
    }

    res.disabledDate = {
      ...res.disabledDate,
      ...disabledDate
    }

    res.enableDate = enabledDate
  }

  return res
}

