/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:42:42
 * @LastEditTime: 2021-09-08 15:54:27
 * @FilePath: \annar-master\docs\components\data-entry\textarea\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Textarea,  } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

const radioStyle = { paddingBottom: '30px' };

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  return (
    <Frame grayBg padding>
      <Block title="Basic" noTitlePadding>
        <Textarea placeholder="请输入" />
      </Block>
    </Frame>
  );
};
