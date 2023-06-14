import {Button} from 'antd'
import {useRouter} from 'next/router'
import Layout from "@/layout";



function HomePage() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about')
  }

  return (
      <>
        <Layout></Layout>
      </>
  )
}

export default HomePage
