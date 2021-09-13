/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 14:34:13
 * @LastEditTime: 2021-09-13 10:13:16
 * @FilePath: \my-remax-ui\components\calendar\index.tsx
 */
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from './../common';
import Button from '../button';
import Popup from '../popup';
import Icon from '../icon';
const prefixCls = getPrefixCls('calendar');

export interface CalendarProps {
  type?: 'single' | 'multiple' | 'range';
  show?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
  confirmText?: string;
  rangePrompt?: string;
  defaultDate?: string;
  minDate?: Date;
  maxDate?: Date;
  poppable?: boolean;
  extra?: React.ReactNode;
  extraWidth?: string | number;
  showFoot?: boolean;
  foot?: React.ReactNode;
  cover?: React.ReactNode;
  text?: string;
  position?: string;
  shadow?: boolean;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onClose?: () => void;
  onTap?: (e: any) => void;
  onChange?: (e: any) => void;
}

const Calendar = (props: CalendarProps) => {
  const {
    confirmText = '确定',
    show,
    type = "single",
    showFoot = false,
    poppable = true,
    defaultDate,
    minDate,
    maxDate,
    position = 'bottom',
    onTap,
    onChange,
    onClose,
  } = props;

  let MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const WEEK_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
  const LINES = [1, 2, 3, 4, 5, 6];
  const [year, setLoinsYear] = useState(0);
  const [month, seLoinstMonth] = useState(0);
  const [days, seLoinstDays] = useState(0);
  const [currentDate, setcurrentDate] = useState<Date>(new Date());
  const [tag, setTag] = useState(false);
  const [change, setChange] = useState<any>([])

  //获取当前月份
  const getMonth = (date: Date): number => {
    return date.getMonth();
  }
  //获取当前年份
  const getFullYear = (date: Date): number => {
    return date.getFullYear();
  }

  const getCurrentMonthDays = (month: number, year: number): number => {
    let _year = year + currentDate.getFullYear();
    if (_year % 100 != 0 && _year % 4 == 0 || _year % 400 == 0) {
      MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    return MONTH_DAYS[month]
  }
  //当前月第一天是周几
  const getDateByYearMonth = (year: number, month: number, day: number = 1): Date => {
    var date = new Date()
    date.setFullYear(year)
    date.setMonth(month, day)
    return date
  }
  const getWeeksByFirstDay = (year: number, month: number): number => {
    var date = getDateByYearMonth(year, month)
    return date.getDay()
  }
  const getDayText = (line: number, weekIndex: number, weekDay: number, monthDays: number): any => {
    const now_date = new Date()
    let is_now = false  //今天
    let is_change = false //选中
    let is_disable = false //禁用
    let day_off = false //休息日

    var number = line * 7 + weekIndex - weekDay + 1
    if (number <= 0 || number > monthDays) {
      return <View className="day-c" key={weekIndex}>&nbsp;</View>
    }
    if (number === now_date.getDate() && formatNumber(month) === formatNumber(getMonth(now_date))) {
      is_now = true
    }

    const new_day = `${currentDate.getFullYear()}-${formatNumber(month)}-${number < 10 ? `0${number}` : number}`

    if (!is_change) {
      for (let i = 0; i < change.length; i++) {
        const element = change[i];
        if (new_day === element) {
          is_change = true;
          break;
        }
      }
    }
    if (minDate || maxDate) {
      let min_date, max_date;
      const now_date = new Date(new_day)
      if (minDate) {
        min_date = new Date(minDate)
        if (min_date > now_date) {
          is_disable = true
        }
      }
      if (maxDate) {
        max_date = new Date(maxDate)
        if (max_date < now_date) {
          is_disable = true
        }
      }
    }
    if (weekIndex === 6 || weekIndex === 0) {
      day_off = true
    }

    return (
      <View className={classNames("day-c", {
        ["now"]: is_now,
        ["active"]: is_change,
        ["disable"]: is_disable,
        ["day_off"]: day_off
      })} key={weekIndex}>
        <View className="day" onTap={() => {
          if (is_disable) {
            return
          }
          if (onTap) {
            onTap(new_day)
          }
          if (type === 'single') {
            setChange([new_day])
          }
        }}>{number}</View>
        {/* <View className="desc">可约</View> */}
      </View>
    )
  }

  const setCurrentYearMonth = (date: any) => {
    var month = getMonth(date)
    var year = getFullYear(date)
    setLoinsYear(year);
    seLoinstMonth(month)
    setTag(false)
  }

  const monthChange = (monthChanged: number) => {
    if (tag) {
      return;
    } else {
      setTag(true)
    }

    const monthAfter = month + monthChanged
    const date = getDateByYearMonth(year, monthAfter)
    setCurrentYearMonth(date)
  }
  const formatNumber = (num: number): string => {
    const _num = num + 1
    return _num < 10 ? `0${_num}` : `${_num}`
  }

  let weekDay = getWeeksByFirstDay(year, month);
  let _startX = 0;

  const init = () => {
    let new_date = new Date()
    if (defaultDate) {
      new_date = new Date(defaultDate)
    }
    const new_month = getMonth(new_date)
    const new_days = new_date.getDay()
    setcurrentDate(new_date)
    seLoinstMonth(Number(new_month))
    seLoinstDays(new_days)
  };
  useEffect(() => {
    init();
  }, []);


  const renderFoot = () => {
    if (!showFoot) {
      return null
    }
    return (
      <View className={`${prefixCls}-footer`}>
        <Button block type="primary" className={`${prefixCls}-confirm`} onTap={() => {
          if (onChange) {
            onChange(change)
          }
        }}>
          {confirmText}
        </Button>
      </View>
    );
  };

  const renderCalendar = () => {
    return (
      <View className={prefixCls}
        onTouchEnd={(val) => {
          if (_startX > val.changedTouches[0]['clientX'] + 30) {
            monthChange(1);
          }
          if (_startX < val.changedTouches[0]['clientX'] - 30) {
            monthChange(-1);
          }
        }} onTouchStart={(val) => {
          _startX = val.changedTouches[0]['clientX']

        }}
      >
        <View className={`${prefixCls}-tabbar`}>
          <View
            onTap={() => {
              monthChange(-1);
            }}
          ><Icon type='back' size='30' color='#297AF8' ></Icon></View>
          <View className={`${prefixCls}-title`}>{year + currentDate.getFullYear()} 年 {formatNumber(month)}月</View>
          <View
            onTap={() => {
              monthChange(1);
            }}
          ><Icon type='right' size='30' color='#297AF8' ></Icon></View>
        </View>
        <View className={`${prefixCls}-weekdays`}>
          {
            WEEK_NAMES.map((week, key) => {
              return <View className={`${prefixCls}-weekday`} key={key}>{week}</View>
            })
          }
        </View>
        {
          LINES.map((l, key) => {
            return <View key={key} className="day-content">
              {
                WEEK_NAMES.map((week, index) => {
                  return getDayText(key, index, weekDay, getCurrentMonthDays(month, year))
                })
              }
            </View>
          })
        }
        {renderFoot()}
      </View>
    );
  };
  return (
    <>
      {poppable ? (
        <Popup
          overlay={show}
          position={position}
          onClose={() => {
            onClose?.();
          }}
          style={{ height: showFoot ? '75%' : '62%' }}
        >
          {renderCalendar()}
        </Popup>
      ) : (
        renderCalendar()
      )}
    </>
  );
};

export default Calendar;
