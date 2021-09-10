/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 16:31:30
 * @LastEditTime: 2021-09-08 15:44:28
 * @FilePath: \annar-master\docs\components\general\styles\index.tsx
 */
import * as React from 'react';
import { Cell, Box } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  const [list] = React.useState([
    {
      name: 'fade',
      color: 'red',
    },
    {
      name: 'scale-up',
      color: 'orange',
    },
    {
      name: 'scale-down',
      color: 'olive',
    },
    {
      name: 'slide-top',
      color: 'green',
    },
    {
      name: 'slide-bottom',
      color: 'cyan',
    },
    {
      name: 'slide-left',
      color: 'blue',
    },
    {
      name: 'slide-right',
      color: 'purple',
    },
    {
      name: 'shake',
      color: 'mauve',
    },
  ]);
  const [show, setShow] = React.useState(false);

  return (
    <Frame grayBg padding>
      <Block title="文字省略">
        <Block title="一行">
          <Box className="cui-ellipsis">
            这是一段最多显示一行的文字，后面的内容会省略。这是一段最多显示一行的文字，后面的内容会省略。
          </Box>
        </Block>
        <Block title="两行">
          <Box className="cui-multi-ellipsis-l2">
            这是一段最多显示一行的文字，后面的内容会省略。这是一段最多显示一行的文字，后面的内容会省略。
          </Box>
        </Block>
        <Block title="三行">
          <Box className="cui-multi-ellipsis-l3">
            这是一段最多显示一行的文字，后面的内容会省略。这是一段最多显示一行的文字，后面的内容会省略。
            这是一段最多显示一行的文字，后面的内容会省略。这是一段最多显示一行的文字，后面的内容会省略。
          </Box>
        </Block>
      </Block>
      <Block title="1Px 边框">
        <Box className="cui-hairline-top" margin="10px" backgroundColor="#fff">上边框</Box>
        <Box className="cui-hairline-bottom" margin="10px" backgroundColor="#fff">下边框</Box>
        <Box className="cui-hairline-left" margin="10px" backgroundColor="#fff">左边框</Box>
        <Box className="cui-hairline-right" margin="10px" backgroundColor="#fff">右边框</Box>
        <Box className="cui-hairline-surround" margin="10px" backgroundColor="#fff">边框</Box>
      </Block>
      <Block title="动画">

      </Block>
    </Frame>
  );
};
