import '@/styles/reset.css'

function _App ({Component, pageProps}) {
  // 这里可以自定义一些应用程序级别的配置

  return <Component { ...pageProps } />;
}

export default _App;
