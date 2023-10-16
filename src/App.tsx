import * as React from "react";
import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import dayjs from 'dayjs';
import Calendar from "@/pages/DatePicker/calendar";

type Props = {}
type State = {}

const disabledDates = [new Date(2023, 10, 16), new Date(2023, 4, 20)];

@observer
export default class App extends React.Component<Props, State> {

  public visible: boolean = true
  constructor(props: any) {
    super(props);
    makeObservable(this, {
      visible: observable
    })
  }

  render() {
    const today = dayjs()
    return (
      <Calendar
        renderLabel={(date: any) => {
          if (dayjs(date).isSame(today, 'day')) return '今天'
          if (date.getDay() === 0 || date.getDay() === 6) {
            return '周末'
          }
        }}
      />
    )
  }

/*  handleSelect = (date: any) => {
    if (disabledDates.some(disabledDate => date.toDateString() === disabledDate.toDateString())) {
      return; // 禁用日期，不执行后续操作
    }

    // setSelectedDate(date);
    // 处理其他逻辑...
  };

  showCalendar = () => {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    this.visible = !this.visible
  }
  onCancel = () => {
    this.visible = !this.visible
  }
  onConfirm = () => {
    this.visible = !this.visible
  }
  onSelectHasDisableDate = () => {
    // this.visible = !this.visible
  }*/
}
