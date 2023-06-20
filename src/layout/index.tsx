import React, {ReactNode} from "react";
import Header from "@/layout/header";
import {Col, Row} from 'antd';
import Footer from "@/layout/footer";

interface Props {
  children: ReactNode;  // 指定children属性
}

const Layout: React.FC<Props> = ({children}) => {
  return (
      <>
        {/*顶部*/}
        <Row>
          <Col span={24}><Header></Header></Col>
        </Row>
        {/*内容*/}
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            {children}
          </Col>
          <Col span={2}></Col>
        </Row>
        {/*底部*/}
        <Row>
          <Col span={24}>
            <Footer/>
          </Col>
        </Row>
      </>
  )
}

export default Layout
