/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 14:34:13
 * @LastEditTime: 2021-09-10 11:21:06
 * @FilePath: \my-remax-ui\components\calendar\CalendarHeader.tsx
 */
import Icon from '../icon';
import { addUnit } from '../_utils';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'remax/one';
import { getPrefixCls } from '../common';
import { formatMonthTitle, getToday } from './util';

const prefixCls = getPrefixCls('calendar');

export interface Props {

  title?: React.ReactNode;
  subtitle?: string;
  show?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
  confirmText?: string;
  rangePrompt?: string;
  minDate?: Date;
  maxDate?: Date;
  firstDayOfWeek?: number;
  poppable?: boolean;
  extra?: React.ReactNode;
  extraWidth?: string | number;
  position?: string;
  shadow?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onClose?: () => void;
}

const CalendarHeader = (props: Props) => {
  const new_min_date = getToday().getTime();
  const {
    title = '日期选择',
    showTitle = true,
    showSubtitle,
    subtitle,
    firstDayOfWeek,
    extraWidth,
    onClose,
  } = props;
  
  const extraStyle = () => {
    if (extraWidth) {
      return { width: addUnit(extraWidth) };
    }
  };
  const renderHead = () => {
    if (showTitle) {
      return (
        <View className={`${prefixCls}-head`}>
          <View className={`${prefixCls}-header-title`}>{title}</View>
          <View
            className={`${prefixCls}-extra`}
            style={extraStyle()}
            onTap={() => onClose?.()}
          >
            <Icon type="close" color="#999" size={20} />
          </View>
        </View>
      );
    }
  };
  const onClickSubtitle = (event: Object) => {
    // emit('click-subtitle', event);
  };
  const renderSubtitle = () => {
    if (showSubtitle) {
      return (
        <View className={`${prefixCls}-header-subtitle`} onTap={(e) => onClickSubtitle(e)}>
          {subtitle}
        </View>
      );
    }
  };
  const renderWeekDays = () => {
    const defaultWeeks = ['日', '一', '二', '三', '四', '五', '六'];
    const firstWeek = firstDayOfWeek || 0;
    const renderWeekDays: any = [...defaultWeeks.slice(firstWeek, 7), ...defaultWeeks.slice(0, firstWeek)]

    return (
      <View className={`${prefixCls}_weekdays`}>
        {renderWeekDays.map((text: any) => (
          <Text className={`${prefixCls}_weekday`}>{text}</Text>
        ))}
      </View>
    );
  };
  return (
    <View className={prefixCls}>
      {renderHead()}
      {renderSubtitle()}
      {renderWeekDays()}
    </View>
  );
};

export default CalendarHeader;
