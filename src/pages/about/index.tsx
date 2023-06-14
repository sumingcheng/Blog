import Link from 'next/link';
import {Button} from 'antd';
import {AboutStyle} from '@/styles/PageStyled.jsx';

function About() {
  return (
      <>
        <AboutStyle></AboutStyle>
        <div className="font-red">关于</div>
        <Button>
          <Link href="/">返回首页</Link>
        </Button>
      </>
  )
}

export default About
