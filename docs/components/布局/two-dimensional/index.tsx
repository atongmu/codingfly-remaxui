/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-05 16:14:14
 * @LastEditTime: 2021-09-08 11:51:31
 * @FilePath: \annar-master\docs\components\layout\two-dimensional\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Grid,  } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';
import './index.scss';

const data = ['#108ee9', '#0e80d2', '#108ee9', '#0e80d2', '#108ee9', '#0e80d2'];
const data1 = ['#108ee9', '#0e80d2', '#108ee9', '#0e80d2'];
const data2 = ['#108ee9', '#0e80d2', '#108ee9'];
const data3 = ['#108ee9', '#0e80d2', '#108ee9', '#0e80d2', '#108ee9'];
const data4 = ['#108ee9', '#0e80d2', '#108ee9', '#0e80d2'];

export default () => {
  const renderGridItem = (col: any, index?: number) => (
    <View className="demo-grid-item" style={{ backgroundColor: col }}>
      {index}
    </View>
  );

  return (
    <Frame>
      <Block noTitlePadding title="Basic" className="demo-grid">
        <Grid data={data} columns={3}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data1} columns={3}>
          {renderGridItem}
        </Grid>
      </Block>
      <Block noTitlePadding title="Gutter" className="demo-grid">
        <Grid data={data2} columns={3} gutter={16}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data} columns={3} gutter={[8, 8]}>
          {renderGridItem}
        </Grid>
      </Block>
      <Block noTitlePadding title="Span" className="demo-grid">
        <Grid data={data3} columns={3} span={16}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data3} columns={3} span={-16}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data4} columns={3} span={[8, 16, 8, 16]}>
          {renderGridItem}
        </Grid>
      </Block>
    </Frame>
  );
};
