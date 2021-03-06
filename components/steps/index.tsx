import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('steps');

export interface StepProps {
  title?: React.ReactNode;
  errorTitle?: React.ReactNode;
  extra?: React.ReactNode;
  description?: React.ReactNode;
}

export interface StepsProps {
  current?: number;
  status?: string;
  direction?: string;
  steps?: StepProps[];
}

const Steps = (props: StepsProps): React.ReactElement => {
  const { direction = 'horizontal', current = 0, steps, status } = props;
  const statusIconType =
    status === 'error' ? 'roundclosefill' : 'roundcheckfill';
  const statusIconColor = status === 'error' ? '#f5222d' : '#1890FF';

  const getTitle = (item: StepProps, index: number) => {
    if (index === current) {
      if (status === 'error') {
        return item.errorTitle || item.title;
      }
    }
    return item.title;
  };

  if (direction === 'vertical') {
    return (
      <View className={prefixCls}>
        {steps?.reverse?.()?.map((item, index) => (
          <View key={index} className={`${prefixCls}-step`}>
            {index === steps?.length - 1 ? null : index < current ? (
              <View className={`${prefixCls}-line-ahead`} />
            ) : (
              <View className={`${prefixCls}-line`} />
            )}
            {index === current ? (
              <View className={`${prefixCls}-circle_current`}>
                <Text className={`${prefixCls}-circle_current-icon`}>
                  <Icon type={statusIconType} color={statusIconColor} />
                </Text>
              </View>
            ) : null}
            {index < current ? (
              <View className={`${prefixCls}-circle-ahead`} />
            ) : null}
            {index > current ? (
              <View className={`${prefixCls}-circle`} />
            ) : null}
            <View className={`${prefixCls}-step-header`}>
              <View className={`${prefixCls}-step-header-title`}>
                {getTitle(item, index)}
              </View>
              <View className={`${prefixCls}-step-header-extra`}>
                {item.extra}
              </View>
            </View>
            <View className={`${prefixCls}-step-description`}>
              {item.description}
            </View>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View className={`${prefixCls}_horizontal`}>
      {steps?.map((item, index) => (
        <View
          key={index}
          className={classNames({
            [`${prefixCls}_horizontal-step`]: true,
            [`${prefixCls}_horizontal-step-finish`]: index <= current - 1,
          })}
        >
          <View className={`${prefixCls}_horizontal-step-container`}>
            <View className={`${prefixCls}_horizontal-step-container-icon`}>
              {index < current ? (
                <Icon type="roundcheckfill" color="#1890FF" size={28} />
              ) : null}
              {index === current ? (
                <Icon type={statusIconType} color={statusIconColor} size={28} />
              ) : null}
              {index > current ? (
                <View
                  className={`${prefixCls}_horizontal-step-container-icon-default`}
                >
                  <View />
                </View>
              ) : null}
            </View>
            <View className={`${prefixCls}_horizontal-step-container-content`}>
              <View
                className={`${prefixCls}_horizontal-step-container-content-title`}
              >
                {getTitle(item, index)}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Steps;
