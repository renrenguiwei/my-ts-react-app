import dayjs from "dayjs";

// 1697590800000 时间戳 -> ['5', '01', 'PM']
export const convertTimeArray = (date: Date) => {
  if (date) {
    const parsedTime = dayjs(date, 'HH:mm');

    const hour12Format = parsedTime.format('h');
    const minutes = parsedTime.format('mm');
    const period = parsedTime.format('A');

    return [hour12Format, minutes, period];
  }
  return []
}

// "Wed Oct 18 2023 09:00:00 GMT+0800 (China Standard Time)";
// ["9", "03", "AM"];
// -> 1697590800000 时间戳
export const combineStamp = (date: Date, timeArr: Array<string>):number => {
  // 解析时间数组
  let hour = parseInt(timeArr[0], 10);
  const minute = parseInt(timeArr[1], 10);
  const period = timeArr[2];

  // 设置小时和分钟
  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }
  date.setHours(hour, minute);

  // 获取时间戳
  return date.getTime();
}