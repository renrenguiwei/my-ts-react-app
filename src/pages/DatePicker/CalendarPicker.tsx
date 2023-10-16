import * as React from "react"
import { Calendar } from "antd-mobile"
import { ICalendarPicker } from "./ICalendarPicker"
const disabledDates = ["2023-10-12", "2023-10-13"] // 要禁用的日期数组
export default class CalendarPicker extends React.Component<ICalendarPicker, any> {
  render() {
    const {
      visible,
      type,
      pickTime,
      defaultDate,
      minDate,
      maxDate,
      onCancel,
      onConfirm,
      onSelectHasDisableDate
    } = this.props
    return (
      <div>
        <Calendar
          {...this.props}
          type={type}
          pickTime={pickTime}
          visible={visible}
          onCancel={onCancel}
          onConfirm={onConfirm}
          defaultDate={defaultDate}
          minDate={minDate}
          maxDate={maxDate}
          onSelectHasDisableDate={onSelectHasDisableDate}
          getDateExtra={this.getDateExtra as any}
        />
      </div>
    )
  }

  handleDateClick(currentDate: any) {
    const formattedDate = currentDate.toLocaleDateString("en-US")
    if (disabledDates.includes(formattedDate)) {
      return false; // 阻止点击事件的默认行为
    }
    // 处理其他点击事件的逻辑
  }

  getDateExtra = (currentDate: any) => {
    const formattedDate = currentDate.toLocaleDateString("en-US")
    const isDisabled = disabledDates.includes(formattedDate)
    const className = isDisabled ? "disabled-date" : ""

    return (
      <div className={className} onClick={() => this.handleDateClick(currentDate)}>
        {currentDate}
      </div>
    )
  }
}