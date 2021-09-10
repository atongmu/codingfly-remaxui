/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-04 14:29:13
 * @LastEditTime: 2021-09-06 09:02:51
 * @FilePath: \young\components\part-title\index.tsx
 */
import { getPrefixCls } from './../common';
import classNames from 'classnames';
import React from 'react';
import { View } from 'remax/one';

const prefixCls = getPrefixCls('part-title');

export interface PartTitleProps {
  /** 字体颜色 */
  color?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const PartTitle = (props: PartTitleProps): React.ReactElement => {
  const { className, color, backgroundColor, style, children } = props;

  return (
    <View className={classNames(prefixCls, className)} style={style}>
      <View
        className={`${prefixCls}-block`}
        style={{ backgroundColor: backgroundColor }}
      ></View>
      <View className={`${prefixCls}-title`} style={{ color }}>
        {children}
      </View>
    </View>
  );
};
export default PartTitle;
