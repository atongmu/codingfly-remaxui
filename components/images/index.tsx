/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-18 08:11:05
 * @LastEditTime: 2021-09-06 09:02:29
 * @FilePath: \young\components\images\index.tsx
 */
import * as React from 'react';
import { View, Image } from 'remax/one';
import { previewImage } from '../one';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('images');

export interface ImageProps {
  key: string;
  url: string;
}

export type DataItem = ImageProps | string;

export interface ImagesProps {
  data?: DataItem[];
}

const Images = (props: ImagesProps) => {
  const { data = [] } = props;

  const handleClickImage = (index: number) => {
    let urls = data;
    const current = index;
    if (typeof data[index] !== 'string') {
      urls = data.map((i) => (i as ImageProps).url);
    }
    previewImage({
      urls: urls as string[],
      current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true,
    });
  };

  return (
    <View className={prefixCls}>
      {data &&
        data.map((item: DataItem, index: number) => (
          <View
            key={(item as ImageProps).key || index}
            className={`${prefixCls}-item`}
            onTap={() => handleClickImage(index)}
          >
            <Image
              mode="widthFix"
              src={(item as ImageProps).url || (item as string)}
            />
          </View>
        ))}
    </View>
  );
};

export default Images;
