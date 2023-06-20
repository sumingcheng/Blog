import React from "react";
import Header from "@/layout/header";
import {Col, Row} from 'antd';


const Layout: React.FC = () => {
  return (
      <>
        {/*顶部*/}
        <Row>
          <Col span={24}><Header></Header></Col>
        </Row>
        {/*内容*/}
        <Row>
          <Col span={2}>col-2</Col>
          <Col span={20}>col-20</Col>
          <Col span={2}>col-2</Col>
        </Row>
        {/*底部*/}
        <Row>
          <Col span={2}></Col>
          <Col span={20}>col-20</Col>
          <Col span={2}></Col>
        </Row>
      </>
  )
}

export default Layout
