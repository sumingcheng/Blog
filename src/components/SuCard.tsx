import React from 'react';
import {Card} from 'antd';
import {SuCardProps} from "@/types/components";
import S from '@/assets/scss/components.module.scss'
import {ArrowRightOutlined} from "@ant-design/icons";

const SuCard: React.FC<SuCardProps> = ({title, description, url, time}) => {
  const nextUrl = () => {
    window.open(url)
  }

  return (
      <Card className={`w-1/5  ${S.card} relative`} hoverable={true} onClick={nextUrl}>
        <div className={`title text-2xl font-bold`}>
          {title} <ArrowRightOutlined className={`ml-4 font-bold ${S.icon}`}/>
        </div>
        <div className={`description mb-6`}>{description}</div>
        <div className={`absolute left-6 bottom-4 font-bold`}>{time}</div>
      </Card>
  )
}

export default SuCard;
