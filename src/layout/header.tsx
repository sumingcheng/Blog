import React, { useContext, useState } from 'react';
import { AppstoreFilled, CloudFilled, CodeSandboxSquareFilled, GithubFilled, HomeFilled, RobotFilled, YuqueFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Col, Input, Menu, Row } from 'antd';
import Image from 'next/image';
import headerImage from '@/assets/icons/header.jpg'
import { useRouter } from "next/router";
import { ThemeContext } from "@/context";
import DayAndNightBtn from "@/components/dayAndNightBtn.tsx";
import S from '@/assets/scss/layout.module.scss'

const Header: React.FC = () => {
  const [ current, setCurrent ] = useState('mail');
  const { theme, setTheme } = useContext(ThemeContext);

  const router = useRouter()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const goIndex = () => {
    router.push('/')
  }

  // 快速搜索
  const focusInput = () => {
    console.log('focusInput');
  }

  // 夜晚模式
  const nightMode = (e: any) => {
    e.preventDefault();
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }


  const items: MenuProps['items'] = [
    {
      label: (
          <a onClick={goIndex} className={`font-bold`}>首页</a>
      ),
      key: '1',
      icon: <HomeFilled style={{ color: "#fdd663" }}/>,
    },
    {
      label: (
          <a className={`font-bold`}>应用</a>
      ),
      key: '2',
      icon: <AppstoreFilled style={{ color: "#1677ff" }}/>,
      children: [
        {
          type: 'group',
          label: '私人服务',
          children: [
            {
              label: (
                  <a className={`font-bold`} href="https://sumingcheng.github.io/Vue3-TS-ChatGPT/#/" target="_blank"
                      rel="noopener noreferrer">ChatGPT</a>
              ),
              key: 'ChatGPT',
              icon: <RobotFilled/>,
            },
            {
              label: 'Nextcloud',
              key: 'Nextcloud',
              icon: <CloudFilled/>,
            },
            {
              label: 'NPM',
              key: 'NPM',
              icon: <CodeSandboxSquareFilled/>,
            },
          ],
        },
      ],
    },
    {
      label: (
          <a className={`font-bold`} href="https://www.yuque.com/sumingcheng" target="_blank"
              rel="noopener noreferrer">博客</a>
      ),
      key: '3',
      icon: <YuqueFilled style={{ color: "#47c870" }}/>,
    },
    {
      label: (
          <a className={`font-bold`} href="https://github.com/sumingcheng?tab=stars" target="_blank"
              rel="noopener noreferrer">GitHub</a>
      ),
      key: '4',
      icon: <GithubFilled/>,
    },
  ];
  return (
      <>
        <Row className={`h-16 ${S.transitionBg} ${S.headerRow} ${theme === "dark" ? S.headerNight : 'bg-white'}`}>
          <Col span={4}>
            <div className="mt-4 ml-6 flex items-center cursor-pointer" onClick={goIndex}>
              <Image src={headerImage} alt="header" className="w-6 h-6"/>
              <div
                  className={`font-bold truncate ml-4 text-xl ${theme === "dark" ? 'text-white' : ''}`}>SuMingcheng Blog
              </div>
            </div>
          </Col>
          <Col span={5}></Col>
          <Col span={4} className="relative">
            <div className="absolute -top-3 right-0" onClick={nightMode}>
              <DayAndNightBtn/>
            </div>
          </Col>
          <Col span={3}>
            <Input className={`mt-4 ${theme === "dark" ? S.headerInput : ''}`} addonAfter="Ctrl+K"
                placeholder={'Quick search...'} onFocus={focusInput}/>
          </Col>
          <Col span={8}>
            <Menu className={`mr-6 p-2 w-full border-none ${S.transitionBg}`} onClick={onClick} selectedKeys={[ current ]} mode="horizontal"
                items={items}
                style={{ justifyContent: "flex-end" }} theme={theme}/>
          </Col>
        </Row>
      </>
  )
};

export default Header;
