import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { Button, Input, message as Message } from 'antd'
import { setChatWith } from '../../store/chatWith/action'
import { CloseOutlined } from '@ant-design/icons'
import { IUser } from '../../types'
import robot from '../../assets/images/robot.svg'
import sendIco from '../../assets/images/send.svg'
import { API } from '../../api'
import './index.scss'

interface IProps {
  chatWith: IUser;
  userInfo: IUser;
  setChatWith: (data: IUser) => void;
}

const Page: React.FC<IProps> = ({ chatWith, userInfo, setChatWith }) => {
  const [chatList, setChatList] = useState<any[]>([])

  useEffect(() => {
    setChatList([
      { userId: 2, content: 'Hello! Nice to meet you.' },
      { userId: 1, content: 'Nice to meet you too.' },
    ])
  }, [])

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
        <div className='chat-panel-head'>
          <img src={require(`../../assets/images/avatar/${chatWith.avatar}.svg`)} alt="avatar"/>
          <span>{chatWith.name}</span>
          <CloseOutlined className='close-btn' onClick={() => setChatWith({ id: 0, name: '', avatar: '' })} />
        </div>
        <div className='chat-panel-content cr-scroll-bar'>
          {chatList.map((ele: any, index: number) => {
            return (<div className={['chat-content-item', ele.userId === userInfo.id ? 'right' : 'left'].join(' ')} key={index}>
              <div className='chat-content-text'>{ele.content}</div>
            </div>)
          })}
        </div>
        <div className='chat-panel-operate'>
          <div className='send-form'>
            <Input.TextArea className='input-ele' placeholder='Type your message here' />
            <Button type='primary' className='send-btn'>
              <img src={sendIco} alt='send'/>
            </Button>
          </div>
        </div>
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
  }),
  (dispatch: any) => bindActionCreators({ setChatWith }, dispatch)
  )(Page)
