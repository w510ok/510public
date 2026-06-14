# 再读西游 · AI辅助古典名著深读工作台

> 江南AI工作小组

一个手机优先、纯静态、可离线的单页应用：把一次《西游记》重读整理成可查、可写、可展示的成果；同时是一套**可迁移到任意名著、可用国内大模型自己跑一遍**的 AI 深读方法模板。

## 这个页面有什么

- **百回地图 / 八十一难**：把全书结构压成阶段与主题。
- **三类原生可视化**：人物关系图谱、后台妖怪责任矩阵、八十一难主题热力图（页面内绘制，非截图，可缩放、可打印）。
- **「用国内大模型自己做一遍」**：选一本书，按六步复制提示词到 DeepSeek / 通义千问 / Kimi / 文心一言 / 豆包 / 智谱清言等模型，跑出你自己的成果。
- **六步法模板**：建底本 → 建表 → 做图谱 → 摘原文 → 写专题 → 做成果，换本书直接照用。
- **夜读模式、一键复制、离线访问**。

## 目录结构

```text
index.html      主入口（单文件，含全部内容、可视化与提示词）
sw.js           离线缓存（可选）
.nojekyll       关闭 Jekyll 处理
README.md       本说明
downloads/      配套示例成果（可选，页面本身不依赖）
  zaidu_xiyou_data_base.xlsx        数据底座
  zaidu_xiyou_report.pdf            研究报告
  zaidu_xiyou_reading_salon.pptx    读书会讲稿
  zaidu_xiyou_wechat_series.html    公众号连载稿
  classic_reading_method_template.md  方法模板（纯文字版）
```

`downloads/` 是示例产物，仅供参考。不需要时可整个删除，不影响主页面。

## 发布到个人 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `zaidu-xiyou`（Public）。
2. 把本包内全部文件上传，保持目录结构不变（可直接拖拽上传，或 `git push`）。
3. 进入仓库 **Settings → Pages**。
4. **Source** 选择 **Deploy from a branch**。
5. **Branch** 选 `main`，目录选 `/(root)`，点击 **Save**。
6. 等待部署完成后访问：`https://你的用户名.github.io/zaidu-xiyou/`。

> 用命令行的话：
> ```bash
> git init && git add . && git commit -m "publish"
> git branch -M main
> git remote add origin https://github.com/你的用户名/zaidu-xiyou.git
> git push -u origin main
> ```

后续只要修改文件并提交，GitHub Pages 会自动重新部署。

## 换一本书

把它做成《水浒传》《红楼梦》《水经注》……的版本，只需：

1. 改 `index.html` 里的标题、各栏目正文与可视化数据；
2. 用页面「自己做一遍」里的提示词，让大模型帮你产出新书的表格、图谱与专题；
3. 按需替换或删除 `downloads/` 里的示例文件。

## 发布前请自查

- [ ] 是否包含不希望公开的个人信息或内部文件；
- [ ] `downloads/` 中的 Excel / PDF / PPT 是否可以公开下载（它们是早期示例，正文中可能仍带有旧的内部标注，介意可重新生成或删除）；
- [ ] 原文摘录是否控制为短摘、且用于评论与研究用途；
- [ ] 页面声明与引用边界是否符合你的发布口径。

## 声明

本项目以维基文库《西游记》百回本作为可检索底本。AI 用于检索、归纳、建表、图谱与初稿组织；关键判断、发布口径与正式引用仍经人工校核。正式公开发表前，建议对照人民文学、中华书局、上海古籍等通行纸质校注本。

© 江南AI工作小组
