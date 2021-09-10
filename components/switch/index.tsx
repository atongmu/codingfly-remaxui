/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:39:29
 * @LastEditTime: 2021-09-09 16:23:27
 * @FilePath: \my-remax-ui\components\Switch\index.tsx
 */
import * as React from 'react';
import classNames from 'classnames';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';
import { addUnit } from './../_utils';

const prefixCls = getPrefixCls('switch');

export interface SwitchProps {
  checked?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  disabled?: boolean;
  size?: number | string | undefined;
  onChange?: (e: any) => void;
}

const Switch = (props: SwitchProps) => {
  const {
    checked = false,
    activeColor = '#108ee9',
    inactiveColor = '#dcdee0',
    disabled,
    size = 24,
    onChange,
  } = props;
  const style = {
    fontSize: addUnit(size),
    backgroundColor: checked ? activeColor : inactiveColor,
  };
  const handleChange = () => {
    if (disabled) {
      return;
    }
    onChange?.(!checked);
  };

  return (
    <View
      className={classNames(`${prefixCls}`, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
      })}
      onTap={handleChange}
      style={style}
    >
      <View className={`${prefixCls}-checkbox`}></View>
    </View>
  );
};

export default Switch;
