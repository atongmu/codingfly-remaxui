/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:39:29
 * @LastEditTime: 2021-09-06 09:01:10
 * @FilePath: \young\components\empty\index.tsx
 */
import * as React from 'react';
import { View, Image, Text } from 'remax/one';
import { getPrefixCls } from './../common';
import { addUnit, getSizeStyle } from './../_utils';
import { isDef } from './../_utils/validate';

const prefixCls = getPrefixCls('empty');

export interface EmptyProps {
  imageSize?: number | string | undefined;
  image?: string;
  description?: string;
  slots?: React.ReactNode;
}
const PRESET_IMAGES = ['error', 'search', 'default'];

const Empty = (props: EmptyProps) => {
  const { imageSize, description, slots } = props;
  const renderImage = () => {
    let { image = 'default' } = props;

    if (PRESET_IMAGES.includes(image)) {
      image = `https://qiniu.codingfly.site/ui/image/empty-image-${image}.png`;
    }

    return <Image src={image} mode="widthFix" />;
  };

  const renderDescription = () => {
    if (description) {
      return <Text className={`${prefixCls}-description`}>{description}</Text>;
    }
  };

  const renderBottom = () => {
    if (slots) {
      return <View className={`${prefixCls}-bottom`}>{slots}</View>;
    }
  };
  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-image`} style={getSizeStyle(imageSize)}>
        {renderImage()}
      </View>
      {renderDescription()}
      {renderBottom()}
    </View>
  );
};

export default Empty;
