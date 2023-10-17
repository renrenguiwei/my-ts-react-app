import * as React from "react"
import { Button, PickerView } from "antd-mobile"
import { Calendar as BaseCalendar, CalendarProps } from "./calendar";
import { IExtendCalendarProp } from "./interface/ICalendar";
import { onChange, renderCalendarLabel, shouldDisableDate } from "./utils/dateUtils"
import { PickTimeConfig } from "./interface/IPickerTime"
import { Header } from "./components/Header"

import "./calendar.less"

export default class Calendar extends React.Component<IExtendCalendarProp & CalendarProps, any> {
  render() {
    const {
      showPickerTime = true,
      selectionMode = 'single',
      weekStartsOn = 'Sunday',
      disabledDate,
      enableDate
    } = this.props || {}
    return (
      <div className="calendar-container">
        <Header title="日期选择" handleClose={() => null}/>
        <BaseCalendar
          selectionMode={selectionMode}
          weekStartsOn={weekStartsOn}
          renderLabel={(date: Date) => renderCalendarLabel(date, disabledDate?.days)}
          shouldDisableDate={(date: Date) => shouldDisableDate(date, disabledDate, enableDate)}
          onChange={onChange}
        />
        { showPickerTime ?
          <PickerView
            onChange={() => null}
            onScrollChange={() => null}
            value={[]}
            data={PickTimeConfig}
            cascade={false}
          /> : null}
        <Button type="primary" className="cac-btn">确认</Button>
      </div>
    )
  }
}
