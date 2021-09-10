/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-06 11:34:17
 * @LastEditTime: 2021-09-08 11:50:34
 * @FilePath: \annar-master\docs\components\feedback\overlay\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Button, Overlay } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  return (
    <Frame>
      <View className={styles.app}>
        <Block noTitlePadding title="Type">
          <Button
            onTap={() => {
              setShow(true);
            }}
          >
            遮罩
          </Button>
        </Block>
        <Overlay
          show={show}
          onTap={() => {
            setShow(false);
          }}
        ></Overlay>
      </View>
    </Frame>
  );
};
