import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('progress');

const validProgress = (progress: number | undefined) => {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
};

const sortGradient = (gradients: any) => {
  let tempArr: any[] = [];
  Object.keys(gradients).forEach((key) => {
    const formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key],
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(({ key, value }) => `${value} ${key}%`).join(', ');
};

const handleGradient = (color: any) => {
  const {
    from = '#1890ff',
    to = '#1890ff',
    direction = 'to right',
    ...rest
  } = color;
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest as any);
    return {
      backgroundImage: `linear-gradient(${direction}, ${sortedGradients})`,
    };
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` };
};

export interface LineProps {
  percent?: number;
  color?: string;
  bgColor?: string;
  size?: string;
  width?: number;
  shape?: string;
  [restProps: string]: any;
}

const Line: React.FC<LineProps> = (props: LineProps) => {
  const {
    percent,
    width,
    size,
    color,
    bgColor,
    shape = 'round',
    successPercent,
    children,
  } = props;

  let backgroundProps;
  if (color && typeof color !== 'string') {
    backgroundProps = handleGradient(color);
  } else {
    backgroundProps = {
      background: color,
    };
  }

  let bgStyle;

  let borderRadius: any = null;
  if (shape === 'sharp') {
    borderRadius = 0;
  }
  if (shape === 'square') {
    borderRadius = '4px';
  }

  if (borderRadius || borderRadius === 0) {
    bgStyle = {
      borderRadius,
    };
  }

  if (bgColor && typeof bgColor === 'string') {
    bgStyle = {
      ...bgStyle,
      backgroundColor: bgColor,
    };
  }

  let sizeWidth = '16px';
  if (size === 'small') {
    sizeWidth = '12px';
  }
  if (size === 'large') {
    sizeWidth = '20px';
  }

  const percentStyle = {
    width: `${validProgress(percent)}%`,
    height: width || sizeWidth,
    borderRadius,
    ...backgroundProps,
  };
  const successPercentStyle = {
    width: `${validProgress(successPercent)}%`,
    height: width || sizeWidth,
    borderRadius,
  };

  const successSegment =
    successPercent !== undefined ? (
      <View className={`${prefixCls}-success-bg`} style={successPercentStyle} />
    ) : null;

  return (
    <>
      <View className={`${prefixCls}-outer`}>
        <View className={`${prefixCls}-inner`} style={bgStyle}>
          <View className={`${prefixCls}-bg`} style={percentStyle} />
          {successSegment}
        </View>
      </View>
      {children}
    </>
  );
};

export default Line;
