# GitHub 使用教程

GitHub 是基于 Git 的代码托管和协作平台。Git 负责本地版本控制，GitHub 负责把仓库放到云端，并提供 Issue、Pull Request、代码审查、Actions 自动化、Release、Wiki、项目管理和团队权限等协作功能。

## Git 和 GitHub 的区别

| 工具 | 作用 | 简单理解 |
|------|------|----------|
| Git | 本地版本控制工具 | 记录文件变化、提交、分支、合并 |
| GitHub | 云端代码协作平台 | 托管 Git 仓库、协作开发、审查、自动化 |
| GitHub CLI | 命令行 GitHub 客户端 | 在终端里操作 PR、Issue、Actions、Release |
| GitHub Desktop | 图形化 Git 客户端 | 不想用命令行时管理 Git 和 GitHub |

::: tip 先学 Git，再用 GitHub
GitHub 的很多操作都建立在 Git 基础上。如果还不熟悉 `git status`、`git add`、`git commit`、`git push`，建议先看 [Git 使用教程](/terminal/git)。
:::

## GitHub 常见功能

| 功能 | 用途 | 适合场景 |
|------|------|----------|
| Repository | 托管项目代码和文档 | 保存项目、协作开发 |
| Issue | 记录问题、需求、任务 | Bug、需求、讨论、任务列表 |
| Pull Request | 提议合并代码 | 代码审查、多人协作 |
| Review | 审查 PR 改动 | 找 bug、提建议、批准合并 |
| Actions | 自动化工作流 | 测试、构建、部署、检查 |
| Projects | 项目管理看板 | 规划任务、跟踪进度 |
| Releases | 发布版本 | 打包版本、发布说明 |
| Wiki | 项目知识库 | 项目说明、开发文档 |
| Discussions | 社区讨论 | 问答、提案、社区交流 |

## 注册和基础设置

