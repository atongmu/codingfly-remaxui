/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-04 14:29:13
 * @LastEditTime: 2021-09-06 09:04:07
 * @FilePath: \young\components\space\index.tsx
 */
import React from 'react';
import classNames from 'classnames';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('space');
export interface SpaceProps {
  size?: string | number;
  direction?: string;
  align?: string;
  justify?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}
const renderItems = (
  children: React.ReactNode,
  size?: string | number,
  direction?: string,
) => {
  let itemStyle: React.CSSProperties | undefined = undefined;
  if (typeof size === 'number') {
    itemStyle =
      direction === 'vertical'
        ? {
            marginBottom: size,
          }
        : {
            marginRight: size,
          };
  }
  const items: any[] = [];
  React.Children.forEach(children, (child: any, index: number) => {
    const itemCn = classNames(`${prefixCls}-item`, {
      [`${prefixCls}-${direction}-${size}`]: typeof size === 'string' && size,
    });
    if (child === undefined || child === null) {
      return;
    }
    items.push(
      <View key={index} className={itemCn} style={itemStyle}>
        {child}
      </View>,
    );
  });
  return items;
};

const Space = (props: SpaceProps): React.ReactElement => {
  const {
    size = 'small',
    direction = 'horizontal',
    align = direction === 'horizontal' ? 'center' : undefined,
    justify,
    style,
    className,
    children,
  } = props;
  const cn = classNames(
    prefixCls,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify,
    },
    className,
  );

  return (
    <View className={cn} style={style}>
      {renderItems(children, size, direction)}
    </View>
  );
};
export default Space;
