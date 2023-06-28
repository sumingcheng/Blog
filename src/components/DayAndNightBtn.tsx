import S from '@/assets/scss/dayAndNightBtn.module.scss'
import {useState} from "react";

const DayAndNightBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const onclick = () => {
    setIsActive(!isActive);
  }

  return (
      <div className={`${S.btnMain}`}>
        <div className={`${S.btnStyle} ${isActive ? S.active : ''}`} onClick={onclick}></div>
      </div>
  )
}

export default DayAndNightBtn
