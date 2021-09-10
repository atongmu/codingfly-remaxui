/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-05 14:56:14
 * @LastEditTime: 2021-09-08 15:49:49
 * @FilePath: \annar-master\components\col\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('col');

export interface ColProps {
  span?: number;
  offset?: number;
  flex?: string | number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Col = (props: ColProps) => {
  const { span, offset = 0, flex, style, className, children } = props;

  return (
    <View
      className={classNames(prefixCls, className, {
        [`${prefixCls}-${span}`]: span,
        [`${prefixCls}-offset-${offset}`]: offset,
      })}
      style={{
        flex,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Col;
