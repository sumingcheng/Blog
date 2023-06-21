import Layout from "@/layout";
import React from 'react';
import Typed from 'typed.js';

function IndexPage () {
  const playText = "Growth is not always a smooth journey, but every step is worth documenting. In this blog, I will share my explorations and discoveries in both personal and professional life."
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [playText],
      typeSpeed: 50, // 打字速度
      backSpeed: 30, // 删除速度
      loop: false // 不循环
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <Layout>
        <div className={`w-1/2 mx-auto mt-10 text-4xl indent-4 leading-10`}>
          <span ref={el}/>
        </div>
      </Layout>
  )
}

export default IndexPage
