# 图床应用

[English README](./README.md)

## 🌟 项目亮点

- 🚀 基于 Next.js 13 和 App Router 构建的现代化 Web 应用
- 🗃️ 使用 Supabase 实现安全可靠的图片存储
- 🎨 采用 Tailwind CSS 和 Shadcn UI 组件库,实现美观且响应式的界面设计
- 📱 移动优先的设计理念,确保在各种设备上的最佳体验
- 🔒 内置图片上传安全措施,防止恶意文件上传
- 🔗 一键复制图片链接,方便分享和使用

## 📝 项目简介

这是一个基于 Next.js 13 和 Supabase 构建的现代化图床应用。用户可以轻松上传图片,系统自动生成可访问的链接。界面简洁直观,支持图片预览和一键复制链接功能。采用 Tailwind CSS 和 Shadcn UI 组件,确保了良好的用户体验和响应式设计。

### 主要功能:
1. 图片上传与存储
2. 图片列表展示
3. 图片链接一键复制
4. 响应式设计,适配多种设备

## 🛠️ 技术栈

- Next.js 13 (App Router)
- React
- TypeScript
- Supabase
- Tailwind CSS
- Shadcn UI

## 🚀 快速开始

1. 克隆仓库
   ```bash
   git clone https://github.com/your-username/image-hosting-app.git
   ```

2. 安装依赖
   ```bash
   cd image-hosting-app
   npm install
   ```

3. 设置环境变量
   创建 `.env.local` 文件并添加以下 Supabase 配置:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. 运行开发服务器
   ```bash
   npm run dev
   ```

访问 [http://localhost:3000](http://localhost:3000) 查看应用

## 📁 项目结构

- `app/`: Next.js 13 App Router 目录
  - `layout.tsx`: 应用布局组件
  - `page.tsx`: 主页面组件
- `components/`: React 组件
  - `image-uploader.tsx`: 图片上传组件
  - `image-list.tsx`: 图片列表展示组件
  - `ui/`: UI 组件 (来自 Shadcn UI)
- `lib/`: 工具函数和配置
  - `supabase-client.ts`: Supabase 客户端配置
- `public/`: 静态资源

## 🖥️ 主要组件

### ImageUploader

图片上传组件允许用户选择并上传图片文件。

主要功能:
- 文件选择
- 图片上传到 Supabase 存储
- 上传状态管理
- 成功/失败提示

### ImageList

图片列表组件展示所有已上传的图片。

主要功能:
- 从 Supabase 获取图片列表
- 展示图片缩略图
- 提供复制图片 URL 的功能

## 📝 注意事项

- 确保 Supabase 项目中已创建名为 "images" 的存储桶
- 图片上传大小可能受到 Supabase 存储限制的影响
- 在 `next.config.js` 中配置了 Supabase 域名,以支持图片优化

## 📄 许可证

MIT
