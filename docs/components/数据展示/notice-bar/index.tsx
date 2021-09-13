/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-17 16:34:14
 * @LastEditTime: 2021-09-13 13:05:11
 * @FilePath: \my-remax-ui\docs\components\数据展示\notice-bar\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { NoticeBar } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <Block noTitlePadding title="Basic">
        <NoticeBar
          data={[
            '111', '222'
          ]}
        />
      </Block>

    </Frame>
  );
};
