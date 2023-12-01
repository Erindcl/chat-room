import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { IUser } from '../../types'
import { Spin } from 'antd';
import Sidebar from '../sidebar'
import './index.scss';

interface IProps {
  userInfo: IUser;
}

const Page: React.FC<IProps> = ({ userInfo }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userInfo.id) {
      setLoading(false)
    } else {
      navigate('/login')
    }
  }, [userInfo])

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
  (state: any) => ({
    userInfo: { ...state.user },
  })
)(Page)
