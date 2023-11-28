const api: any = {
  login: { // 登录
    method: 'post',
    url: '/pm/h5/login'
  },
  getMsgCode: { // 获取登录验证码
    method: 'postForm',
    url: '/pm/h5/sendCode'
  },
}

export default api
