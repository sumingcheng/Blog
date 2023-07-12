import Layout from "@/layout";
import React from 'react';
import Typed from 'typed.js';
import SuCard from "@/components/SuCard";
import BackgroundCloth from "@/components/BackgroundCloth";
import {Button} from "antd";
import S from '@/assets/scss/index.module.scss'

function IndexPage() {
  const playText = "Growth is not always a smooth journey, but every step is worth documenting. In this blog, I will share my explorations and discoveries in both personal and professional life.😊"
  const el = React.useRef(null);

  const SuCardArr = [{
    id: "1",
    title: 'ChatGPT',
    url: '',
    description: 'ChatGPT is a chatbot based on GPT-3',
    time: '2023年6月21日 12:11:58'
  }, {
    id: "2",
    title: 'Nextcloud',
    url: '',
    description: 'Nextcloud is a suite of client-server software for creating and using file hosting services',
    time: '2023年6月21日 12:11:58'
  }, {
    id: "3",
    title: 'NPM',
    url: '',
    description: 'NPM is a package manager for the JavaScript programming language',
    time: '2023年6月21日 12:11:58'
  }, {
    id: "4",
    title: 'ChatGPT',
    url: '',
    description: 'ChatGPT is a chatbot based on GPT-3',
    time: '2023年6月21日 12:11:58'
  }]

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [playText],
      typeSpeed: 10, // 打字速度
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
        <BackgroundCloth>
          <div className={`${S.lineClamp} w-2/3 mx-auto text-4xl indent-4 leading-normal text-white font-bold`}>
            <span ref={el}/>
          </div>
        </BackgroundCloth>
        {/*中间文字*/}
        <div className={`text-center my-16 text-5xl font-bold`}>SuMingcheng Blog</div>
        <div className={`${S.buttonGrid} text-center  `}>
          <Button size={"large"}>Search</Button>
          <Button size={"large"}>More</Button>
          <Button size={"large"}>SoftwareRepository</Button>
        </div>
        {/*card*/}
        <div className={`w-full flex justify-around mt-16 mb-4`}>
          {SuCardArr.map(elem => {
            return <SuCard title={elem.title} description={elem.description} url={elem.url} time={elem.time}
                           key={elem.id}/>
          })}
        </div>
      </Layout>
  )
}

export default IndexPage
