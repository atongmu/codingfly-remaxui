/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:42:42
 * @LastEditTime: 2021-09-08 15:52:06
 * @FilePath: \annar-master\docs\components\data-entry\radio\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Radio,  } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

const radioStyle = { paddingBottom: '30px' };

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  return (
    <Frame grayBg padding>
      <Block title="Basic" noTitlePadding>
        <Radio checked={checked} color="red" onChange={(v) => setChecked(v)}>
          Radio
        </Radio>
      </Block>

      <Block title="Group" noTitlePadding>
        <Radio.Group value={value} onChange={(v: any) => setValue(v)}>
          <Radio value={0}>Apple</Radio>
          <Radio value={1}>Cherry</Radio>
          <Radio value={2}>Watermelon</Radio>
        </Radio.Group>
      </Block>
      <Block title="Color" noTitlePadding>
        <Radio.Group
          value={value}
          color="red"
          onChange={(v: any) => setValue(v)}
        >
          <Radio value={0}>Apple</Radio>
          <Radio value={1}>Cherry</Radio>
          <Radio value={2}>Watermelon</Radio>
        </Radio.Group>
      </Block>
      <Block title="Direction & Extra" noTitlePadding>
        <Radio.Group
          value={value1}
          onChange={(v: any) => setValue1(v)}
          direction="column"
        >
          <Radio value={0} style={radioStyle}>
            Apple
          </Radio>
          <Radio value={1} style={radioStyle}>
            Cherry
          </Radio>
          <Radio
            value={2}
            style={radioStyle}
            extra={
              <View
                style={{ paddingTop: '24px', color: '#999', fontSize: '26px' }}
              >
                Watermelon over 50 yuan, get 10 yuan coupon
              </View>
            }
          >
            Watermelon
          </Radio>
        </Radio.Group>
      </Block>
    </Frame>
  );
};
