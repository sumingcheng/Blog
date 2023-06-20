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

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '1',
    icon: <HomeFilled/>,
  },
  {
    label: '应用',
    key: '2',
    icon: <AppstoreFilled/>,
    children: [
      {
        type: 'group',
        children: [
          {
            label: 'ChatGPT',
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
    icon: <YuqueFilled/>,
  },
  {
    label: (
        <a href="https://github.com/sumingcheng?tab=stars" target="_blank" rel="noopener noreferrer">GitHub</a>
    ),
    key: '4',
    icon: <GithubFilled/>,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <>
    <div className="absolute top-3 left-4">
      <img src="" alt="header"/>
    </div>
    <Menu className="mr-4" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
          style={{justifyContent: "flex-end"}} theme="light"/>
  </>
};

export default Header;
