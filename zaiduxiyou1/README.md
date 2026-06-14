# 再读西游 · GitHub Pages 发布包

用国内大模型深读古典名著的方法与提示词工作台，附《西游记》全本范例。纯静态页面，无服务器依赖，可手机浏览、离线打开、打印转 PDF。

## 推荐仓库结构

```text
index.html
.nojekyll
README.md
downloads/
  zaidu_xiyou_research_report.pdf
  zaidu_xiyou_data_base.xlsx
  zaidu_xiyou_reading_salon.pptx
  zaidu_xiyou_wechat_series.html
  ai_classic_reading_method.md
  README.md
```

## 发布步骤（个人 GitHub）

1. 新建仓库，例如 `zaidu-xiyou`。
2. 上传本包内全部文件，**保持目录结构不变**（`downloads/` 整个文件夹一起上传）。
3. 进入仓库 `Settings` → `Pages`。
4. `Source` 选择 `Deploy from a branch`。
5. `Branch` 选择 `main`，目录选择 `/(root)`，点击 `Save`。
6. 等待部署完成后访问：`https://你的用户名.github.io/zaidu-xiyou/`。

## 更新方式

后续只要替换 `index.html` 或 `downloads/` 中的文件并提交 commit，GitHub Pages 会自动重新部署。

## 发布前自查

- 是否包含不希望公开的个人信息或内部文件；
- PDF、Excel、PPT 是否可以公开下载；
- 原文摘录是否控制为短摘与评论用途；
- README 与页面声明是否符合发布口径。

---
© 江南AI工作小组 · 再读西游 · 用国内大模型深读名著的方法与工作台
