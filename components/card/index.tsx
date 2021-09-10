/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 14:34:13
 * @LastEditTime: 2021-09-08 15:56:04
 * @FilePath: \annar-master\components\card\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';
import { addUnit } from '../_utils';

const prefixCls = getPrefixCls('card');

export interface CardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  extraWidth?: string | number;
  foot?: React.ReactNode;
  cover?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  shadow?: boolean;
  backgroundColor: string;
  className: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onTap?: (e: any) => void;
}

const Card = (props: CardProps) => {
  const {
    title,
    description,
    extra,
    extraWidth,
    cover,
    foot,
    direction = 'vertical',
    shadow,
    backgroundColor = "#fff",
    style,
    contentStyle,
    children,
    onTap,
    className,
  } = props;

  const extraStyle = () => {
    if (extraWidth) {
      return { width: addUnit(extraWidth) };
    }
  };
  const renderTitle = (isHead: boolean) => {
    return title || description || extra ? (
      <View
        className={classNames(`${prefixCls}-head`, {
          [`${prefixCls}-content-head`]: !isHead,
        })}
      >
        <View>
          {title ? <View className={`${prefixCls}-title`}>{title}</View> : null}
          {description ? (
            <View className={`${prefixCls}-description`}>{description}</View>
          ) : null}
        </View>
        <View className={`${prefixCls}-extra`} style={extraStyle()}>
          {extra}
        </View>
      </View>
    ) : null;
  };

  const renderHead = () => {
    if (cover) {
      return <View className={`${prefixCls}-cover`}>{cover}</View>;
    }
    return renderTitle(true);
  };

  const renderFoot = () => {
    return foot ? (
      <View
        className={classNames(`${prefixCls}-foot`, {
          [`${prefixCls}-foot-horizontal`]: direction === 'horizontal',
        })}
      >
        {foot}
      </View>
    ) : null;
  };

  return (
    <View
      className={classNames(prefixCls, className,
        {
          [`${prefixCls}-horizontal`]: cover && direction === 'horizontal',
          [`${prefixCls}-shadow`]: shadow,
        })}
      style={{ ...style, backgroundColor }}
      onTap={onTap}
    >
      {renderHead()}
      <View
        className={`${prefixCls}-content`}
        style={{
          ...contentStyle,
        }}
      >
        {cover ? renderTitle(false) : null}
        {children}
        {direction === 'horizontal' ? renderFoot() : null}
      </View>
      {direction !== 'horizontal' ? renderFoot() : null}
    </View>
  );
};

export default Card;
