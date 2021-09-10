/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 08:32:39
 * @LastEditTime: 2021-09-08 14:52:20
 * @FilePath: \annar-master\components\icon\index.tsx
 */
import * as React from 'react';
import { Text, View } from 'remax/one';
import { addUnit } from './../_utils';
import classNames from 'classnames';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('icon');

export interface IconProps {
  type?: string;
  dot?: boolean;
  info?: string;
  color?: string;
  size?: number | string | undefined;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { type, dot, info, color, size, style, className } = props;

  return (
    <View
      className={classNames(className, prefixCls, 'iconfont', `icon-${type}`)}
      style={{
        ...style,
        color,
        fontSize: addUnit(size),
      }}
    >
      {dot && (
        <View className={`${prefixCls}-info ${prefixCls}-info--dot`}></View>
      )}
      {info && <View className={`${prefixCls}-info`}>{info}</View>}
    </View>
  );
};

export default Icon;
