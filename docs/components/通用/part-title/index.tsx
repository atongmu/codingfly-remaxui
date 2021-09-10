/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-06 11:34:17
 * @LastEditTime: 2021-09-08 11:50:59
 * @FilePath: \annar-master\docs\components\general\part-title\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import {PartTitle } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <View>
        <Block noTitlePadding title="文字颜色">
          <PartTitle color="red">box</PartTitle>
        </Block>
        <Block noTitlePadding title="颜色块">
          <PartTitle backgroundColor="red">box</PartTitle>
        </Block>
      </View>
    </Frame>
  );
};
