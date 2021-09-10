/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-16 15:52:37
 * @LastEditTime: 2021-09-09 16:23:18
 * @FilePath: \my-remax-ui\docs\components\数据录入\switch\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Switch, Cell } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [value, setValue] = React.useState(false);
  return (
    <Frame grayBg padding>
      <Block title="Basic">
        <View className={styles.container}>
          <Switch checked={checked} onChange={(v) => setChecked(v)} />
        </View>
      </Block>
      <Block title="color">
        <View className={styles.container}>
          <Switch
            checked={checked}
            activeColor="red"
            onChange={(v) => setChecked(v)}
          />
        </View>
      </Block>
      <Block title="size">
        <View className={styles.container}>
          <Switch
            size={20}
            checked={checked1}
            onChange={(v) => setChecked1(v)}
          />
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.container}>
          <Switch disabled checked={false} />
          <View
            style={{ display: 'inline-block', width: '30px', height: '24px' }}
          />
          <Switch disabled checked />
        </View>
      </Block>
      <Block title="With Cell">
        <Cell
          label="设为默认地址"
          valueStyle={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Switch checked={value} onChange={(v) => setValue(v)} />
        </Cell>
      </Block>
    </Frame>
  );
};
