/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-17 16:34:14
 * @LastEditTime: 2021-09-08 11:49:11
 * @FilePath: \annar-master\docs\components\data-display\steps\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Steps, } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <Block noTitlePadding title="Basic">
        <Steps
          current={1}
          steps={[
            {
              title: '客户下单',
            },
            {
              title: '商城发货',
            },
            {
              title: '买家确认',
            },
          ]}
        />
      </Block>
      <Block noTitlePadding title="Status">
        <Steps
          current={1}
          status={'error'}
          steps={[
            {
              title: '客户下单',
            },
            {
              title: '商城发货',
              errorTitle: '发货失败',
            },
            {
              title: '买家确认',
            },
          ]}
        />
      </Block>
      <Block noTitlePadding title="Direction">
        <View
          style={{
            padding: '60px 50px',
          }}
        >
          <Steps
            direction="vertical"
            steps={[
              {
                title: '待处理',
              },
              {
                title: '询价中',
              },
              {
                title: '报价成功',
              },
            ]}
          />
        </View>
      </Block>
      <Block noTitlePadding title="Description & Extra">
        <View
          style={{
            padding: '60px 50px',
          }}
        >
          <Steps
            direction="vertical"
            current={1}
            status="error"
            steps={[
              {
                title: '待处理',
                description: '客户已下单，订单等待销售处理',
                extra: '2020-4-23',
              },
              {
                title: '询价中',
                description: '销售以向采购提交询价请求',
                extra: '2020-4-27',
              },
              {
                title: '报价成功',
                description: '客户已接受报价',
                extra: '2020-5-1',
              },
            ]}
          />
        </View>
      </Block>
    </Frame>
  );
};
