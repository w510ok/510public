# 再读西游｜GitHub Pages 发布包

这是《再读西游》V5.0 的 GitHub Pages 就绪版本。

## 推荐仓库结构

```text
index.html
.nojekyll
README.md
downloads/
  zaidu_xiyou_research_report_v5_0.pdf
  zaidu_xiyou_data_base_v5_0.xlsx
  zaidu_xiyou_reading_salon_v5_0.pptx
  zaidu_xiyou_wechat_series_v5_0.html
  README_v5_0.md
  ai_classic_reading_method_template_v5_0.md
```

## 发布步骤

1. 新建 GitHub 仓库，例如 `zaidu-xiyou`。
2. 上传本包内全部文件，保持目录结构不变。
3. 进入仓库 `Settings` → `Pages`。
4. `Source` 选择 `Deploy from a branch`。
5. `Branch` 选择 `main`，目录选择 `/(root)`，点击 `Save`。
6. 等待部署完成后访问：`https://你的用户名.github.io/zaidu-xiyou/`。

## 更新方式

后续只要替换 `index.html` 或 `downloads/` 中文件，并提交 commit，GitHub Pages 会自动重新部署。

## 发布提示

正式公开前，请再次检查：

- 是否包含不希望公开的个人信息或内部文件；
- PDF、Excel、PPT 是否可以公开下载；
- 原文摘录是否控制为短摘和评论用途；
- README 和页面声明是否符合发布口径。
