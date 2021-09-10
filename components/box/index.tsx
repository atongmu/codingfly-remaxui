/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-04 14:29:13
 * @LastEditTime: 2021-09-08 15:08:29
 * @FilePath: \annar-master\components\box\index.tsx
 */
import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from './../common';
import { addUnit } from './../_utils';

const prefixCls = getPrefixCls('box');

export interface BoxProps {
  color?: string;
  size?: string;
  border?: boolean;
  block?: string;
  justify?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'right' | 'center';
  align?: 'left' | 'right' | 'center';
  padding?: string;
  margin?: string;
  shape?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  handleTap?: (e: any) => void;
}

const Box = (props: BoxProps): React.ReactElement => {
  const {
    textAlign = 'left',
    align = 'left',
    size = '28px',
    block,
    justify,
    color,
    border,
    padding,
    margin,
    shape,
    backgroundColor,
    style,
    className,
    children,
    handleTap,
    ...restProps
  } = props;
  const new_style = {
    fontSize: addUnit(size),
    color,
    padding,
    margin,
    backgroundColor,
  };
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-block-${block}`]: block,
    [`${prefixCls}-border`]: border,
    [`${prefixCls}-text-${textAlign}`]: textAlign,
    [`${prefixCls}-shape`]: shape,
    [`${prefixCls}-align-${align}`]: align,
    [`${prefixCls}-justify-${justify}`]: justify,
  });

  return (
    <View
      className={classes}
      style={new_style}
      onTap={handleTap}
      {...restProps}
    >
      {children}
    </View>
  );
};
export default Box;
