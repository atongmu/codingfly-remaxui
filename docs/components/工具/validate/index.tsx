/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 14:47:01
 * @LastEditTime: 2021-09-09 15:25:34
 * @FilePath: \my-remax-ui\docs\components\工具\validate\index.tsx
 */
import * as React from 'react';
import { Button, Toast, Validate } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
    return (
        <Frame grayBg padding>
            <Block title="isDef">
                <Button onTap={() => {
                    const isVal = Validate.isDef('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为空</Button>
            </Block>
            <Block title="isFunction">
                <Button onTap={() => {
                    const isVal = Validate.isFunction('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为Function</Button>
            </Block>
            <Block title="isObject">
                <Button onTap={() => {
                    const isVal = Validate.isObject('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为object</Button>
            </Block>
            <Block title="isDate">
                <Button onTap={() => {
                    const isVal = Validate.isDate('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为date</Button>
            </Block>
            <Block title="isDate">
                <Button onTap={() => {
                    const isVal = Validate.isMobile('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为mobile</Button>
            </Block>
            <Block title="isDate">
                <Button onTap={() => {
                    const isVal = Validate.isNumeric('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为Number</Button>
            </Block>
            <Block title="isDate">
                <Button onTap={() => {
                    const isVal = Validate.isId('ddd')
                    Toast.info(`isVal：${isVal}`)
                }}>验证是否为身份证</Button>
            </Block>
        </Frame>
    );
};
