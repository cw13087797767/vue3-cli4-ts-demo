/*
 * @Description: 加载插件
 * @Author: chenwei
 * @Date: 2022-02-08 10:50:06
 * @Last Modified by: chenwei
 * @Last Modified time: 2022-02-08 10:51:06
 */
import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context('.', true, /\.ts$/)
  console.log(files)
  console.log(files.keys())
  files.keys().forEach(key => {
    console.log(key, files(key))
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app)
    }
  })
}
