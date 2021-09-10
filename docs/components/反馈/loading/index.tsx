/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 14:47:01
 * @LastEditTime: 2021-09-08 13:56:07
 * @FilePath: \annar-master\docs\components\feedback\loading\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import {   Loading } from '@codingfly/remaxui';
import { Block, Frame, Grid, GridItem } from '../../common';
import styles from './index.module.scss';

export default () => {
  return (
    <Frame grayBg padding>
      <Block title="Basic">
        <Grid>
          <GridItem>
            <Loading />
          </GridItem>
        </Grid>
      </Block>
      <Block title="Type">
        <Grid>
          <GridItem name="wave">
            <View className={styles.main}>
              <Loading type="wave" />
            </View>
          </GridItem>
          <GridItem name="default">
            <View className={styles.main}>
              <Loading />
            </View>
          </GridItem>
        </Grid>
      </Block>
      <Block title="Color">
        <Grid>
          <GridItem name="#000000">
            <View className={styles.main}>
              <Loading type="wave" color="#000000" />
            </View>
          </GridItem>
          <GridItem name="#1890FF">
            <View className={styles.main}>
              <Loading color="#1890FF" />
            </View>
          </GridItem>
        </Grid>
      </Block>
      <Block title="Text">
        <Grid>
          <GridItem name="text">
            <View className={styles.main}>
              <Loading vertical={true} text="加载中···" />
            </View>
          </GridItem>
          <GridItem name="textColor">
            <View className={styles.main}>
              <Loading vertical={true} textColor="red" text="加载中···" />
            </View>
          </GridItem>
          <GridItem name="textSize">
            <View className={styles.main}>
              <Loading
                vertical={true}
                textSize="36px"
                textColor="#999"
                text="加载中···"
              />
            </View>
          </GridItem>
        </Grid>
      </Block>
    </Frame>
  );
};
