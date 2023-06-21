import React from "react";
import Header from "@/layout/header";
import {Col, Row} from 'antd';
import Footer from "@/layout/footer";
import {Props} from "@/types/layout";

const Layout: React.FC<Props> = ({children}) => {
  return (
      <>
        <div className="flex flex-col min-h-screen">
          {/*顶部*/}
          <Row className="flex-none">
            <Col span={24}><Header></Header></Col>
          </Row>
          {/*内容*/}
          <Row className="flex-grow">
            <Col span={2}></Col>
            <Col span={20}>
              {children}
            </Col>
            <Col span={2}></Col>
          </Row>
          {/*底部*/}
          <Row className="flex-none">
            <Col span={24}>
              <Footer/>
            </Col>
          </Row>
        </div>
      </>
  )
}

export default Layout
