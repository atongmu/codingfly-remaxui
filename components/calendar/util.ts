/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-20 13:53:10
 * @LastEditTime: 2021-09-10 09:20:03
 * @FilePath: \my-remax-ui\components\calendar\util.ts
 */
export const compareMonth = (date1: Date, date2: Date) => {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();

  if (year1 === year2) {
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
};

export const compareDay = (day1: Date, day2: Date) => {
  if (!(day1 instanceof Date)) {
    day1 = new Date(day1);
  }
  if (!(day2 instanceof Date)) {
    day2 = new Date(day2);
  }
  var compareMonthResult = compareMonth(day1, day2);
  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }
  return compareMonthResult;
};
export const getDayByOffset = (date: Date, offset: number) => {
  date = new Date(date);
  date.setDate(date.getDate() + offset);
  return date;
};
export const getPrevDay = (date: Date) => {
  return getDayByOffset(date, -1);
};
export const getToday = () => {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
export const copyDates = (dates: any) => {
  if (Array.isArray(dates)) {
    return dates.map(function (date) {
      if (date === null) {
        return date;
      }
      return new Date(date);
    });
  }
  return new Date(dates);
};
export const getMonthEndDay = (year: number, month: number) => {
  return 32 - new Date(year, month - 1, 32).getDate();
};
export const calcDateNum = (date: any) => {
  var day1 = new Date(date[0]).getTime();
  var day2 = new Date(date[1]).getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
};

export const getNextDay = (date: Date) => {
  return getDayByOffset(date, 1);
};

export const getMonths = (minDate: Date, maxDate: Date) => {
  var months = [];
  var cursor = new Date(minDate);
  cursor.setDate(1);
  do {
    months.push(cursor.getTime());
    cursor.setMonth(cursor.getMonth() + 1);
  } while (compareMonth(cursor, maxDate) !== 1);
  return months;
};
export function formatMonthTitle(date: Date) {
  return `${date.getFullYear()} ${date.getMonth() + 1}`;
}
