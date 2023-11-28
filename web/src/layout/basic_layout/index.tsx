import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Spin } from 'antd';
import Header from '../header'
import './index.scss';


const Page: React.FC = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const { pathname } = location
  const hideHeaderPath: string[] = [] // 自定义头部页面路由

  useEffect(() => {
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (!loading ?
    <div className='basic-layout-wrapper'>
      {hideHeaderPath.includes(pathname) ? null : <Header />}
      <div className='layout-main-container'>
        <Outlet />
      </div>
    </div> : <div className='loading-page-wrapper'>
      <Spin />
    </div>
  )
}

export default Page
