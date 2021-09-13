import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from './../common';
import FormValue from '../form-value';

const prefixCls = getPrefixCls('cell');

export interface CellProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  titleClass?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  valueAlign?: 'left' | 'right' | 'center';
  verticality?: boolean;
  icon?: string;
  required?: boolean;
  border?: boolean;
  arrow?: boolean;
  extra?: React.ReactNode;
  field?: boolean;
  defaultNullValue?: string;
  onTap?: () => void;
}

const Cell = (props: CellProps) => {
  const {
    label,
    className,
    style,
    titleClass,
    labelStyle,
    valueStyle,
    valueAlign = 'right',
    children,
    description,
    verticality,
    icon,
    border = true,
    arrow,
    extra,
    required,
    field,
    defaultNullValue = '',
    onTap,
  } = props;

  if (verticality) {
    return (
      <View
        className={classNames(prefixCls, className)}
        style={style}
        onTap={onTap}
      >
        <View className={`${prefixCls}-verticality`}>
          {label ? (
            <View
              className={`${prefixCls}-verticality-label`}
              style={labelStyle}
            >
              {required ? (
                <Text className={`${prefixCls}-verticality-required`}>*</Text>
              ) : null}
              {label}
            </View>
          ) : null}
          <View className={`${prefixCls}-verticality-value`} style={valueStyle}>
            {children}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-border`]: border,
        },
        className,
      )}
      style={style}
      onTap={onTap}
    >
      {required ? <Text className={`${prefixCls}-required`}>*</Text> : null}

      {icon ? (
        <Icon type={icon} style={{ marginRight: '4px' }} size={20} color="#333" />
      ) : null}

      {label ? (
        <View
          className={classNames(`${prefixCls}__left`, titleClass)}
          style={labelStyle}
        >
          <View className={`${prefixCls}__left-label`}>
            {label}
            {description ? (
              <View className={`${prefixCls}-description`}>
                {description}
              </View>
            ) : null}
          </View>
        </View>
      ) : null}
      <View className={`${prefixCls}__right`}>
        <View
          className={classNames(
            `${prefixCls}__right-value`,
            `${prefixCls}__right-value-${valueAlign}`,
          )}
          style={valueStyle}
        >
          {children || children === 0 ? children : defaultNullValue}
        </View>
        {extra ? <View className={`${prefixCls}-extra`}>{extra}</View> : null}
        {arrow ? (
          <Icon type="right" style={{ marginLeft: '10px' }} size={20} color="#666" />
        ) : null}
      </View>
    </View>
  );
};

export default Cell;
