/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:39:29
 * @LastEditTime: 2021-09-06 09:03:22
 * @FilePath: \young\components\radio\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from './../common';
import Icon from '../icon';

const prefixCls = getPrefixCls('radio');

type RadioValue = string | number;

export interface RadioProps {
  children?: React.ReactNode;
  checked?: boolean;
  value?: RadioValue;
  color?: string;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (checked: boolean, e?: any, v?: RadioValue) => void;
}

const Radio = (props: RadioProps) => {
  const {
    children,
    checked,
    value,
    color = '#1890FF',
    extra,
    style,
    onChange,
  } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View className={prefixCls} style={style}>
      <View className={`${prefixCls}-container`} onTap={handleClick}>
        <View className={classNames(`${prefixCls}-out-round`)}>
          {checked ? (
            <Icon
              className={`${prefixCls}-inner-round`}
              type="roundcheckfill"
              size={24}
              color={color}
            />
          ) : (
            <Icon
              className={`${prefixCls}-inner-round`}
              type="round"
              size={24}
              color="#999"
            />
          )}
        </View>
        <View className={`${prefixCls}-children`}>{children}</View>
      </View>
      <View className={`${prefixCls}-extra`}>{extra}</View>
    </View>
  );
};

const getRadios = (
  children: React.ReactNode,
  value?: RadioValue,
  color?: string,
  onChange?: (v: RadioValue, e?: any) => void,
) => {
  const onGroupChange = (checked: any, e: any, v: RadioValue) => {
    const newValue = v;
    onChange?.(newValue as RadioValue, e);
  };
  const radios = React.Children.map(children, (radio: any) => {
    const newRadio = radio;
    let checked = false;
    if (newRadio && newRadio.props) {
      if (
        (newRadio.props.value ||
          newRadio.props.value === 0 ||
          newRadio.props.value === false) &&
        newRadio.props.value === value
      ) {
        checked = true;
      } else {
        checked = false;
      }
      return (
        <Radio
          color={color}
          {...newRadio.props}
          checked={checked}
          onChange={onGroupChange}
        />
      );
    }
    return newRadio;
  });

  return radios;
};

export interface GroupProps {
  value?: RadioValue;
  children?: React.ReactNode;
  direction?: string;
  color?: string;
  onChange?: (v: RadioValue, e?: any) => void;
  style?: React.CSSProperties;
}

Radio.Group = (props: GroupProps) => {
  const { value, color, children, direction = 'row', onChange, style } = props;
  const radios = getRadios(children, value, color, onChange);

  return (
    <View
      style={
        {
          display: 'flex',
          flexDirection: direction,
          ...style,
        } as React.CSSProperties
      }
    >
      {radios}
    </View>
  );
};

export default Radio;
