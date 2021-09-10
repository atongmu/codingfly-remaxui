/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 08:36:36
 * @LastEditTime: 2021-09-08 14:54:26
 * @FilePath: \annar-master\docs\components\general\icon\index.tsx
 */
import * as React from 'react';
import { Row, Col, Icon } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg padding>
      <Block title="Type">
        <Row>
          <Col span={8}>
            <Icon type="check" />
          </Col>
          <Col span={8}>
            <Icon type="close" />
          </Col>
        </Row>
      </Block>
      <Block title="Size">
        <Row>
          <Col span={8}>
            <Icon type="favorfill" size="72px" />
          </Col>
          <Col span={8}>
            <Icon type="favorfill" size="50px" />
          </Col>
        </Row>
      </Block>
      <Block title="Color">
        <Row>
          <Col span={8}>
            <Icon type="likefill" color="#FF6666" />
          </Col>
          <Col span={8}>
            <Icon type="likefill" color="#FFCC33" />
          </Col>
        </Row>
      </Block>
      <Block title="Logos">
        <Row>
          <Col span={8}>
            <Icon type="message" dot={true} />
          </Col>
          <Col span={8}>
            <Icon type="message" info="8" />
          </Col>
          <Col span={8}>
            <Icon type="message" info="99+" />
          </Col>
        </Row>
      </Block>
    </Frame>
  );
};
