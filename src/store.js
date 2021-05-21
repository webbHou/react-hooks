/*
 * @Author: webbhou
 * @Date: 2020-12-01 16:07:56
 * @LastEditors: webbhou
 * @LastEditTime: 2020-12-14 10:16:14
 * @FilePath: /react-hooks/src/store.js
 * @Description: 
 */

import {createStore, applyMiddleware, compose } from 'redux';

import count from './reducer';

const store = createStore(
    count,
    compose(window.devToolsExtension?window.devToolsExtension():f=>f)
  );

export default store