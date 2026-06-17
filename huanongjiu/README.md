# 扶阳化脓灸：理论到实践转化工具包 PWA

## 定位
本工具用于化脓灸/瘢痕灸的理论学习、风险筛查、临床质控和随访记录，不是家庭自行操作指南。

## 文件
- `index.html`：PWA主入口，可直接打开阅读；部署到本地/服务器后支持离线缓存。
- `manifest.webmanifest`：PWA安装配置。
- `sw.js`：Service Worker 离线缓存脚本。
- `assets/icon-192.png`、`assets/icon-512.png`：应用图标。
- `source_notes.json`：资料来源和证据使用说明。

## 本地预览
在该目录运行：

```bash
python3 -m http.server 8000
```

浏览器打开 `http://localhost:8000`，可测试PWA安装和离线缓存。直接双击 `index.html` 也可阅读，但部分浏览器不会启用Service Worker。

## 医疗安全声明
化脓灸属于有创外治法，可能造成烧伤、感染、瘢痕、色素沉着、过敏、晕厥和延误治疗等风险。不得替代疫苗、降压药、降糖药、抗病毒治疗、抗肿瘤治疗、吸入药物或其他标准医疗方案。任何操作需由合格医生/中医师在合规机构内完成。
