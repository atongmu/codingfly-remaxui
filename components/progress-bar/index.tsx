/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-17 09:52:21
 * @LastEditTime: 2021-09-08 15:16:37
 * @FilePath: \annar-master\components\progress-bar\index.tsx
 */
import * as React from 'react';
import classNames from 'classnames';
import Box from '../box';
import Loading from '../loading';
import { getPrefixCls } from './../common';

const prefixCls = getPrefixCls('progress_bar');

export interface ItemProps {
  key: string;
  value: string;
}

export interface ProgressBarProps {
  data?: ItemProps[];
  value?: string;
  style?: React.CSSProperties;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { data = [], value, style } = props;

  const [move, setMove] = React.useState(false);

  React.useEffect(() => {
    if (data.length > 1 && !move) {
      setTimeout(() => {
        setMove(true);
      }, 100);
    }
  }, [data]);

  let curIndex = -1;
  data.forEach((item, index) => {
    if (value === item.key) {
      curIndex = index;
    }
  });
  const moveX = data.length > 0 ? (100 / data.length) * (curIndex + 1) : 100;

  return (
    <Box className={prefixCls} style={style}>
      {data?.map((item, index) => (
        <Box
          key={item.key}
          className={classNames({
            [`${prefixCls}-node`]: true,
            [`${prefixCls}-node_first`]: index === 0,
            [`${prefixCls}-node_last`]: index === curIndex,
            [`${prefixCls}-node_active`]: index <= curIndex,
          })}
        >
          {item.value}
        </Box>
      ))}
      {data.length === 0 ? <Loading type="gap" gapColor="#E8E8E8" /> : null}
      <Box
        className={`${prefixCls}-process`}
        style={{
          width: move ? `${moveX}%` : 0,
          transition: `width ${(curIndex + 1) * 0.3}s ease-in`,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
