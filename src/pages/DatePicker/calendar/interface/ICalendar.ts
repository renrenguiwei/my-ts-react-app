// 日期类型
export enum IWorkdayTypeEnum {
  WORKING_DAY = 'WORKING_DAY',  // 工作日
  OFF_DAY = 'OFF_DAY',          // 休息日
  HOLIDAYS = 'HOLIDAYS'         // 节假日
}

// 节假日类型
export enum IHolidayTypeEnum {
  NEW_YEAR_DAY  = '元旦',
  SPRING        = '春节',
  QINGMING      = '清明',
  INTERNATIONAL_LABOUR = '劳动',
  DRAGON_BOAT   = '端午',
  MID_AUTUMN    = '中秋',
  NATIONAL_DAY  = '国庆',
  LUNAR_NEW_YEAR_EVE = '除夕',
  LANTERN       = '元宵',
  CHILDREN_DAY  = '儿童',
  PARTY_DAY     = '建党',
  ARMY_DAY      = '建军',
  DOUBLE_NINTH  = '重阳',
}

export enum INow {
  NOW = '今天',
  REST = '休'
}

export type ILabel = INow | IHolidayTypeEnum

// 星期
export enum IWeekday {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
}

// disabled日期结构
// "2023-10-01": '国庆'
// "2023-10-07": '休'
export interface IDays {
  [key: string]: ILabel
}

// 默认置灰日期
export interface IDisabledDate {
  week?: Array<IWeekday>
  days?: IDays
}

// 默可选日期，弥补置灰日期导致不可选
// [2023-01-10, ……]
export interface IEnableDate {
  days?: Array<string>
}

// 组件入参
export type IExtendCalendarProp = {
  showPickerTime?: boolean // 时间维度
  disabledDate?: IDisabledDate
  enableDate?: IEnableDate
}















