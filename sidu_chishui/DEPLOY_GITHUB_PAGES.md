# GitHub Pages 部署说明

## 目录结构

请保持以下结构：

```text
index.html
manifest.webmanifest
service-worker.js
.nojekyll
README.md
MAP_SOURCE_NOTE.md
IP_NOTICE.md
DEPLOY_GITHUB_PAGES.md
assets/
  app.js
  styles.css
  icon-192.png
  icon-512.png
  maps/
    four-map-wall.jpg
    terrain-wide.jpg
    terrain-core.jpg
    campaign-official.jpg
    original-terrain.svg
    original-terrain.png
```

## 部署步骤

1. 新建 GitHub 仓库，建议私有仓库或组织内受控仓库。
2. 上传本目录全部文件到仓库根目录。
3. 在 Settings → Pages 中选择 Deploy from branch。
4. Branch 选择 `main`，目录选择 `/root`。
5. 等待 Pages 发布完成。
6. 使用 `https://<账号>.github.io/<仓库名>/index.html` 访问。

## PWA缓存刷新

如果更新后仍显示旧版本：

- Chrome/Edge：开发者工具 → Application → Service Workers → Unregister；
- 清除站点数据；
- 重新访问页面并刷新；
- 手机端删除旧桌面图标后重新添加。

## 本版特点

本版不使用百度地图或 Google 地图，因此无需 AK/API Key，也不受地图脚本加载失败影响。所有图层均在 `assets/maps/` 中，PWA 可缓存离线使用。
