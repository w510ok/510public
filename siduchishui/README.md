# 四渡赤水战役关键决策沙盘推演（HTML + PWA）

© 2026 江南AI工作小组。保留署名、版本痕迹与资料来源。

## 本修复版重点

- 增加 `meta referrer=origin-when-cross-origin`，便于百度地图按当前域名进行 Referer 白名单校验。
- 增加 `robots noindex` 与知识产权提示，降低公开 GitHub Pages 被搜索引擎收录的概率。
- 强化 GitHub Pages 项目路径适配：`manifest` 使用相对路径，`service worker` 使用 `scope: ./`。
- 百度地图 AK 不写入源码，只在浏览器本地 `localStorage` 保存。
- 增加 `NOTICE.md`、`LICENSE-内部使用声明.md` 与 `.nojekyll`。

## 文件说明

- `index.html`：主程序。内置示意地图、时间线、关键决策、推演器、依据与校核、GitHub Pages/PWA/百度地图排错模块。
- `manifest.webmanifest`：PWA 配置，已使用相对路径，适配 GitHub Pages 项目站点。
- `service-worker.js`：离线缓存脚本，第三方百度地图脚本不做缓存。
- `assets/icon-192.png`、`assets/icon-512.png`：PWA 图标。
- `DEPLOY_GITHUB_PAGES.md`：GitHub Pages 部署与百度地图排错说明。
- `IP_NOTICE.md`：知识产权与使用声明。
- `.nojekyll`：避免 GitHub Pages 的 Jekyll 处理干扰静态文件。

## 打开方式

### 本地测试

```bash
python -m http.server 8000
```

然后打开：

```text
http://localhost:8000/index.html
```

### GitHub Pages 部署

把本文件夹内容上传到 GitHub 仓库根目录，在 `Settings → Pages` 启用发布。项目站点通常为：

```text
https://<账号>.github.io/<仓库名>/index.html
```

## 百度地图接入

1. 到百度地图开放平台申请 Web 端 JavaScript API AK，AK 类型必须为“浏览器端”。
2. 在百度控制台配置 Referer 白名单，GitHub Pages 建议填 `<账号>.github.io` 或自定义域名，不要只填 `/仓库名/` 路径。
3. 打开本沙盘，点击“百度地图图层”。
4. 输入 AK 并点击“加载百度地图”。AK 仅保存在浏览器本地 `localStorage`，不会写入文件或上传。
5. 若地图无法显示，点击页面中的“检测部署环境”，核对 hostname、HTTPS、Service Worker、AK 保存状态。

## GitHub Pages 上百度地图仍无法显示时

优先排查：

- AK 是否为“浏览器端”；
- 百度 Referer 白名单是否包含当前页面的 hostname，例如 `<账号>.github.io`；
- PWA 是否缓存旧版本，必要时取消注册 service worker 后刷新；
- 浏览器是否能访问 `https://api.map.baidu.com/`；
- 浏览器控制台是否出现百度 JSAPI 鉴权错误。

## 精度说明

本沙盘使用教学级近似坐标，适合课堂推演、管理复盘和研学准备；不适合作为测绘、导航或正式出版地图。正式使用前建议复核：

- 四渡赤水纪念馆馆藏战役要图；
- 地方志、文保点位与纪念碑现场坐标；
- 中央军委电文、亲历者日记和战役回忆录；
- 现代 GIS、百度地图/天地图/自然资源数据。

## 主要资料依据

- 四渡赤水纪念馆官网：“青杠坡战斗拉开‘四渡赤水’序幕”。
- 四渡赤水纪念馆官网：“遵义战役：在战略转移中打好进攻仗”。
- 四渡赤水纪念馆官网：“‘四渡赤水’的强军启示”。
- 四渡赤水纪念馆官网：《四渡赤水战役亲历记》目录。
- 红军四渡赤水战役旧址公开资料。
- 赤水市自然地理公开资料。
- 百度地图开放平台 JSAPI GL 文档。



## V4 地图嵌入合规版更新

- 新增“内置原创地形图”按钮：使用 `assets/original-terrain.svg`，可离线、可PWA、可GitHub Pages部署。
- 新增“Google地形图”按钮：通过 Google Maps Static API 在线加载，不缓存、不打包第三方地图内容。
- 保留百度地图在线图层：仍需浏览器端AK与Referer白名单。
- 新增 `MAP_LICENSE_NOTE.md`：说明为什么不把百度/Google地图截图内置到公开PWA中。
