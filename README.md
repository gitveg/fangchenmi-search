# 防沉迷搜索直达

> 专注搜索，远离沉迷 —— 一键直达小红书、抖音、B站等平台的定向搜索工具

## 项目简介

本项目旨在帮助用户高效、专注地在热门内容平台（如小红书、抖音、B站）进行定向搜索，避免被首页推荐内容分散注意力、陷入刷短视频等沉迷行为。输入关键词后，自动生成目标平台的搜索链接并新开页面直达搜索结果。

## 功能特性
- 支持小红书、抖音、B站三大平台的定向搜索
- 关键词自动URL编码，保证搜索准确
- 简洁美观的用户界面，极易上手
- 一键直达目标平台搜索结果，减少沉迷风险

## 技术栈
- 前端框架：React 18
- 构建工具：Vite
- 样式：Tailwind CSS
- 纯前端实现，无需后端

## 目录结构
```
fangchenmi-search/
├─ index.html                # 主HTML文件
├─ package.json              # 项目依赖与脚本
├─ vite.config.js            # Vite配置
├─ tailwind.config.js        # Tailwind CSS配置
├─ postcss.config.js         # PostCSS配置
└─ src/
   ├─ main.jsx               # React入口
   ├─ App.jsx                # 主界面组件
   └─ index.css              # 全局样式（Tailwind入口）
```

## 安装与使用

1. **克隆项目**
   ```sh
   git clone <你的仓库地址>
   cd fangchenmi-search
   ```
2. **安装依赖**
   ```sh
   npm install
   ```
3. **本地开发启动**
   ```sh
   npm run dev
   ```
   启动后访问终端输出的本地地址（如 http://localhost:5173 ），即可使用。

## 如何使用
1. 选择目标平台（小红书/抖音/B站）
2. 输入你要查找的关键词
3. 点击“一键直达”，自动新开目标平台的搜索结果页面

## 扩展建议
- 支持更多平台（如知乎、微博等）
- 增加历史搜索记录
- 增加防沉迷提醒/统计功能
- 支持PWA，移动端适配

## License
MIT

--- 

**上述内容基本由Cursor编写，仅供参考。**