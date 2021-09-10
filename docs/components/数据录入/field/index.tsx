/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-12 15:39:38
 * @LastEditTime: 2021-09-09 16:14:09
 * @FilePath: \my-remax-ui\docs\components\数据录入\field\index.tsx
 */
import * as React from 'react';
import { Field, Icon, } from '@codingfly/remaxui';
import { Block, Frame, Br } from '../../common';

const cStyle = { padding: '0 20px 0 20px' };

export default () => {
  return (
    <Frame grayBg padding>
      <Block title="Basic" contentStyle={cStyle}>
        <Field label="basic" placeholder="Please enter" />
        <Field
          label="basic"
          colon={true}
          placeholder="Please enter"
        />
      </Block>

      <Block title="Type" contentStyle={cStyle}>
        <Field placeholder="number" type="number" />
      </Block>

      <Block title="Size" contentStyle={cStyle}>
        <Field placeholder="large" size="large" />
        <Br />
        <Field placeholder="default" />
        <Br />
        <Field placeholder="small" size="small" />
      </Block>

      <Block title="Prefix" contentStyle={cStyle}>
        <Field
          placeholder="Acount"
          align="right"
          prefix={<Icon type="people" size={20} />}
        />
        <Br />
        <Field placeholder="Phone" align="right" type="number" prefix="+86" />
      </Block>

      <Block title="Suffix" contentStyle={cStyle}>
        <Field placeholder="Email" suffix={<Icon type="mail" size={20}  />} />
        <Br />
        <Field placeholder="Amount" type="number" suffix="元" />
      </Block>

      <Block title="MaxLength" contentStyle={cStyle}>
        <Field placeholder="You can input 4 charapter" maxLength={4} />
      </Block>

      <Block title="Align" contentStyle={cStyle}>
        <Field placeholder="Please enter" align="right" />
      </Block>

      <Block title="Disabled" contentStyle={cStyle}>
        <Field disabled placeholder="Please enter" value="read only" />
        <Br />
        <Field disabled placeholder="Has been disabled" />
      </Block>
    </Frame>
  );
};
