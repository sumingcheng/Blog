import {BugFilled, ClockCircleFilled, HeartFilled, MessageFilled} from "@ant-design/icons";
import S from '@/assets/scss/layout.module.scss';

const Footer = () => {

  const onAnt = () => {
    window.open('https://ant.design/index-cn', '_blank')
  }

  return (
      <footer className={`w-full h-24 text-black text-center py-4 ${S.footer}`}>
        <div className={`flex justify-center items-center my-2 ${S.footerIcon}`}>
          <div>
            <MessageFilled/>
            <span>讨论区</span>
          </div>
          <div>
            <BugFilled/>
            <span>报告Bug</span>
          </div>
          <div>
            <ClockCircleFilled/>
            <span>更新日志</span>
          </div>
          <div onClick={onAnt}>
            <HeartFilled style={{color: "red"}}/>
            <span>Ant Design</span>
          </div>
        </div>
        <div className={`my-2`}>© 2022 - 京ICP备2022029426号-1</div>
      </footer>
  )
}

export default Footer;
