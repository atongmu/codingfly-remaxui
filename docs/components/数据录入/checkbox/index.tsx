/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-16 09:58:38
 * @LastEditTime: 2021-09-08 11:49:25
 * @FilePath: \annar-master\docs\components\data-entry\checkbox\index.tsx
 */
import React, { useState } from 'react';
import { View } from 'remax/one';
import { Checkbox, Textarea } from '@codingfly/remaxui';
import styles from './index.module.scss';
import { Block, Frame } from '../../common';

const radioStyle = { paddingBottom: '30px' };

export default () => {
  const [option, setOption] = useState(true);
  const [option1, setOption1] = useState([0]);
  const [option2, setOption2] = useState([0]);

  const handleChange1 = (value: any[]) => {
    console.log('value', value);
    setOption1(value);
  };

  const handleChange2 = (value: any[]) => {
    console.log('value', value);
    setOption2(value);
  };

  return (
    <Frame grayBg padding>
      <Block title="Basic" noTitlePadding>
        <View className={styles.container}>
          <Checkbox checked={option} onChange={() => setOption((s) => !s)}>
            Checkbox
          </Checkbox>
        </View>
      </Block>
      <Block title="Group" noTitlePadding>
        <Checkbox.Group value={option1} onChange={handleChange1}>
          <Checkbox value={0}>时效问题</Checkbox>
          <Checkbox value={1}>价格问题</Checkbox>
          <Checkbox value={2}>其他</Checkbox>
        </Checkbox.Group>
      </Block>
      <Block title="Direction & Extra" noTitlePadding>
        <View className={styles.container}>
          <Checkbox.Group
            direction="column"
            value={option2}
            onChange={handleChange2}
          >
            <Checkbox value={0} style={radioStyle}>
              时效问题
            </Checkbox>
            <Checkbox value={1} style={radioStyle}>
              价格问题
            </Checkbox>
            <Checkbox
              value={2}
              extra={
                <Textarea
                  className={styles.remarks}
                  placeholder="若为其他，请填写备注（注：此处为extra）"
                  value={''}
                  showCount={false}
                />
              }
            >
              其他
            </Checkbox>
          </Checkbox.Group>
        </View>
      </Block>
    </Frame>
  );
};
