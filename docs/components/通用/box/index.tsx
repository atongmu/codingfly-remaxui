/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-06 11:34:17
 * @LastEditTime: 2021-09-08 11:50:40
 * @FilePath: \annar-master\docs\components\general\box\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Box } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  return (
    <Frame grayBg padding className={styles.app}>
      <Block noTitlePadding title="字体颜色">
        <Box color="red">box</Box>
        <Box color="#999">box</Box>
      </Block>
      <Block noTitlePadding title="字体大小">
        <Box >box</Box>
        <Box size="48">box</Box>
      </Block>
    </Frame>
  );
};
