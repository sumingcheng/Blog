import '@/styles/reset.css'
import '@/styles/globals.css'
import {ConfigProvider} from 'antd';
import React, {useState} from 'react';
import {ThemeContext} from '@/context/index.tsx';

function _App ({Component, pageProps}) {
  const [theme, setTheme] = useState('light');

  // antd 配置主题颜色
  return <>
    <ConfigProvider
        theme={{
          token: {
            "colorPrimary": theme === 'light' ? "#1677ff" : 'dark',
          },
        }}
    >
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ConfigProvider>
  </>
}

export default _App;
