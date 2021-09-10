/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-17 16:28:18
 * @LastEditTime: 2021-09-06 09:04:42
 * @FilePath: \young\components\swiper\item.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('swiper-item');

export interface SwiperItemProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onTap?: (e: any) => void;
}

const SwiperItem: React.FC<SwiperItemProps> = (props: SwiperItemProps) => {
  const { className, style, children, onTap } = props;

  return (
    <View
      className={classNames(prefixCls, className)}
      style={style}
      onTap={onTap}
    >
      {children}
    </View>
  );
};

export default SwiperItem;
