import {BugFilled, ClockCircleFilled, MessageFilled} from "@ant-design/icons";
import S from '@/assets/scss/footerIcon.module.scss';

const Footer = () => {
  return (
      <footer className="w-full h-32 text-black text-center py-4">
        <div className={`flex justify-center items-center my-3 ${S.footerIcon}`}>
          <div><MessageFilled/>
            <span>讨论区</span>
          </div>
          <div><BugFilled/>
            <span>报告Bug</span>
          </div>
          <div><ClockCircleFilled/>
            <span>更新日志</span>
          </div>
        </div>
        <div>© 2022 - 京ICP备2022029426号-1</div>
      </footer>
  )
}

export default Footer;
