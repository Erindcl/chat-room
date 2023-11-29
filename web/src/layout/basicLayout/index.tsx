import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setUserInfo } from '../../store/user/action'
import { IUser } from '../../types'
import { Spin } from 'antd';
import Sidebar from '../sidebar'
import './index.scss';

interface IProps {
  setUserInfo: (data: IUser) => void;
}

const Page: React.FC<IProps> = ({ setUserInfo }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const tempUser = { id: 1, name: 'Cookies', avatar: 'cookies' }
    setUserInfo(tempUser)
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (!loading ?
    <div className='basic-layout-wrapper'>
      <div className='layout-sidebar-wrapper'>
        <Sidebar />
      </div>
      <div className='layout-main-container'>
        <Outlet />
      </div>
    </div> : <div className='loading-page-wrapper'>
      <Spin />
    </div>
  )
}

export default connect(
  () => ({}),
  (dispatch: any) => bindActionCreators({ setUserInfo }, dispatch)
)(Page)
