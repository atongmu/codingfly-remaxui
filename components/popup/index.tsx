/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 11:11:10
 * @LastEditTime: 2021-09-09 16:37:46
 * @FilePath: \my-remax-ui\components\popup\index.tsx
 */
import React, { useEffect, useState, useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Mask from '../overlay';
import Icon from '../icon';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('popup');

export interface PopupProps {
  overlay?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
  title?: React.ReactNode;
  position?: string;
  style?: React.CSSProperties;
  mask?: boolean;
  square?: boolean;
  curve?: string;
  className?: string;
  transparent?: boolean;
}

const Popup = (props: PopupProps): React.ReactElement => {
  const {
    overlay = false,
    children,
    onClose,
    closeable,
    title,
    position = 'center',
    mask = true,
    square,
    className,
    curve,
    transparent,
  } = props;


  const handleClickMask = () => {
    onClose?.();
  };

  const classes = classNames(
    className,
    prefixCls,
    {
      [`${prefixCls}-${position}`]: position,
      [`${prefixCls}-ease`]: curve === 'ease',
      [`${prefixCls}-square`]: square,
      [`${prefixCls}-slide-${position}`]: position != 'center',
      [`${prefixCls}-transparent`]: transparent,
    });

  const new_style = useMemo(() => {
    const { style } = props;
    let set_style: any = { ...style };
    if (!overlay) {
      set_style = { display: 'none' }
    }
    if (position === 'bottom') {
      if (!style?.height && overlay) {
        set_style = { height: '30%' }
      }
    }
    return set_style
  }, [overlay]);

  return (
    <>
      <View className={classes} style={new_style}>
        {title ? (
          <View className={`${prefixCls}-title`}>{title}</View>
        ) : null}
        {children}
        {closeable ? (
          <View
            className={`${prefixCls}-close`}
            onTap={() => {
              onClose?.();
            }}
          >
            <Icon type="close" color="#999" size={20} />
          </View>
        ) : null}
      </View>
      {mask ? <Mask show={overlay} onTap={handleClickMask} /> : null}
    </>
  );
};

export default Popup;
