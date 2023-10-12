import { DatePicker, List } from 'antd-mobile';
import React, { useState } from 'react';

function MyDatePicker() {
  const disabledDates = [
    new Date('2023-06-01'),
    new Date('2023-06-03')
  ];

  const [date, setDate] = useState(null);

  const handleDateChange = (_value: any) => {
    const [year, month, day] = _value
    const value = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    if (isDateDisabled(value)) {
      resetDate();
    } else {
      // setDate(value);
    }
  };

  const isDateDisabled = (value: any) => {
    const dateString = value.slice(0, 10);
    return disabledDates.some(disabledDate =>{
     return disabledDate.toISOString().slice(0, 10) === dateString
    });
  };

  const resetDate = () => {
    // 将日期回滚到之前的有效日期
    // if (date) {
      setDate(new Date() as any);
    // }
  };

  return (
    <List>
      <DatePicker
        mode="date"
        value={date as any}
        onValueChange={handleDateChange}
        onOk={() => {
          return false
        }}
      >
        <List.Item arrow="horizontal">选择日期</List.Item>
      </DatePicker>
    </List>
  );
}

export default MyDatePicker;