import BtnStyle from '@/assets/scss/dayAndNightBtn.module.scss'
import {useContext, useState} from "react";
import {ThemeContext} from "@/context";

const DayAndNightBtn = () => {
  const [isActive, setIsActive] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const onclick = (event: any) => {
    event.stopPropagation();
    setIsActive(!isActive);
    nightMode(event);
  }

  // 夜晚模式
  const nightMode = (e: any) => {
    e.preventDefault();
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  return (
      <div className={`${BtnStyle.btnMain}`}>
        <div className={`${BtnStyle.btnStyle} ${isActive ? BtnStyle.active : ''}`} onClick={onclick}></div>
      </div>
  )
}

export default DayAndNightBtn
