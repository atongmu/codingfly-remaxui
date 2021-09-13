/*
 * @Author: codingfly
 * @Description: 
 * @Date: 2021-08-27 14:28:39
 * @LastEditTime: 2021-09-13 15:48:33
 * @FilePath: \my-remax-ui\.umirc.ts
 */
import { defineConfig } from 'dumi';
import path from 'path';

process.env.BABEL_ENV = 'dumi';
const repo = 'my';

export default defineConfig({
  title: 'MyRemax UI',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  hash: true,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  outputPath: 'site',
  exportStatic: {},
  navs: [
    null,
  ],
  theme: {
    '@c-primary': '#108ee9',
  },
  sass: {
    implementation: require('node-sass'),
  },
  extraPostCSSPlugins: [
    require('postcss-preset-env')(),
    // CSS 文件 px2rem
    require('postcss-plugin-px2rem')({
      rootValue: 32,
      exclude: /(.dumi)/,
    }),
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@codingfly/remaxui',
        libraryDirectory: '/',
        style: true,
      },
    ],
  ],
  alias: {
    '@codingfly/remaxui': path.resolve(__dirname, 'components'),
    '../one': path.resolve(__dirname, 'components/web/index.ts'),
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // jsx 内联样式 px2rem
    memo.module
      .rule('px2rem')
      .test(/\.tsx$/i)
      .include.add(path.resolve(__dirname, 'components'))
      .add(path.resolve(__dirname, 'docs'))
      .end()
      .use('px2rem')
      .loader('./build/loaders/jsxPx2Rem.js')
      .options({
        remUnit: 100,
        remFixed: 3,
      });
  },
  styles: [
    `
    .icon.icon-link { 
      display: none;
    }
    .__dumi-default-navbar-tool{
      display: none !important;
    }
    .cui-btn:not(.cui-btn-disabled):hover .cui-btn-mask {	
      box-sizing: border-box;	
      position: absolute;	
      top: -1PX;	
      right: -1PX;	
      bottom: -1PX;	
      left: -1PX;	
      content: '';	
      background-color: rgba(255, 255, 255, 0.35);	
      border-radius: inherit;	
      pointer-events: none;	
      transition: background-color 0.3s;
    }

    `,
  ],
});
