/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-04 14:29:13
 * @LastEditTime: 2021-09-13 13:26:46
 * @FilePath: \my-remax-ui\components\notice-bar\index.tsx
 */
import classNames from 'classnames';
import React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import Swiper from '../Swiper';
import Icon from '../icon';

const prefixCls = getPrefixCls('notice-bar');

export interface Props {
  icon?: string;
  color?: string;
  backgroundColor?: string;
  autoplayInterval?: number;
  data: Array<string>;
  className?: string;
  style?: React.CSSProperties;
}

const NoticeBar = (props: Props): React.ReactElement => {
  const {
    icon = "notification",
    color = "#ff9d46",
    backgroundColor = "#fefcec",
    autoplayInterval = 3000,
    style,
    data,
    className,
  } = props;

  return (
    <View
      className={classNames(prefixCls, className)}
      style={{ ...style, color, backgroundColor }}
    >
      <View className={`${prefixCls}-icon`}>
        <Icon type={icon} size={20} color={color} />
      </View>
      <View className={`${prefixCls}-title`}>
        温馨提示:
      </View>
      <View className={`${prefixCls}-content`}>
        <Swiper autoplay vertical size="mini" showIndicators={false} autoplayInterval={autoplayInterval}>
          {data.map((item: any, index: number) => (
            <Swiper.Item key={index}>
              {item}
            </Swiper.Item>
          ))}
        </Swiper>
      </View>
    </View>
  );
};
export default NoticeBar;
