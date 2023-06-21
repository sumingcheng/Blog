import React from 'react';
import {Card} from 'antd';
import {SuCardProps} from "@/types/components";
import S from '@/assets/scss/components.module.scss'
import {ArrowRightOutlined} from "@ant-design/icons";

const SuCard: React.FC<SuCardProps> = ({title, description, url}) => {
  const nextUrl = () => {
    window.open(url)
  }

  return (
      <Card className={`w-1/5  ${S.card}`} hoverable={true} onClick={nextUrl}>
        <div className={`title text-2xl font-bold`}>
          {title} <ArrowRightOutlined className={`ml-6 font-bold`}/>
        </div>
        <div className={`description `}>{description}</div>
      </Card>
  )
}

export default SuCard;
