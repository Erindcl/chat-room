import 'whatwg-fetch'
import { authBeforeRes, authAfterRes } from './interceptor';
import { getCookie } from '../utils/cookie';

class Http {
  get(url: any, params?: any) { 
    let options = { method: 'GET' }
    let req_url = params ? this.buildUrl(url, params) : url;
    return this.request(req_url, options)
  }

  post(url: any, data?: any) { 
    let options: any = { method: 'POST', headers: { "content-type": "application/json;charset=UTF-8" } }
    if (data) options.body = JSON.stringify(data)
    return this.request(url, options)
  }

  postUrlencoded(url: any, data?: any) { 
    let options: any = { method: 'POST', headers: { "content-type": "application/x-www-form-urlencoded" } }
    if (data) options.body = JSON.stringify(data)
    return this.request(url, options)
  }

  postForm(url: any, data?: any) {
    let options: any = { method: 'POST', headers:{ 'content-type': 'multipart/form-data' } }
    if (data) options.body = this.buildFormData(data);
    return this.request(url, options)
  }
  
  buildUrl(url: any, params?: any) {
    const ps: any[] = []
    if (params) {
      for (let p in params) {
        if (p&&params[p]!==undefined&&params[p]!==null) {
          ps.push(p + '=' + encodeURIComponent(params[p]));
        }
      }
    }
    return url + '?' + ps.join('&')
  }

  buildFormData(params?: any) {
    if (params) {
      const data = new FormData()
      for (let p in params) {
        if (p) {
          data.append(p, params[p])
        }
      }
      return data;
    }
  }
  request(url: any, options: any) {
    let baseHeaders = {
      'x-token': getCookie('x-token'),
      'x-time': getCookie('x-time'),
      'x-key': getCookie('x-key'),
    }
    options.headers = {
      ...baseHeaders,
      ...(options.headers || {})
    };
    return fetch(url, options)
      .then(authBeforeRes)
      .then(response => {
        return response.json()
      })
      .then(authAfterRes)
      .catch(err => {
        console.error("错误信息：",JSON.stringify(err));
      });
  }
}
export default (new Http() as any)
