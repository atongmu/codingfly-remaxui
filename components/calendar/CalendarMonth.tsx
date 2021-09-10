/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 14:34:13
 * @LastEditTime: 2021-09-06 09:00:09
 * @FilePath: \young\components\calendar\CalendarMonth.tsx
 */
import React, { useEffect, useState } from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';
import { formatMonthTitle } from './util';

const prefixCls = getPrefixCls('calendar');

export interface CalendarMonthProps {
  type?: string;
  color?: string;
  showMark?: string;
  currentDate?: Array<Date>;
  allowSameDay?: boolean;
  showSubtitle?: boolean;
  showMonthTitle?: boolean;
  firstDayOfWeek?: boolean;
  date?: Date;
  minDate?: Date;
  maxDate?: Date;
}

const CalendarMonth = (props: CalendarMonthProps) => {
  const { date = new Date(), showMark, showMonthTitle } = props;

  const renderTitle = () => {
    const title = formatMonthTitle(date);
    if (showMonthTitle) {
      return <View className={`${prefixCls}-month-title`}>{title}</View>;
    }
  };
  const renderMark = () => {
    if (showMark) {
      return (
        <View className={`${prefixCls}-month-mark`}>{date.getMonth() + 1}</View>
      );
    }
  };
  const renderDays = () => {
    <View className={`${prefixCls}-days`}>
      {renderMark()}
      {/* {(shouldRender.value ? days : placeholders).value.map(renderDay)} */}
    </View>;
  };

  return (
    <View className={prefixCls}>
      {renderTitle()}
      {renderDays()}
    </View>
  );
};

export default CalendarMonth;
