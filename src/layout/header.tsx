import React, {useState} from 'react';
import {
  AppstoreFilled,
  CloudFilled,
  CodeSandboxSquareFilled,
  GithubFilled,
  HomeFilled,
  RobotFilled,
  YuqueFilled
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import Image from 'next/image';
import headerImage from '@/assets/icons/header.jpg'
import {useRouter} from "next/router";


const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const router = useRouter()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const goIndex = () => {
    router.push('/')
  }

  const items: MenuProps['items'] = [
    {
      label: (
          <a onClick={goIndex}>首页</a>
      ),
      key: '1',
      icon: <HomeFilled style={{color: "#fdd663"}}/>,
    },
    {
      label: '应用',
      key: '2',
      icon: <AppstoreFilled style={{color: "#1677ff"}}/>,
      children: [
        {
          type: 'group',
          label: '服务',
          children: [
            {
              label: (
                  <a href="https://sumingcheng.github.io/Vue3-TS-ChatGPT/#/" target="_blank"
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
          <a href="https://www.yuque.com/sumingcheng" target="_blank" rel="noopener noreferrer">博客</a>
      ),
      key: '3',
      icon: <YuqueFilled style={{color: "#47c870"}}/>,
    },
    {
      label: (
          <a href="https://github.com/sumingcheng?tab=stars" target="_blank" rel="noopener noreferrer">GitHub</a>
      ),
      key: '4',
      icon: <GithubFilled/>,
    },
  ];
  return <>
    <div className="absolute top-4 left-6 flex items-center cursor-pointer" onClick={goIndex}>
      <Image src={headerImage} alt="header" className="w-6 h-6"/>
      <div className="font-bold ml-4">SuMingcheng Blog</div>
    </div>
    <Menu className="mr-6 p-2" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
          style={{justifyContent: "flex-end"}} theme="light"/>
  </>
};

export default Header;
