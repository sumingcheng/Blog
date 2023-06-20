import Link from 'next/link';
import {Button} from 'antd';

function About() {
  return (
      <>
        <div className="font-red">关于</div>
        <Button>
          <Link href="/">返回首页</Link>
        </Button>
      </>
  )
}

export default About
