/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-13 15:39:29
 * @LastEditTime: 2021-09-06 09:00:49
 * @FilePath: \young\components\collapse\index.tsx
 */
import * as React from 'react';
import classNames from 'classnames';
import { View } from 'remax/one';
import { getPrefixCls } from './../common';
import Cell from '../cell';

const prefixCls = getPrefixCls('collapse');

export interface CollapseProps {
  toggle: (name: number | string, expanded: boolean) => void;
  isExpanded: (name: number | string) => boolean;
  border: boolean;
  children?: React.ReactNode;
  onChange: () => void;
}

const Collapse = (props: CollapseProps) => {
  const { border, children, onChange } = props;
  const getCheckboxs = (
    children: React.ReactNode,
    onChange?: (e?: any) => void,
  ) => {
    const onGroupChange = (e: any) => {
      onChange?.(e);
    };
    const collapse = React.Children.map(children, (collapse: any) => {
      const p = collapse?.props || {};
      let checked = p.checked;
      return (
        <View>
          <Cell></Cell>
        </View>
      );
    });

    return collapse;
  };
  const collapseboxs = getCheckboxs(children, onChange);

  return (
    <View
      className={classNames(`${prefixCls}`, {
        [`cui-hairline--top-bottom`]: border,
      })}
    >
      {collapseboxs}
    </View>
  );
};

export default Collapse;
