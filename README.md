## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## 博客功能
1. 首页、笔记、搜索、友链
2. 笔记是按照时间进行展示、可以ctrl+k进行搜索

### PM2

```bash
    pm2 start pm2.json ; 启动pm2.json配置文件中的应用程序
    pm2 start npm --name "next" -- run start --watch ; 启动npm run start命令
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
打开 Nginx 的默认配置文件，通常位于 /etc/nginx/sites-available/default 或 /etc/nginx/nginx.conf，具体位置取决于你的操作系统和 Nginx 安装方式。

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
