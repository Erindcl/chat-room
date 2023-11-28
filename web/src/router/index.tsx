import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BasicLayout = React.lazy(() => import('../layout/basic_layout'))
const Home = React.lazy(() => import('../views/home'))
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
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default router