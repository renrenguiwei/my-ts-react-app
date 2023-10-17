import * as React from "react";
import { observer } from "mobx-react";
import Calendar from "@/pages/DatePicker/calendar";
import { mockDataRules } from "@/pages/DatePicker/calendar/mockData";
import {
  IDisabledDate,
  IEnableDate,
  IHolidayTypeEnum,
  INow,
  IWeekday
} from "@/pages/DatePicker/calendar/interface/ICalendar";
import { assignCalendarDate } from "@/pages/DatePicker/calendar/utils/dateUtils";

type Props = {}
type State = {}

@observer
export default class App extends React.Component<Props, State> {

  public rules: {
    disabledDate?: IDisabledDate;
    enableDate?: IEnableDate;
  } = {}


  constructor(props: any) {
    super(props);
    this.initData()
  }

  private initData() {
    this.rules = assignCalendarDate(mockDataRules)
  }

  render() {
    const { disabledDate, enableDate } = this.rules
    return (
      <Calendar
        selectionMode={'single'}
        disabledDate={disabledDate}
        enableDate={enableDate}
        defaultValue={new Date(1673936955000)}
      />
    )
  }
}
