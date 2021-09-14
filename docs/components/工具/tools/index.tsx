/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 14:47:01
 * @LastEditTime: 2021-09-14 08:54:14
 * @FilePath: \my-remax-ui\docs\components\工具\tools\index.tsx
 */
import * as React from 'react';
import { Button, Toast, Tools } from '@codingfly/remaxui';
import { Block, Frame } from '../../common';

export default () => {
    return (
        <Frame grayBg padding>
            <Block title="深拷贝">
                <Button onTap={() => {
                    const obj = {
                        key: 1
                    }
                    const new_obj = Tools.deepClone(obj)
                    console.log(new_obj);

                }}>拷贝对象</Button>
            </Block>
            <Block title="浅拷贝">
                <Button onTap={() => {
                    const obj = {
                        key: 1
                    }
                    const new_obj = Tools.extend(obj)
                    console.log(new_obj);

                }}>拷贝对象</Button>
            </Block>
            <Block title="判断是否有单位">
                <Button onTap={() => {
                    const obj = 12
                    const new_obj = Tools.addUnit(obj)
                    console.log(new_obj);

                }}>添加单位</Button>
            </Block>
            <Block title="获取guid">
                <Button onTap={() => {
                    const new_obj = Tools.guid()
                    console.log(new_obj);

                }}>获取随机guid</Button>
            </Block>
            <Block title="sync、to">
                <Button onTap={async () => {
                    // const [errc, resc] = await to(sync(fun(), params));

                }}>sync、to</Button>
            </Block>
            <Block title="throttle">
                <Button onTap={() => {
                    // 如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。
                    // 默认是 第一次首先执行并且最后一次会执行，相当于 {leading: true, trailing: true}
                    // Tools.throttle(func: any, wait: any, options?: any)

                }}>throttle</Button>
            </Block>
        </Frame>
    );
};
