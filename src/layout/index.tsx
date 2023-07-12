import React from "react";
import Header from "@/layout/header.tsx"
import {Col, Row} from 'antd';
import Footer from "@/layout/footer.tsx"
import {Props} from "@/types/layout.ts";

const Layout: React.FC<Props> = ({children, showFooter = true}) => {
  return (
      <>
        <div className={`flex flex-col min-h-screen`}>
          {/*顶部*/}
          <Header></Header>
          {/*内容*/}
          <Row className="flex-grow relative">
            <Col span={2}></Col>
            <Col span={20}>
              {children}
            </Col>
            <Col span={2}></Col>
          </Row>
          {/*底部*/}
          {showFooter && ( // 添加这一行
              <Row className="flex-none">
                <Col span={24}>
                  <Footer/>
                </Col>
              </Row>
          )}
        </div>
      </>
  )
}

export default Layout
