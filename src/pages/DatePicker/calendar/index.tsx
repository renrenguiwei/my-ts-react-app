import * as React from "react"
import { Button, PickerView } from "antd-mobile"
import { Calendar as BaseCalendar, CalendarProps } from "./calendar";
import { IExtendCalendarProp } from "./interface/ICalendar";
import { renderCalendarLabel, shouldDisableDate } from "./utils/dateUtils"
import { PickTimeConfig } from "./interface/IPickerTime"
import { Header } from "./components/Header"

import "./calendar.less"

type MergedType = CalendarProps & IExtendCalendarProp

export default class Calendar extends React.Component<MergedType, any> {
  constructor(props: MergedType) {
    super(props);

    this.state = {
      value: props.defaultValue
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
          onChange={this.onChange}
          value={this.state.value}
        />

        { showPickerTime ?
          <PickerView
            data={PickTimeConfig}
            cascade={false}
            onChange={() => null}
            onScrollChange={() => null}
            value={['1', '20', 'AM']}
          /> : null}

        <Button type="primary" className="cac-btn">确认</Button>
      </div>
    )
  }

  private onChange = (date: Date) => {
    this.setState({
      value: date
    })
  }
}
