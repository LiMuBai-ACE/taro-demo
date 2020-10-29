const path = require('path')
const outputRootStrtegy = {
  h5: 'dist_h5', // h5打包
  weapp: 'dist_weapp', // 微信小程序
  alipay: 'dist_alipay', // 支付宝小程序
  swan: 'dist_swan', // 百度小程序
  rn: 'dist_rn', // 百度小程序
  ['undefined']: 'dist'
}
const env = JSON.parse(process.env.npm_config_argv)['cooked'][1].split(':')[1]
const outputRoot = outputRootStrtegy[env]
const config = {
  projectName: 'weapp-taro',
  date: '2020-10-28',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目产出目录
  outputRoot: outputRoot,
  // 编译插件配置
  plugins: [],
  // 全局变量设置
  defineConstants: {},
  // 文件 copy 配置
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    // 由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
