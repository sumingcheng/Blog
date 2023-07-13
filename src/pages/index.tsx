import Layout from "@/layout";
import React, {useRef} from 'react';
import Typed from 'typed.js';
import SuCard from "@/components/SuCard";
import BackgroundCloth from "@/components/BackgroundCloth";
import {Button} from "antd";
import S from '@/assets/scss/index.module.scss'
import {useRouter} from 'next/router'
import ThreeScene from "@/animation";

function IndexPage() {
  const playText = "Growth is not always a smooth journey, but every step is worth documenting. In this blog, I will share my explorations and discoveries in both personal and professional life.😊"
  const el = React.useRef(null);
  const router = useRouter()
  const domElementRef = useRef(null);

  const SuCardArr = [{
    id: "1",
    title: 'ChatGPT',
    url: '',
    description: 'Chat GPT service that does not need to worry about IP issues',
    time: '2023年6月21日 12:11:58'
  }, {
    id: "2",
    title: 'Nextcloud',
    url: '',
    description: 'privateCloudDisk',
    time: '2023年6月21日 12:11:58'
  }, {
    id: "3",
    title: 'NPM',
    url: '',
    description: 'private NPM Repository',
    time: '2023年6月21日 12:11:58'
  }, {
    id: "4",
    title: 'ChatRoom',
    url: '',
    description: 'Vue3+TS online chat room, using express in the background',
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

  const seeMore = () => {
    router.push('/more')
  }

  return (
      <Layout>
        {/*打字机*/}
        <BackgroundCloth>
          <div className={`${S.lineClamp} w-2/3 mx-auto text-4xl indent-4 leading-normal text-white font-bold`}>
            <span ref={el}/>
          </div>
        </BackgroundCloth>
        {/*中间文字*/}
        <div className={`mx-auto text-5xl font-bold w-full h-56`} ref={domElementRef}>
          <ThreeScene domElementRef={domElementRef}></ThreeScene>
        </div>
        <div className={`${S.buttonGrid} text-center mt-6`}>
          <Button size={"large"}>Search</Button>
          <Button size={"large"} type={"primary"} onClick={seeMore}>More</Button>
        </div>
        {/*Card*/}
        <div className={`w-full flex justify-around mt-10 mb-4`}>
          {SuCardArr.map(elem => {
            return <SuCard title={elem.title} description={elem.description} url={elem.url} time={elem.time} key={elem.id}/>
          })}
        </div>
      </Layout>
  )
}

export default IndexPage
