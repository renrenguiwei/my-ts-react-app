import * as React from "react"
import { Button, PickerView } from "antd-mobile"
import { Calendar as BaseCalendar, CalendarProps } from "./calendar";
import { IExtendCalendarProp } from "./interface/ICalendar";
import { renderCalendarLabel, shouldDisableDate } from "./utils/dateUtils"
import { combineStamp, convertTimeArray } from "./utils/timeUtils";
import { PickTimeConfig } from "./interface/IPickerTime"
import { Header } from "./components/Header"

import "./calendar.less"

type MergedType = CalendarProps & IExtendCalendarProp

type State = {
  date: Date,
  time: Array<string>
}

export default class Calendar extends React.Component<MergedType, State> {
  constructor(props: MergedType) {
    super(props);

    const defaultDate = props?.timestamp || new Date().setHours(0, 0, 0, 0)
    this.state = {
      date: new Date(defaultDate),
      time: convertTimeArray(new Date(defaultDate))
    }
  }

  render() {
    const {
      showPickerTime = true,
      selectionMode = 'single',
      disabledDate,
      enableDate,
      ...otherProps
    } = this.props || {}

    return (
      <div className="calendar-container">

        <Header title="日期选择" handleClose={() => null}/>

        <BaseCalendar
          {...otherProps as any}
          selectionMode={selectionMode}
          renderLabel={(date: Date) => renderCalendarLabel(date, disabledDate?.days)}
          shouldDisableDate={(date: Date) => shouldDisableDate(date, disabledDate, enableDate)}
          onChange={(date:Date) => this.setState({ date })}
          value={this.state.date}
        />

        { showPickerTime ?
          <PickerView
            data={PickTimeConfig}
            cascade={false}
            onChange={(time: Array<string>) => this.setState({ time })}
            value={this.state.time}
          /> : null}

        <Button type="primary" className="cac-btn" onClick={ () => this.submit()}>确认</Button>
      </div>
    )
  }

  // 确定整理数据
  private submit() {
    const { date, time } = this.state
    const timestamp = combineStamp(date, time)
    this.props?.handleConfirm?.(timestamp)
  }
}
