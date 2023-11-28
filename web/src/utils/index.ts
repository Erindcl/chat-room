export const createType = (keys: string[]) => {
  let obj: any = {};
  keys.forEach((item: string) => {
    obj[item] = item;
  })
  return obj;
}

// 获取地址栏url后的参数值
export const getUrlParam = (key: string) => {
  let href = window.location.href;
  let url = href.split('?');
  if (url.length <= 1) {
    return '';
  }
  let params = url[1].split('&');
  for (let i = 0; i < params.length; i++) {
    let param = params[i].split('=');
    if (key === param[0]) {
      return param[1];
    }
  }
}
