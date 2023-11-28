  // eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { message as Message } from 'antd'
import robot from '../../assets/images/robot.svg'
import { IUser } from '../../types'
import { API } from '../../api'
import './index.scss'

interface IProps {
  chatWith: IUser;
  userInfo: IUser;
}

const Page: React.FC<IProps> = ({ chatWith, userInfo }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getData = async () => {
    const res: any = await API.login({})
    const { code, message, data } = res
    if (code === '000000') {
      console.log(data)
    } else {
      Message.error(message)
    }
  }

  return (
    <div className='chat-page'>
      {chatWith.id ? <div className='chat-panel'>

      </div> :
      <div className='welcome-chat'>
        <img src={robot} alt='welcome' />
        <div className='welcome-txt'>Welcome, <span>{userInfo.name}!</span></div>
        <div className='desc-txt'>Please select a chat to start messaging.</div>
      </div>}
    </div>
  )
}

export default connect(
  (state: any) => ({
    userInfo: { ...state.user },
    chatWith: { ...state.chatWith },
  })
)(Page)
