import Layout from "@/layout";
import React from 'react';
import Typed from 'typed.js';
import SuCard from "@/components/SuCard";

function IndexPage () {
  const playText = "Growth is not always a smooth journey, but every step is worth documenting. In this blog, I will share my explorations and discoveries in both personal and professional life."
  const el = React.useRef(null);

  const SuCardArr = [{
    title: 'ChatGPT',
    url: '',
    description: 'ChatGPT is a chatbot based on GPT-3',
  }, {
    title: 'Nextcloud',
    url: '',
    description: 'Nextcloud is a suite of client-server software for creating and using file hosting services',
  }, {
    title: 'NPM',
    url: '',
    description: 'NPM is a package manager for the JavaScript programming language',
  }, {
    title: 'ChatGPT',
    url: '',
    description: 'ChatGPT is a chatbot based on GPT-3',
  }]

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [playText],
      typeSpeed: 60, // 打字速度
      backSpeed: 30, // 删除速度
      loop: false // 不循环
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <Layout>
        {/*打字机*/}
        <div className={`w-1/2 mx-auto mt-10 text-4xl indent-4 leading-normal h-64`}>
          <span ref={el}/>
        </div>
        {/*card*/}
        <div className={`w-full flex justify-between`}>
          {SuCardArr.map(elem => {
            return <SuCard title={elem.title} description={elem.description} url={elem.url}/>
          })}
        </div>
      </Layout>
  )
}

export default IndexPage
