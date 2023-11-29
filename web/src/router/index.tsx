import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BasicLayout = React.lazy(() => import('../layout/basicLayout'))
const Chat = React.lazy(() => import('../views/chat'))
const Login = React.lazy(() => import('../views/login'))

const Loading: React.FC = () => {
  return (<div>...</div>)
}

const NotFound: React.FC = () => {
  return (
    <div>该页面不存在</div>
  )
}

const router: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Chat />} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default router