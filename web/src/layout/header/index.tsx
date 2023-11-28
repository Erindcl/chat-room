import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from "redux"
import { setUserInfo } from '../../store/user/action'
import { IUser } from '../../types'
import { Button } from 'antd'
import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/avatar.svg'
import './index.scss'

interface IProps {
  children?: any;
  userInfo: IUser;
  setUserInfo: (data: IUser) => void;
}

const Header: React.FC<IProps> = ({ children, userInfo, setUserInfo }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const tempUser = { id: 1, name: 'admin', avatar: '' }
    setUserInfo(tempUser)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="layout-header">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <span>Chat Room</span>
      </div>
      <div className="header-right">
        {
          children ? children :
          <div className="user-wrapper">
            <img src={userInfo.avatar || avatar} alt="avatar"/>
            <span>{userInfo.name}</span>
            <Button type="link" onClick={logout}>退出登录</Button>
          </div>
        }
      </div>
    </div>
  )
}

export default connect(
  (state: any) => ({
    userInfo: { ...state.user }
  }),
  (dispatch: any) => bindActionCreators({ setUserInfo }, dispatch)
)(Header)
