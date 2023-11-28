import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from "redux"
import { setUserInfo } from '../../store/user/action'
import { IUser } from '../../types'
import { LogoutOutlined } from '@ant-design/icons'
import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/avatar.svg'
import './index.scss'

interface IProps {
  children?: any;
  userInfo: IUser;
  setUserInfo: (data: IUser) => void;
}

const Sidebar: React.FC<IProps> = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate()
  const [friendList, setFriendList] = useState<any[]>([])

  useEffect(() => {
    setFriendList([
      { id: 2, name: 'Beer', avatar: 'beer' },
      { id: 3, name: 'Candy', avatar: 'candy' },
      { id: 4, name: 'Honey', avatar: 'honey' },
      { id: 5, name: 'Ice', avatar: 'ice' },
      { id: 6, name: 'Milk', avatar: 'milk' },
    ])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="layout-sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <span>CHAT ROOM</span>
      </div>
      <div className='friend-list-wrapper'>
        <ul className='friend-list cr-scroll-bar'>
          {friendList.map((ele: any, index: number) => {
            return (<li key={index} className='friend-item'>
              <img src={require(`../../assets/images/${ele.avatar}.svg`)} alt="avatar"/>
              <span>{ele.name}</span>
            </li>)
          })}
        </ul>
      </div>
      <div className="user-wrapper">
        <img src={require(`../../assets/images/${userInfo.avatar}.svg`)} alt="avatar"/>
        <span>{userInfo.name}</span>
        <LogoutOutlined className='logout-btn' onClick={logout} />
      </div>
    </div>
  )
}

export default connect(
  (state: any) => ({
    userInfo: { ...state.user },
    // chatWith: { ...state.chatWith },
  }),
  (dispatch: any) => bindActionCreators({ setUserInfo }, dispatch)
)(Sidebar)
