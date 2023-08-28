import React from "react";
import Header from "@/layout/header.tsx";
import { Col, Row } from "antd";
import Footer from "@/layout/footer.tsx";
import { Props } from "@/types/layout.ts";
import Head from "next/head";

const Layout: React.FC<Props> = ({ children, showFooter = true }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/title.ico" />
        <title>Su Mingcheng&apos;s Blog</title>
        <meta name="description" content="SuMingcheng" />
      </Head>
      <div className={`flex flex-col min-h-screen`}>
        {/*顶部*/}
        <Header></Header>
        {/*内容*/}
        <Row className="flex-grow relative">
          <div className={`w-4/5 mx-auto`}>{children}</div>
        </Row>
        {/*底部*/}
        {showFooter && ( // 添加这一行
          <Row className="flex-none">
            <Col span={24}>
              <Footer />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default Layout;
