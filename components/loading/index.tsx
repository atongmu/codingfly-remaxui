/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 13:45:29
 * @LastEditTime: 2021-09-08 14:20:16
 * @FilePath: \annar-master\components\loading\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { addUnit } from './../_utils';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('loading');

export interface LoadingProps {
  type?: string;
  text?: string;
  textSize?: string;
  textColor?: string;
  color?: string;
  gapColor?: string;
  vertical?: boolean;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Loading = (props: LoadingProps) => {
  const {
    style,
    vertical,
    type,
    color = '#999',
    gapColor = '#FDFFFD',
    size = '28px',
    className,
  } = props;
  const new_style = {
    ...style,
    fontSize: addUnit(size),
  };
  const renderText = () => {
    const { text, textSize="28px", textColor } = props;
    if (text) {
      return (
        <View
          className={`${prefixCls}-text`}
          style={{
            fontSize: textSize,
            color: textColor || color,
          }}
        >
          {text}
        </View>
      );
    }
  };
  if (type === 'gap') {
    return (
      <View
        className={classNames(prefixCls, className,
          {
            [`${prefixCls}-vertical `]: vertical,
          })}
      >
        <View
          className={`${prefixCls}-gap`}
          style={{
            ...new_style,
            border: `1Px solid ${color}`,
          }}
        >
          <View
            className={`${prefixCls}-gap-fill`}
            style={{
              backgroundColor: gapColor,
            }}
          />
        </View>
        {renderText()}
      </View>
    );
  }
  if (type === 'wave') {
    return (
      <View
        className={classNames(
          prefixCls,
          className,
          {
            [`${prefixCls}-vertical `]: vertical,
          })}
      >
        <View className={`${prefixCls}-wave`}>
          <View style={{ backgroundColor: color }} />
          <View style={{ backgroundColor: color }} />
          <View style={{ backgroundColor: color }} />
          <View style={{ backgroundColor: color }} />
          <View style={{ backgroundColor: color }} />
        </View>
        {renderText()}
      </View>
    );
  }
  return (
    <View
      className={classNames(
        prefixCls,
        className, 
        {
        [`${prefixCls}-vertical `]: vertical,
      })}
    >
      <View
        className={`${prefixCls}-content`}
        style={{
          ...new_style,
          borderColor: `${color} ${color} transparent`,
        }}
      />
      {renderText()}
    </View>
  );
};

export default Loading;
