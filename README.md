## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### PM2

```bash
    pm2 start pm2.json ; 启动 pm2.json 配置文件中的应用程序
    pm2 start npm --name "next" -- run start --watch ; 启动 npm run start命令
    pm2 stop app ; 停止应用程序
    pm2 restart app ; 重启应用程序
    pm2 delete app ; 删除应用程序
    pm2 list ; 列出当前正在运行的应用程序
    pm2 logs ; 查看应用程序的日志
    pm2 monit ; 监视应用程序的 CPU 内存和网络等信息
    pm2 reload all ; 重新加载所有应用程序
    pm2 show app ; 显示应用程序的所有信息
```

### nginx

打开 Nginx 的默认配置文件，通常位于 /etc/nginx/sites-available/default 或 /etc/nginx/nginx.conf，具体位置取决于你的操作系统和
Nginx 安装方式。

在配置文件中找到默认 server 块。该块通常包含以下内容：

```
    server {
        listen 80 default_server;
        listen [::]:80 default_server;
    
        # Other configuration options
        ...
    }

```

在 server 块中添加以下配置，将请求代理到 Next.js 项目的端口（假设 Next.js 项目运行在本地的 3000 端口）：

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Other configuration options
    ...
}
```

重启服务 sudo service nginx restart

### _app.js

1. 全局样式：在 Next.js 中，全局 CSS 只能在 _app.js 文件中导入，而不能在其他任何地方导入。这可以确保全局样式只加载一次，而不是在每个页面加载。
3. 页面初始属性：如果你需要在页面初始加载时获取数据，你可以在 _app.js 中使用 getInitialProps
   方法。这是一个异步方法，它可以从服务器端或客户端获取数据，这取决于哪个先发生。
5. 状态持久化：如果你使用 Redux 或者其他任何状态管理库，你可能需要在 _app.js 中设置 Provider，以便在所有页面之间共享状态。
7. 布局组件：如果你有一些布局组件，比如导航栏或页脚，在每个页面都需要出现，你可以在 _app.js 中添加这些组件。

# 项目模块

- 管理员模块
  - 实现权限管理，能够对其他模块进行增删改查权限
  - 登录注册模块，登录管理后台
  - 实现在前台博客网站中登录注册
- 文章模块
  - 实现文章的新增，修改，删除，查询
  - 文章进行对分类，评论，回复关联
- 分类模块
  - 实现分类的新增，修改，删除，查询
  - 实现分类与文章进行关联
- 评论 / 回复模块 /留言版
  - 实现评论 / 回复的新增，修改，删除，查询
  - 实现评论 / 回复与文章进行关联

