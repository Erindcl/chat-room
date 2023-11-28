import React, { useState, useEffect } from 'react'
import { message as Message } from 'antd'
import { API } from '../../api'
import './index.scss'

const Page: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(1)
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
    <div>
      首页 {count}
    </div>
  )
}

export default Page
