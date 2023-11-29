import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from "redux"
import { setChatWith } from '../../store/chat_with/action'
import { IUser } from '../../types'
import { LogoutOutlined } from '@ant-design/icons'
import logo from '../../assets/images/logo.svg'
import './index.scss'

interface IProps {
  chatWith: IUser;
  userInfo: IUser;
  setChatWith: (data: IUser) => void;
}

const Sidebar: React.FC<IProps> = ({ chatWith, userInfo, setChatWith }) => {
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
            return (<li onClick={() => setChatWith(ele)} key={index} className={['friend-item', ele.id === chatWith.id ? 'active' : ''].join(' ')}>
              <img src={require(`../../assets/images/avatar/${ele.avatar}.svg`)} alt="avatar"/>
              <span>{ele.name}</span>
            </li>)
          })}
        </ul>
      </div>
      <div className="user-wrapper">
        <img src={require(`../../assets/images/avatar/${userInfo.avatar}.svg`)} alt="avatar"/>
        <span>{userInfo.name}</span>
        <LogoutOutlined className='logout-btn' onClick={logout} />
      </div>
    </div>
  )
}

export default connect(
  (state: any) => ({
    userInfo: { ...state.user },
    chatWith: { ...state.chatWith },
  }),
  (dispatch: any) => bindActionCreators({ setChatWith }, dispatch)
)(Sidebar)
