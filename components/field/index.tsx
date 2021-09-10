/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-12 11:04:00
 * @LastEditTime: 2021-09-07 13:59:09
 * @FilePath: \young\components\field\index.tsx
 */
import * as React from 'react';
import { Input, View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from './../common';
import Cell from '../cell';
import { addUnit } from './../_utils';

const prefixCls = getPrefixCls('field');

export interface InputProps {
  name?: string;
  icon?: string;
  colon?: boolean;
  required?: boolean;
  border?: boolean;
  label?: string;
  labelWidth?: string;
  value?: string;
  defaultValue?: string;
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'password';
  size?: 'large' | 'middle' | 'small';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
  align?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}

const myInput = (props: InputProps) => {
  const {
    name,
    icon,
    label,
    labelWidth,
    colon = false,
    required = false,
    border = false,
    type = 'text',
    size,
    value,
    defaultValue,
    prefix,
    suffix,
    className,
    style,
    inputStyle,
    placeholderStyle,
    align,
    placeholder,
    disabled,
    maxLength,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const _type = type === 'password' ? 'text' : type;
  const inputElement = (
    <Input
      className={classNames(prefixCls, {
        [`${prefixCls}-align-${align}`]: align,
      })}
      style={inputStyle}
      placeholderStyle={{ color: '#bfbfbf', ...placeholderStyle }}
      name={name}
      type={_type}
      password={type === 'password'}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      onInput={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
  const renderLabel = () => {
    const new_colon = colon ? ':' : '';
    if (label) {
      return <View>{`${label} ${new_colon}`}</View>;
    }
  };
  const labelStyle = () => {
    if (labelWidth) {
      return { width: addUnit(labelWidth) };
    }
  };
  return (
    <Cell
      className={classNames(prefixCls, className)}
      icon={icon}
      required={required}
      style={style}
      border={border}
      labelStyle={labelStyle()}
      label={renderLabel()}
      titleClass={classNames(`${prefixCls}__label`)}
    >
      <View className={`${prefixCls}-prefix`}>{prefix}</View>
      {inputElement}
      <View className={`${prefixCls}-suffix`}>{suffix}</View>
    </Cell>
  );
};

export default myInput;
