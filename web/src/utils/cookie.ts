/**
 * 原生 JavaScript 获取 cookie 值
 * @param name
 */
export const getCookie = (name: any) => {
  const arr = document.cookie.match(
    new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  );
  if (arr != null) {
    return unescape(decodeURI(arr[2]));
  }
  return null;
}

export const deleteCookie = (name: any, domain: any, path: any) => {
  const d = new Date(0);
  domain = domain ? `; domain=${domain}` : '';
  path = path || '/';
  document.cookie =
    name + '=; expires=' + d.toUTCString() + domain + '; path=' + path;
}

export const deleteAllCookies = (domain: any, path: any) => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i]) {
      deleteCookie(cookies[i].split('=')[0], domain, path);
    }
  }
}

export const setCookie = (name: any, value: any, hours?: any) => {
  // cookie过期时间为6小时
  let expires = '';
  const date = new Date();
  date.setTime(date.getTime() + (hours || 6) * 60 * 60 * 1000);
  expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + value + expires + '; path=/';
}