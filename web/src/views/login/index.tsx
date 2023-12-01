import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setUserInfo } from '../../store/user/action'
import { IUser } from '../../types'
import { Button, Form, Input, message as Message } from 'antd'
import logoImg from '../../assets/images/logo.svg'
import { API } from '../../api'
import './index.scss'

interface IProps {
  setUserInfo: (data: IUser) => void;
}

const Page: React.FC<IProps> = ({ setUserInfo }) => {
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    // navigate('/')
    login(values)
    // register()
  };

  const login = async (values: any) => {
    const res: any = await API.login(values)
    if (!res) return;
    const { code, message, data } = res
    if (code === '000000') {
      setUserInfo(data)
      navigate('/')
    } else {
      Message.error(message)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const register = async () => {
    const res: any = await API.register({
      username: 'Cookie',
      avatar: 'cookie',
      password: '123456',
    })
    if (!res) return;
    const { code, message, data } = res
    if (code === '000000') {
      console.log(data)
    } else {
      Message.error(message)
    }
  }

  return (
    <div className='logo-page'>
      <div className='login-form-wrapper'>
        <div className='web-title-wrapper'>
          <img src={logoImg} alt='logo' />
          <span>CHAT ROOM</span>
        </div>
        <Form
          name="login_form"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          style={{ width: '100%' }}
          initialValues={{ username: 'Lily', password: '123456' }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label=""
            name="username"
            rules={[{ required: true, message: 'Please input your username' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className='btn-form-item'>
            <Button className='login-btn' type="primary" htmlType="submit">
              LOG IN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default connect(
  () => ({}),
  (dispatch: any) => bindActionCreators({ setUserInfo }, dispatch)
  )(Page)
