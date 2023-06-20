import Link from 'next/link';
import {Button} from 'antd';
import Layout from '@/layout/index';

function About () {
  return (
      <Layout>
        <Button>
          <Link href="/">返回首页</Link>
        </Button>
      </Layout>
  )
}

export default About
