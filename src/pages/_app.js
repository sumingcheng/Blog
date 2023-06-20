import '@/styles/reset.css'
import '@/styles/globals.css'
import {ConfigProvider} from 'antd';
import React from 'react';

function _App ({Component, pageProps}) {
  // 这里可以自定义一些应用程序级别的配置
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
