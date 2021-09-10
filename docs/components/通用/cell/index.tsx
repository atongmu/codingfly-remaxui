/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 09:56:38
 * @LastEditTime: 2021-09-08 15:23:02
 * @FilePath: \annar-master\docs\components\general\cell\index.tsx
 */
import * as React from 'react';
import { Cell,  } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <Block title="Basic">
        <Cell label="Cell" border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Icon">
        <Cell label="Music" icon="musicfill" border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Arrow">
        <Cell label="Cell" arrow border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Border">
        <Cell label="Cell">content</Cell>
        <Cell label="Cell" border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Description">
        <Cell label="Cell" border={false} description="description">
          content
        </Cell>
      </Block>
    </Frame>
  );
};
