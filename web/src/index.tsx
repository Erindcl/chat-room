import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import store from './store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import themeToken from '../src/constants/theme'
import 'dayjs/locale/zh-cn'
import '../src/styles/common.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN} theme={{ token: themeToken }}>
      <Router />
    </ConfigProvider>
  </Provider>
)
