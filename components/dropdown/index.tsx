/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-18 16:49:13
 * @LastEditTime: 2021-09-06 09:00:59
 * @FilePath: \young\components\dropdown\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('dropdown');

export interface OptionProps {
  value: string | number;
  text: string;
}

export interface DropdownProps {
  options?: OptionProps[];
  value?: string;
  activeColor?: string;
  onChange?: (e: OptionProps) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { options = [], value, activeColor = '#1890FF', onChange } = props;

  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-content`}>
        {options.map((item) => (
          <View
            className={`${prefixCls}-content-option`}
            key={item.value}
            onTap={() => onChange?.(item)}
            style={
              item.value === value
                ? {
                    color: activeColor,
                    fontWeight: 500,
                  }
                : undefined
            }
          >
            {item.text}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Dropdown;
