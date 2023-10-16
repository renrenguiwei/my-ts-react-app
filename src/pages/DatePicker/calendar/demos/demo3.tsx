import dayjs from 'dayjs'
import React from 'react'
import Calendar from '../index'

export default () => {
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
