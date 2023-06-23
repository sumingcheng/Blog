import S from '@/assets/scss/components.module.scss'
import React from "react";
import { Props } from "@/types/layout.ts";

const BackgroundCloth: React.FC<Props> = ({ children }) => {

  return (
      <div className={`${S.BackgroundCloth} w-full h-72`}>
        {children}
      </div>
  )
}

export default BackgroundCloth;
