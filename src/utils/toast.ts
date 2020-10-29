import Taro from '@tarojs/taro';


export function showErrorToast(msg) {
  Taro.showToast({
    title: msg,
    image: '@/assets/images/icon_error.png'
  })
}

export function redirect(url) {

  //判断页面是否需要登录
  if (false) {
    Taro.redirectTo({
      url: '/pages/login/index'
    });
    return false;
  } else {
    Taro.redirectTo({
      url: url
    });
  }
}