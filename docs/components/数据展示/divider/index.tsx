/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-10 15:20:13
 * @LastEditTime: 2021-09-08 11:48:58
 * @FilePath: \annar-master\docs\components\data-display\divider\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Divider } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <Block noTitlePadding title="文字颜色">
        <Divider color="red">box</Divider>
      </Block>
    </Frame>
  );
};
