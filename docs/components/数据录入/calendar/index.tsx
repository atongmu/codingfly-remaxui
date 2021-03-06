/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:42:42
 * @LastEditTime: 2021-09-13 10:04:23
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
  const [show3, setShow3] = React.useState(false);

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
      <Block title="显示底部" noTitlePadding>
        <Button
          onTap={() => {
            setShow2(true);
          }}
        >
          日期
        </Button>
      </Block>
      <Block title="时间限制" noTitlePadding>
        <Button
          onTap={() => {
            setShow3(true);
          }}
        >
          日期
        </Button>
      </Block>

      <Calendar show={show1} onClose={() => setShow1(false)}
        onTap={(e: any) => {
          console.log(e)
        }} />
      <Calendar show={show2} showFoot onClose={() => setShow2(false)}
        onChange={(e: any) => {
          console.log(e)
        }} />

      <Calendar show={show3} minDate="2021-09-02" maxDate="2021-09-22" onClose={() => setShow3(false)}
        onTap={(e: any) => {
          console.log(e)
        }} />
    </Frame>
  );
};
