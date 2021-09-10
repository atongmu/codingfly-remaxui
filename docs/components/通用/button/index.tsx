/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 08:21:27
 * @LastEditTime: 2021-09-08 14:46:06
 * @FilePath: \annar-master\docs\components\general\button\index.tsx
 */
import * as React from 'react';
import { View, Text } from 'remax/one';
import { Button, Icon } from '@codingfly/remaxui';
import { Block, Br, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [delLoading, setDelLoading] = React.useState(false);
  const [okLoading, setOkLoading] = React.useState(false);

  return (
    <Frame grayBg padding>
      <View className={styles.app}>
        <Block noTitlePadding title="类型">
          <View className={styles.group}>
            <Button>default</Button>
            <Button type="primary">primary</Button>
          </View>
        </Block>
        <Block noTitlePadding title="Plain">
          <View className={styles.group}>
            <Button plain>default</Button>
            <Button type="primary" plain>
              primary
            </Button>
            <Button plain color="#07C160">
              secure
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Hairline">
          <View className={styles.group}>
            <Button plain hairline>
              default
            </Button>
            <Button type="primary" plain hairline>
              primary
            </Button>
            <Button plain hairline color="#ff4f00">
              orange
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Danger">
          <View className={styles.group}>
            <Button danger>danger</Button>
            <Button type="primary" danger>
              danger
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Ghost">
          <View className={styles.group}>
            <Button ghost>default</Button>
            <Button danger ghost>
              danger
            </Button>
            <Button plain ghost>
              plain
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Shape">
          <View className={styles.group}>
            <Button type="primary" shape="circle">
              C
            </Button>
            <Button type="primary">round</Button>
          </View>
        </Block>
        <Block noTitlePadding title="Size">
          <View className={styles.group}>
            <Button type="primary" size="superlarge">
              super
            </Button>
            <Button type="primary" size="large">
              large
            </Button>
            <Button type="primary">default</Button>
          </View>
          <Button type="primary" size="small">
            small
          </Button>
        </Block>
        <Block noTitlePadding title="Icon">
          <View className={styles.group}>
            <Button
              type="primary"
              shape="circle"
              ghost
            />
            <Button plain type="primary" icon="check">
              Finish
            </Button>
          </View>
          <View className={styles.group}>
            <Button type="primary" shape="circle" icon="locationfill" />
            <Button type="primary" icon="add1">
              Follow
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Float">
          <View className={styles.group} style={{ height: '60px' }}>
            <Button
              type="primary"
              shape="circle"
              icon="cart"
              float
              style={{
                left: '30px',
                bottom: '1320px',
              }}
            />
            <Button
              look="warning"
              float
              style={{
                left: '120px',
                bottom: '1320px',
              }}
            >
              <Text
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                前往App
                <Icon type="right" color="#000" size="28px" style={{ marginLeft: '6px' }} />
              </Text>
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Loading">
          <View className={styles.group}>
            <Button
              type="primary"
              loading={okLoading}
              loadingText="loading..."
              onTap={() => setOkLoading(true)}
            >
              Confirm
            </Button>
            <Button
              type="primary"
              danger
              icon="deletefill"
              loading={delLoading}
              loadingText="Deleting..."
              onTap={() => setDelLoading(true)}
            >
              Delete
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Disabled">
          <View className={styles.group}>
            <Button type="primary" disabled>
              disabled
            </Button>
            <Button type="primary" danger disabled>
              disabled
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Block">
          <View className={styles.group}>
            <Button type="primary" size="large" block style={{ marginBottom: '30px' }} loading>
              block
            </Button>
            <Button type="primary" size="large" danger block>
              block
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Look">
          <View className={styles.group}>
            <Button look="secondary">Secondary</Button>
          </View>
          <View className={styles.group}>
            <Button look="secure">Secure</Button>
            <Button look="warning">Warning</Button>
          </View>
          <View className={styles.group}>
            <Button look="light">Light</Button>
            <Button look="medium">Medium</Button>
            <Button look="dark">Dark</Button>
          </View>
          <View className={styles.group}>
            <Button size="large" block look="anna" style={{ marginBottom: '30px' }}>
              Anna
            </Button>
            <Button size="large" shape="square" block look="orange">
              Orange
            </Button>
          </View>
        </Block>
      </View>
    </Frame>
  );
};
