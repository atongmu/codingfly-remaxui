/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-11 11:44:48
 * @LastEditTime: 2021-09-06 09:06:41
 * @FilePath: \young\components\toast\index.tsx
 */
import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Notification from 'rmc-notification';
import { getPrefixCls } from '../common';
import { View } from 'remax/one';
import Loading from '../loading';
const prefixCls = getPrefixCls('toast');

const SHORT = 3;

interface IToastConfig {
  duration: number;
  mask: boolean;
}

const config: IToastConfig = {
  duration: SHORT,
  mask: true,
};

let messageInstance: any;
let messageNeedHide: boolean;

function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void,
) {
  (Notification as any).newInstance(
    {
      prefixCls,
      style: {}, // clear rmc-notification default style
      transitionName: 'am-fade',
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
      }),
    },
    (notification: any) => callback && callback(notification),
  );
}

function notice(
  content: React.ReactNode,
  type: string,
  duration = config.duration,
  onClose: (() => void) | undefined | null,
  mask = config.mask,
) {
  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'roundcheck',
    fail: 'roundclose',
    offline: 'question',
    loading: 'loading',
  };
  const iconType = iconTypes[type];
  messageNeedHide = false;
  getMessageInstance(mask, (notification) => {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }

    if (messageNeedHide) {
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;

    notification.notice({
      duration,
      style: {},
      content: !!iconType ? (
        <View
          className={`${prefixCls}-text ${prefixCls}-text-icon`}
          role="alert"
          aria-live="assertive"
        >
          {iconType === 'loading' ? (
            <Loading
              color="#fff"
              textSize="64px"
              style={{ margin: ' 20px 0' }}
            />
          ) : (
            <Icon type={iconType} size="48px" color="#fff" />
          )}
          <div className={`${prefixCls}-text-info`}>{content}</div>
        </View>
      ) : (
        <View
          className={`${prefixCls}-text`}
          role="alert"
          aria-live="assertive"
        >
          <View>{content}</View>
        </View>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose();
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  });
}

export default {
  SHORT,
  LONG: 8,
  show(content: React.ReactNode, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask } = conf;
    config.duration = duration;
    if (mask === false) {
      config.mask = false;
    }
  },
};