1. 打开 [GitHub 官网](https://github.com/)
2. 注册账号并验证邮箱
3. 开启双重认证 2FA
4. 设置头像、用户名和个人资料
5. 配置 Git 本地用户名和邮箱

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

::: warning 账号安全
GitHub 账号通常关联代码、密钥、团队权限和 CI/CD。务必开启 2FA，不要把 Personal Access Token、SSH 私钥、`.env` 文件提交到仓库。
:::

## HTTPS 和 SSH 怎么选

GitHub 支持两种常见连接方式：

| 方式 | 特点 | 适合谁 |
|------|------|--------|
| HTTPS | 地址像 `https://github.com/user/repo.git`，可配合 GitHub CLI 或 Token 认证 | 新手、临时电脑、公司受限网络 |
| SSH | 地址像 `git@github.com:user/repo.git`，用 SSH Key 认证 | 长期开发电脑、频繁 push/pull |

### 配置 SSH Key

先检查是否已有 SSH Key：

```bash
ls -al ~/.ssh
```

如果没有，可以生成一个：

```bash
ssh-keygen -t ed25519 -C "你的邮箱@example.com"
```

查看公钥：

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出内容，打开 GitHub：

1. 点击右上角头像
2. 进入 Settings
3. 打开 SSH and GPG keys
4. 点击 New SSH key
5. 粘贴公钥并保存

测试连接：

```bash
ssh -T git@github.com
```

::: warning 不要复制私钥
只把 `.pub` 结尾的公钥添加到 GitHub。没有 `.pub` 的私钥不能发给任何人，也不要提交到仓库。
:::

## 创建仓库

### 在网页上创建

1. 点击右上角 `+`
2. 选择 `New repository`
3. 输入仓库名
4. 选择 Public 或 Private
5. 可选：添加 README、`.gitignore`、License
6. 点击 Create repository

### 把本地项目推到 GitHub

```bash
cd my-project
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin git@github.com:user/repo.git
git push -u origin main
```

如果使用 HTTPS：

```bash
git remote add origin https://github.com/user/repo.git
git push -u origin main
```

### 克隆已有仓库

```bash
git clone git@github.com:user/repo.git
cd repo
```

## GitHub Flow

GitHub 官方推荐的基础协作方式通常叫 GitHub Flow：

1. 从 `main` 创建一个新分支
2. 在分支上提交改动
3. 推送分支到 GitHub
4. 创建 Pull Request
5. 讨论、审查、修改
6. 通过检查后合并到 `main`
7. 删除任务分支

命令示例：

```bash
git switch main
git pull
git switch -c feature/update-docs

# 修改文件
git add docs/
git commit -m "docs: update usage guide"
git push -u origin feature/update-docs
```

然后到 GitHub 页面创建 Pull Request。

## Issue 使用方法

Issue 可以用来记录：

- Bug
- 新需求
- 文档任务
- 讨论问题
- 待办清单
- 决策记录

一个好的 Issue 应该包含：

```md
## 背景

## 目标

## 复现步骤

## 期望结果

## 实际结果

## 验收标准

## 相关链接
```

常用功能：

| 功能 | 作用 |
|------|------|
| Assignees | 指定负责人 |
| Labels | 标记类型，例如 `bug`、`docs`、`enhancement` |
| Milestone | 归入某个版本或阶段 |
| Linked pull requests | 关联 PR，合并后自动关闭 Issue |
| Task list | 用 `- [ ]` 创建任务清单 |

在 PR 或 Commit 中关联 Issue：

```text
Fixes #12
Closes #34
Refs #56
```

## Pull Request 使用方法

PR 是 GitHub 协作的核心。它不是“最终代码”，而是“请求别人审查并合并你的改动”。

一个好的 PR 应包含：

```md
## 改动内容

- 

## 为什么改

- 

## 验证方式

- [ ] 本地测试通过
- [ ] 构建通过
- [ ] 页面已检查

## 相关 Issue

Closes #
```

创建 PR 后，重点检查：

- Files changed 是否只包含本次任务相关文件
- 是否误提交 `.env`、日志、构建产物
- CI / GitHub Actions 是否通过
- 是否需要截图、录屏或说明验证方式
- 是否需要请求别人 review

## Code Review

审查别人 PR 时，不只看代码能不能跑，还要看：

- 是否解决了 Issue
- 是否有遗漏场景
- 是否改了无关文件
- 是否破坏兼容性
- 是否有安全风险
- 是否需要测试和文档

评论建议：

```text
这里可能漏了空数组场景，建议补一个测试。
```

比下面这种更好：

```text
这里不对。
```

常见 Review 结论：

| 结论 | 含义 |
|------|------|
| Comment | 只评论，不阻止合并 |
| Approve | 同意合并 |
| Request changes | 需要修改后才能合并 |

## GitHub CLI

GitHub CLI 的命令是 `gh`。它可以让你在终端里操作 GitHub。

### 安装

macOS：

```bash
brew install gh
```

Windows：

```powershell
winget install --id GitHub.cli
```

Linux 可参考 GitHub CLI 官方安装文档。

### 登录

```bash
gh auth login
```

查看状态：

```bash
gh auth status
```

### 常用命令

```bash
# 查看仓库
gh repo view

# 创建仓库
gh repo create

# 查看 Issue
gh issue list

# 创建 Issue
gh issue create

# 查看 PR
gh pr list

# 创建 PR
gh pr create

# 查看当前 PR
gh pr view

# 检出 PR 到本地
gh pr checkout 123

# 查看 Actions
gh run list

# 查看某次运行日志
gh run view --log
```

Git 和 GitHub CLI 的分工：

| 工具 | 做什么 |
|------|--------|
| `git` | 本地提交、分支、合并、push/pull |
| `gh` | GitHub 上的 Issue、PR、Actions、Release、仓库管理 |

## GitHub Actions

GitHub Actions 用来自动执行工作流，例如：

- 自动运行测试
- 自动构建文档
- 自动部署网站
- 自动检查代码格式
- 发布 Release

工作流文件通常放在：

```text
.github/workflows/
```

一个简单的 Node.js 构建示例：

```yaml
name: build

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run docs:build
```

::: warning Actions 会消耗额度
公开仓库通常有较宽松的免费额度，私有仓库和组织账号要注意计费、并发和运行时长限制。以 GitHub 当前页面显示为准。
:::

## Fork 开源项目

如果你没有原仓库写权限，可以用 Fork 流程：

1. 在 GitHub 页面点击 Fork
2. 克隆自己的 fork
3. 添加原仓库为 `upstream`
4. 创建分支并提交
5. 推送到自己的 fork
6. 向原仓库发 PR

命令示例：

```bash
git clone git@github.com:your-name/project.git
cd project
git remote add upstream git@github.com:original-owner/project.git

git switch -c fix/docs-typo
# 修改文件
git add .
git commit -m "docs: fix typo"
git push -u origin fix/docs-typo
```

同步原仓库更新：

```bash
git fetch upstream
git switch main
git merge upstream/main
git push
```

## Release 和 Tag

Tag 是 Git 中的版本标记，Release 是 GitHub 上面向用户的发布页。

常见流程：

```bash
git tag v1.0.0
git push origin v1.0.0
```

然后在 GitHub：

1. 打开仓库 Releases
2. 点击 Draft a new release
3. 选择 tag
4. 写发布说明
5. 上传构建产物
6. 发布

也可以用 GitHub CLI：

```bash
gh release create v1.0.0 --title "v1.0.0" --notes "First release"
```

## README 和仓库主页

`README.md` 是仓库首页最重要的文件。

建议包含：

```md
# 项目名称

## 项目简介

## 快速开始

## 常用命令

## 目录结构

## 开发流程

## 部署方式

## 贡献指南

## License
```

对于文档项目，README 里至少写清楚：

- 怎么安装依赖
- 怎么启动本地服务
- 怎么构建
- 文档目录在哪里
- 如何新增页面

## 权限和协作

仓库权限常见层级：

| 权限 | 能做什么 |
|------|----------|
| Read | 读取代码和 Issue |
| Triage | 管理 Issue 和 PR，不改代码 |
| Write | 推送分支、管理 Issue、参与 PR |
| Maintain | 管理仓库但不改敏感设置 |
| Admin | 管理全部设置和权限 |

协作建议：

- 不要所有人都给 Admin
- 主分支开启保护规则
- 合并前要求 PR Review
- 重要仓库开启 2FA 要求
- CI 通过后再允许合并

## 和 AI 工具配合

GitHub 是 AI 编程工具的协作出口。Codex、Claude Code、Cursor 等工具改完代码后，最终最好回到 GitHub 的 PR 流程里审查。

推荐流程：

1. 在 GitHub Issue 写清楚需求和验收标准
2. 本地创建任务分支
3. 让 AI 工具在分支上修改
4. 用 `git diff` 检查改动
5. 运行测试或构建
6. 推送分支并创建 PR
7. 在 PR 中写清楚 AI 做了什么、你验证了什么
8. 让人类或另一个 AI 工具做 Review

适合给 AI 的提示：

```text
请先阅读当前 Issue 和相关文件。
修改只限本次任务范围。
完成后运行测试或构建。
不要提交 .env、密钥、Token、账号、验证码或构建产物。
最后总结适合写进 Pull Request 的说明。
```

PR 描述模板：

```md
## Summary

- 

## Verification

- [ ] npm run docs:build
- [ ] 页面本地访问正常

## Notes

- 本 PR 部分内容由 AI 辅助生成，已人工审查。
```

## 常见问题

### GitHub 是不是必须公开代码？

不是。创建仓库时可以选择 Public 或 Private。个人学习项目可以公开，涉及公司、客户、密钥、内部文档的项目应使用私有仓库。

### 为什么 push 需要登录？

因为 GitHub 要确认你有权限修改远程仓库。你可以使用 HTTPS + Token、SSH Key，或 GitHub CLI 登录。

### 为什么 PR 不能合并？

常见原因：

- CI / Actions 失败
- 有冲突
- 缺少必需 Review
- 分支保护规则不允许
- 没有写权限

### fork 和 branch 有什么区别？

branch 是同一个仓库里的分支；fork 是复制一份仓库到你的账号下。没有原仓库写权限时，通常先 fork 再发 PR。

### GitHub Desktop 和 GitHub CLI 选哪个？

喜欢图形界面用 GitHub Desktop；经常在终端工作用 GitHub CLI。团队协作中，两者都可以，关键是提交和 PR 流程清楚。

## 日常命令速查

| 目标 | 命令 |
|------|------|
| 克隆仓库 | `git clone git@github.com:user/repo.git` |
| 查看远程 | `git remote -v` |
| 推送分支 | `git push -u origin branch-name` |
| 登录 GitHub CLI | `gh auth login` |
| 查看登录状态 | `gh auth status` |
| 创建仓库 | `gh repo create` |
| 查看 Issue | `gh issue list` |
| 创建 Issue | `gh issue create` |
| 查看 PR | `gh pr list` |
| 创建 PR | `gh pr create` |
| 检出 PR | `gh pr checkout 123` |
| 查看 Actions | `gh run list` |
| 查看运行日志 | `gh run view --log` |

## 学习建议

1. 先学会 Repository、Issue、Pull Request 三个核心概念
2. 所有任务尽量先写 Issue，再开分支
3. 不直接往 `main` 推大改动
4. 每个 PR 只做一个主题
5. 合并前看 Files changed 和 Actions 结果
6. AI 辅助改动也要走 PR 和 Review

## 相关链接

- [Git 使用教程](/terminal/git)
- [GitHub Docs](https://docs.github.com/)
- [GitHub Git 入门](https://docs.github.com/en/get-started/using-git/about-git)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub Pull Requests](https://docs.github.com/pull-requests)
- [GitHub Authentication](https://docs.github.com/en/authentication)
- [GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli)
