import * as React from "react";
import dayjs from "dayjs";
import { Button, PickerView } from "antd-mobile";
// export type { CalendarProps, CalendarRef } from "./calendar";
import { Calendar as BaseCalendar } from "./calendar";
import { Header } from "./components/Header"

import "./calendar.less";

const PickTime = [
  [
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
    { label: '12时', value: '12'},
  ],
  [
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
    { label: '1时', value: 1},
  ],
  [
    { label: '上午', value: 'am'},
    { label: '下午', value: 'pm'},
  ],
];

export default class Calendar extends React.Component<any, any> {
  render() {
    const today = dayjs();
    return (
      <div className="calendar-container">
        <Header title="日期选择" handleClose={() => null}/>
        <BaseCalendar
          renderLabel={(date: any) => {
            if (dayjs(date).isSame(today, "day")) return "今天";
            if (date.getDay() === 0 || date.getDay() === 6) {
              return "周末";
            }
          }}
        />
        <div className="cac-timePicker">
          <PickerView
            onChange={() => null}
            onScrollChange={() => null}
            value={[]}
            data={PickTime}
            cascade={false}
          />
        </div>
        <Button type="primary" className="cac-btn">确认</Button>
      </div>

    );
  }
}
