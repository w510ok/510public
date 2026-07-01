# GitHub Pages 部署与百度地图排错说明

## 一、部署方式

1. 新建 GitHub 仓库，例如 `sidu-chishui-sandbox`。
2. 把本文件夹内全部文件上传到仓库根目录，建议保留 `.nojekyll`。
3. 在 GitHub 仓库 `Settings → Pages` 中选择发布源，例如 `Deploy from a branch / main / root`。
4. 发布后访问：

```text
https://<账号>.github.io/<仓库名>/index.html
```

GitHub Pages 是静态站点托管，适合放 HTML、CSS、JavaScript、图标、manifest、service worker；但不能运行后端代理。

## 二、PWA 安装注意

- GitHub Pages 默认使用 HTTPS，符合 PWA 的安全上下文要求。
- 本版 manifest 使用相对路径：`start_url: ./index.html`、`scope: ./`，适配项目站点 `/仓库名/`。
- 若更新后仍显示旧页面，说明 service worker 缓存未刷新。处理方法：浏览器开发者工具 `Application → Service Workers → Unregister`，然后强制刷新并重新安装。

## 三、百度地图无法加载的高频原因

### 1. AK 类型错误

百度 JSAPI GL 应使用“浏览器端”AK。不要使用服务端、Android、iOS 类型 AK。

### 2. Referer 白名单未匹配 GitHub Pages 域名

GitHub Pages 项目站点通常是：

```text
https://<账号>.github.io/<仓库名>/
```

浏览器跨域请求百度脚本时，Referer/来源通常按 origin 识别。百度控制台建议把：

```text
<账号>.github.io
```

加入浏览器端 AK 的 Referer 白名单。若使用自定义域名，则加入自定义域名。

不要只填写 `/仓库名/` 这样的路径；很多鉴权场景只看域名或 origin。

### 3. 不要把 AK 写死进公开仓库

浏览器端 AK 无法真正保密；公开仓库中写死 AK 会被复制。更稳妥方式：

- 页面运行时由使用者输入 AK；
- AK 仅保存在本机浏览器 `localStorage`；
- 百度控制台配置 Referer 白名单和用量限制；
- 若必须隐藏 AK，需要自有服务器或 Nginx 反向代理，GitHub Pages 静态站点做不到。

### 4. 旧 PWA 缓存

更新代码后，PWA 桌面图标打开的可能仍是旧 service worker 缓存。清理后重新打开。

### 5. 网络或浏览器限制

百度地图真实底图依赖在线脚本和瓦片，离线状态或网络阻断时无法加载。内置 SVG 示意地图不受影响。

## 四、上线前检查清单

- [ ] `index.html`、`manifest.webmanifest`、`service-worker.js` 均在仓库根目录。
- [ ] GitHub Pages URL 可以正常打开。
- [ ] 浏览器地址栏是 HTTPS。
- [ ] 百度 AK 为浏览器端。
- [ ] 百度 Referer 白名单包含 `<账号>.github.io` 或自定义域名。
- [ ] 页面中“检测部署环境”显示的 hostname 与百度白名单一致。
- [ ] 更新后已清理旧 service worker 缓存。

