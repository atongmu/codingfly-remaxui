/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 16:31:30
 * @LastEditTime: 2021-09-08 15:35:19
 * @FilePath: \annar-master\docs\components\general\toast\index.tsx
 */
import * as React from 'react';
import { View } from 'remax/one';
import { Toast, Button,  } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  const [show, setShow] = React.useState(false);

  return (
    <Frame grayBg padding>
      <Block title="info">
        <Button
          onTap={() => {
            Toast.info('Load info !!!', 1);
          }}
        >
          Click here
        </Button>
      </Block>
      <Block title="success">
        <Button
          onTap={() => {
            Toast.success('Load success !!!');
          }}
        >
          Click here
        </Button>
      </Block>
      <Block title="fail">
        <Button
          onTap={() => {
            Toast.fail('Load fail !!!');
          }}
        >
          Click here
        </Button>
      </Block>
      <Block title="offline">
        <Button
          onTap={() => {
            Toast.offline('Load offline !!!');
          }}
        >
          Click here
        </Button>
      </Block>
      <Block title="loading">
        <Button
          onTap={() => {
            Toast.loading('Load loading !!!');
          }}
        >
          Click here
        </Button>
      </Block>
    </Frame>
  );
};
