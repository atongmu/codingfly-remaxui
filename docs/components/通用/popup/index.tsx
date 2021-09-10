import * as React from 'react';
import { View } from 'remax/one';
import { Popup, Button } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);

  return (
    <Frame grayBg padding>
      <Block title="圆角弹窗">
        <Button onTap={() => setShow(true)}>Click here</Button>
      </Block>
      <Block title="带标题">
        <Button onTap={() => setShow1(true)}>Click here</Button>
      </Block>
      <Block title="关闭图标">
        <Button onTap={() => setShow2(true)}>Click here</Button>
      </Block>
      <Block title="左侧弹出">
        <Button onTap={() => setShow3(true)}>Position = Left</Button>
      </Block>
      <Block title="顶部弹出">
        <Button onTap={() => setShow4(true)}>Click here</Button>
      </Block>
      <Popup
        overlay={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <View
          style={{
            padding: '80px',
          }}
        >
          Hi, boy~
        </View>
      </Popup>
      <Popup
        position="bottom"
        title="title"
        overlay={show1}
        onClose={() => {
          setShow1(false);
        }}
      >
        <View
          style={{
            height: '400px',
            padding: '0 24px',
          }}
        >
          content
        </View>
      </Popup>
      <Popup
        position="bottom"
        title="title"
        closeable
        overlay={show2}
        onClose={() => {
          setShow2(false);
        }}
      >
        <View
          style={{
            height: '400px',
            padding: '0 24px',
          }}
        >
          content
        </View>
      </Popup>
      <Popup
        position="left"
        title="title"
        overlay={show3}
        onClose={() => {
          setShow3(false);
        }}
      >
        <View
          style={{
            width: '400px',
            padding: '0 24px',
          }}
        ></View>
      </Popup>
      <Popup
        position="top"
        title="title"
        overlay={show4}
        onClose={() => {
          setShow4(false);
        }}
      >
        <View
          style={{
            height: '400px',
            padding: '0 24px',
          }}
        >
          content
        </View>
      </Popup>
    </Frame>
  );
};
