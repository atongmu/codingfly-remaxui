/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 10:31:55
 * @LastEditTime: 2021-09-06 09:02:44
 * @FilePath: \young\components\overlay\index.tsx
 */
import React, { useMemo } from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';
import classNames from 'classnames';

const prefixCls = getPrefixCls('overlay');

export interface GridProps {
  show?: boolean;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
  children?: React.ReactNode;
}

const Overlay = (props: GridProps) => {
  const { show, className, zIndex, children, style, onTap } = props;

  const overlayZindex = zIndex || zIndex === 0 ? zIndex : 999;
  return (
    <View
      className={classNames(prefixCls, className, {
        [`${prefixCls}_active`]: show,
      })}
      style={{
        ...style,
        zIndex: overlayZindex,
      }}
      onTap={onTap}
    >
      {children}
    </View>
  );
};

export default Overlay;
