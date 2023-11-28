import { message } from 'antd'
export const reqHeader = {
  'Accept': '*/*',
  mode: 'cors',
  'Content-Type': 'application/json',
};

export function authBeforeRes(response: any) {
  switch (response.status) {
    case 200:
      return response
    case 401:
      message.error('登录失效, 请重新登录！');
      window.location.href = '/login'
      return Promise.reject(response);
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.error('Request error: ', response.status, response.statusText)
      }
      return Promise.reject(response);
  }
}

export function authAfterRes(response: any) {
  if (response.code === '400007' && window.location.pathname !== '/login') {
    window.location.href = '/login'
  }
  return response;
}
