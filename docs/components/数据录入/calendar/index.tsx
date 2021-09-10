/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:42:42
 * @LastEditTime: 2021-09-10 16:07:31
 * @FilePath: \my-remax-ui\docs\components\数据录入\calendar\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Calendar, Button } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

const radioStyle = { paddingBottom: '30px' };

export default () => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  return (
    <Frame grayBg padding>
      <Block title="默认" noTitlePadding>
        <Button
          onTap={() => {
            setShow1(true);
          }}
        >
          日期
        </Button>
      </Block>
      <Block title="默认" noTitlePadding>
        <Button
          onTap={() => {
            setShow2(true);
          }}
        >
          日期
        </Button>
      </Block>
      <Calendar show={show1} onClose={() => setShow1(false)}
        onChange={(e: any) => {
          console.log(e)
        }} />
      <Calendar show={show2} defaultDate="2020-08-01" onClose={() => setShow2(false)} />
    </Frame>
  );
};
