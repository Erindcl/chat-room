// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import './index.scss'

const Page: React.FC = () => {
  const navigate = useNavigate()

  const login = () => {
    navigate('/')
  }

  return (
    <div className='logo-page'>
      <Button onClick={login} type="primary">登录</Button>
    </div>
  )
}

export default Page
