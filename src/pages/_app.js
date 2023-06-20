import '@/styles/reset.css'
import '@/styles/globals.css'
import {ConfigProvider} from 'antd';
import React from 'react';

function _App ({Component, pageProps}) {
  // antd 配置主题颜色
  return <>
    <ConfigProvider
        theme={{
          // token: {
          //   colorPrimary: '#353535',
          // },
        }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  </>
}

export default _App;
