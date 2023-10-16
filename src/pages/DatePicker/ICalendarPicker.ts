/**
 * 今天有一个【今】字
 *
 * 2、工作日历开启
 * 2.1 走接口
 *    2.1.1 获取特殊节假日时间 IWorkdayType
 *      （选做）最好显示出节假日名字
 *    2.1.2 滚动至上1月、下12月时，再获取接口，节约资源
 *
 * 2.2 09:00 可指定
 * 2.3 灰色不可点击
 *
 */
export interface ICalendarPicker {
  visible: boolean      // 是否显示
  type: "one" | "range" // 选择类型 one: 单日 range: 日期区间
  pickTime: boolean     // 是否选择时间
  defaultDate: Date     // 默认选中日期
  minDate: Date         // 最小日期范围
  maxDate: Date         // 最大日期范围
  onCancel: () => void
  onConfirm: (startDateTime?: Date, endDateTime?: Date) => void
  onSelectHasDisableDate: (date: Date[]) => void
  disabledDates: any
  onSelect: any
}

export enum IWorkdayType {
  WORKING_DAY,  // 工作日
  OFF_DAY,      // 休息日
  HOLIDAYS      // 节假日
}