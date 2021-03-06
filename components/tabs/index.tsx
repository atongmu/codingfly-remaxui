import React, { useMemo, useState, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { createSelectorQuery } from '../one';
import { guid } from '../_utils';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('tabs');

export interface TabTitleProps {
  key?: string | number;
  tab?: React.ReactNode;
}

export interface TabProps {
  type?: string;
  direction?: string;
  activeKey?: string | number;
  animated?: boolean;
  fixed?: boolean;
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
  headerStyle?: React.CSSProperties;
  extra?: React.ReactNode;
  titleWidth?: number;
  titleSquare?: boolean;
  titleAlign?: string;
  titleStyle?: React.CSSProperties;
  onTabClick?: (i: any) => void;
}

export interface TabContentProps {
  key?: string | number;
  tab?: React.ReactNode;
  active?: boolean;
  style?: React.CSSProperties;
  animated?: boolean;
  children?: React.ReactNode;
}

const heightUnit = 48;
// const prevTabs: any[] = [];

const getTabContents = (
  children: React.ReactNode,
  activeKey?: string | number,
  animated?: boolean,
): [TabTitleProps[], any[]] => {
  const tabContents: any[] = [];
  const tabs: TabTitleProps[] = [];
  React.Children.forEach(children, (node: any, index: number) => {
    const newNode = node;
    if (React.isValidElement(node)) {
      return (
        tabs.push({ key: newNode.key, tab: newNode.props.tab }) &&
        tabContents.push(
          <TabContent
            key={newNode.key}
            {...newNode.props}
            active={
              activeKey === undefined
                ? index === 0 && newNode.key
                : String(activeKey) === newNode.key
            }
            animated={animated}
          />,
        )
      );
    }
  });
  return [tabs, tabContents];
};

const getTabIndex = (tabs: TabTitleProps[], activeKey?: string | number) => {
  let tIndex = 0;
  tabs.forEach((i: any, index: number) => {
    if (i.key === activeKey) {
      tIndex = index;
    }
  });
  return tIndex;
};

const Tabs = (props: TabProps): React.ReactElement => {
  const {
    type,
    direction = 'horizontal',
    activeKey,
    animated,
    fixed,
    onTabClick,
    headerContent,
    children,
    headerStyle,
    extra,
    titleWidth,
    titleSquare,
    titleAlign,
    titleStyle,
  } = props;

  // ?????????????????????????????????Tabs????????????Tabs?????? UniqueID
  const TABS_TITLE_ID = useMemo(guid, []);
  const [tabs, tabContents] = useMemo(() => getTabContents(children, activeKey, animated), [
    children,
  ]);
  // ??? activeKey ????????????????????? selected ???Tab?????????????????? selected ????????????????????? Tab ????????????
  const selected = useMemo(() => getTabIndex(tabs, activeKey), [activeKey, tabs]);

  const [titleWrapperLeft, setTitleWrapperLeft] = useState(0);
  const [titleNodes, setTitleNodes] = useState<any[]>([]);

  useEffect(() => {
    if (type === 'plain') {
      const query: any = createSelectorQuery();
      query
        .select(`.${prefixCls}-plain-${TABS_TITLE_ID}`)
        .scrollOffset?.()
        .exec((ret: any) => {
          const r = Array.isArray(ret) ? ret[0] : ret;
          setTitleWrapperLeft(-(r?.scrollLeft || 0));
        });
    }
  }, [activeKey]);

  useEffect(() => {
    if (type === 'plain') {
      const query: any = createSelectorQuery();
      // ??????setTimeout???????????????????????????nodes(??????????????? .anna-tabs-plain-title ?????????????????????????????????)
      setTimeout(() => {
        query
          .selectAll(`.${prefixCls}-plain-${TABS_TITLE_ID} .${prefixCls}-plain-title`)
          .boundingClientRect()
          .exec((ret: any) => {
            const r = Array.isArray(ret) ? ret[0] : [ret];
            const nodes =
              r?.map((i: any) => ({
                offsetLeft: i.left,
                offsetWidth: i.width,
              })) || [];
            // ????????????tabbar???????????????????????????????????????(????????????????????????????????????????????????????????????)????????????nodes?????????????????????????????????Tabs??????left?????????0???
            nodes.length > 0 && setTitleNodes(nodes);
          });
      }, 200);
    }
  }, [tabs.length]);

  const handleTabClick = (item: any) => {
    onTabClick?.(item);
  };

  const activeKeyStr = String(activeKey);

  const renderTabs = () => {
    if (type === 'plain') {
      const titleNode = titleNodes?.[selected] || { offsetLeft: 0, offsetWidth: 0 };
      // ????????????left????????????????????? .anna-tabs-plain ????????????????????????????????????????????????????????? .anna-tabs-plain ??????
      // ????????????width???100%???Tabs??????????????????????????????
      const left = titleNode.offsetLeft + titleNode.offsetWidth / 2;
      // ?????????????????????????????????????????? offsetLeft ?????????????????? scrollOffset ????????? scrollLeft???
      if (titleWrapperLeft < 0) {
        // left += Math.abs(titleWrapperLeft); //???????????????????????????offsetLeft??????????????????????????????????????????????????????
      }
      return (
        <View
          className={classNames({
            [`${prefixCls}-plain`]: true,
            [`${prefixCls}-plain-center`]: titleAlign === 'center',
            [`${prefixCls}-plain-${TABS_TITLE_ID}`]: true,
          })}
        >
          {tabs.map((item: TabTitleProps) => (
            <View
              key={item.key}
              className={classNames({
                [`${prefixCls}-plain-title`]: true,
                [`${prefixCls}-plain-center-title`]: titleAlign === 'center',
              })}
              style={titleStyle}
              onTap={() => handleTabClick(item)}
            >
              {item.tab}
            </View>
          ))}
          <View
            className={`${prefixCls}-plain-active`}
            style={{
              transform: `translateX(${left}PX) translateX(-50%)`,
            }}
          />
        </View>
      );
    }
    if (type === 'card') {
      return (
        <View className={`${prefixCls}-card`}>
          {tabs.map((item: TabTitleProps) => (
            <View
              key={item.key}
              className={classNames({
                [`${prefixCls}-card-title`]: true,
                [`${prefixCls}-card-active`]: activeKeyStr === item.key,
              })}
              style={titleStyle}
              onTap={() => handleTabClick(item)}
            >
              {item.tab}
            </View>
          ))}
        </View>
      );
    }
    return (
      <View className={`${prefixCls}-slider`}>
        <View
          className={classNames({
            [`${prefixCls}-slider-bg`]: true,
            [`${prefixCls}-slider-bg-square`]: titleSquare,
          })}
        >
          <View className={`${prefixCls}-slider-container`}>
            {tabs.map((item: TabTitleProps) => (
              <View
                key={item.key}
                className={`${prefixCls}-slider-title`}
                style={
                  {
                    ...titleStyle,
                    fontWeight: activeKeyStr === item.key ? 500 : 400,
                    width: titleWidth ? `${titleWidth}px` : null,
                  } as React.CSSProperties
                }
                onTap={() => {
                  handleTabClick(item);
                }}
              >
                {item.tab}
              </View>
            ))}
            <View
              className={`${prefixCls}-slider-active`}
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${selected * 100}%)`,
              }}
            />
          </View>
        </View>
        {extra}
      </View>
    );
  };

  if (direction === 'vertical') {
    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-vertical`}>
          <View className={`${prefixCls}-vertical-sidebar`}>
            {tabs?.map((item: TabTitleProps, index: number) => (
              <View
                key={item.key}
                className={`${prefixCls}-vertical-sidebar-item`}
                style={{
                  ...titleStyle,
                  fontWeight: selected === index ? 500 : 400,
                  backgroundColor: selected === index ? '#FDFFFD' : '#FAFAFA',
                }}
                onTap={() => handleTabClick(item)}
              >
                {item.tab}
                {selected === index && (
                  <View className={`${prefixCls}-vertical-sidebar-top`}>
                    <View className={`${prefixCls}-vertical-sidebar-top-circle`} />
                  </View>
                )}
                {selected === index && (
                  <View className={`${prefixCls}-vertical-sidebar-bottom`}>
                    <View className={`${prefixCls}-vertical-sidebar-bottom-circle`} />
                  </View>
                )}
              </View>
            ))}
            <View
              className={`${prefixCls}-vertical-sidebar-active`}
              style={{
                transform: `translate3d(0, ${selected * heightUnit}PX, 0)`,
              }}
            />
          </View>
          <View className={`${prefixCls}-vertical-content`}>{tabContents}</View>
        </View>
      </View>
    );
  }

  return (
    <View className={prefixCls}>
      <View
        className={classNames(`${prefixCls}-header`, {
          [`${prefixCls}-header-fixed`]: fixed,
        })}
        style={{
          ...headerStyle,
        }}
      >
        {renderTabs()}
        <View className={`${prefixCls}-header-content`}>{headerContent}</View>
      </View>
      <View className={`${prefixCls}-content`}>
        <View
          className={`${prefixCls}-content-wrapper`}
          style={
            animated
              ? {
                  transition: `all 0.3s ease`,
                  transform: `translate3d(${-selected * 100}%, 0, 0)`,
                }
              : ({} as React.CSSProperties)
          }
        >
          {tabContents}
        </View>
      </View>
    </View>
  );
};

const TabContent: React.FC<TabContentProps> = (
  props: TabContentProps,
): React.ReactElement | null => {
  const { active, style, animated, children } = props;

  if (!active) {
    return (
      <View
        className={classNames(`${prefixCls}-content-tab`, {
          [`${prefixCls}-content-tab-inactive`]: !animated,
          [`${prefixCls}-content-tab-inactive-animated`]: animated,
        })}
        style={style}
      >
        {children}
      </View>
    );
  }
  return (
    <View className={`${prefixCls}-content-tab`} style={style}>
      {children}
    </View>
  );
};

Tabs.TabContent = TabContent;

export default Tabs;
