/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-06 13:37:52
 * @LastEditTime: 2021-09-08 16:05:42
 * @FilePath: \annar-master\components\divider\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import Space from './../space';

export interface DividerProps {
  color?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Divider = (props: DividerProps) => {
  const {
    color,
    backgroundColor = 'transparent',
    padding,
    margin,
    children,
    style,
  } = props;
  return (
    <Space
      style={{
        ...style,
        padding,
        margin,
        color,
        backgroundColor,
      }}
      justify="center"
    >
      <View
        style={{
          backgroundColor: color,
          width: '64px',
          height: '1Px',
          marginRight: '10px',
        }}
      ></View>
      <View>{children}</View>
      <View
        style={{
          backgroundColor: color,
          width: '64px',
          height: '1Px',
          marginLeft: '10px',
        }}
      ></View>
    </Space>
  );
};

export default Divider;
