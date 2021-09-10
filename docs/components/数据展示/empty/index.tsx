/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-17 16:34:14
 * @LastEditTime: 2021-09-08 11:49:05
 * @FilePath: \annar-master\docs\components\data-display\empty\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Empty, Button } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <Block noTitlePadding title="Basic">
        <Empty description="描述文字" />
      </Block>
      <Block noTitlePadding title="自定义图片">
        <Empty
          image="https://img.yzcdn.cn/vant/empty-image-error.png"
          description="自定义图片"
        />
      </Block>
      <Block noTitlePadding title="图片大小">
        <Empty imageSize="220Px" description="error" />
      </Block>
      <Block noTitlePadding title="底部嵌套">
        <Empty slots={<Button>按钮</Button>} />
      </Block>
    </Frame>
  );
};
