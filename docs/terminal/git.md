# Git 使用教程

Git 是最常用的版本控制工具。它可以记录每一次文件变化，帮助你回退错误、对比差异、多人协作、管理分支，也是在使用 Codex、Claude Code、Cursor 等 AI 编程工具时保护项目安全的基础。

## 一页看懂

| 概念 | 说明 | 新手理解 |
|------|------|----------|
| Repository | Git 仓库 | 一个被 Git 管理的项目文件夹 |
| Commit | 提交 | 一次保存好的项目快照 |
| Branch | 分支 | 一条独立的开发线 |
| Remote | 远程仓库 | GitHub / GitLab / Gitee 上的项目副本 |
| Clone | 克隆 | 从远程仓库下载项目 |
| Pull | 拉取 | 把远程更新同步到本地 |
| Push | 推送 | 把本地提交上传到远程 |
| Merge | 合并 | 把一个分支的改动合并到另一个分支 |
| Conflict | 冲突 | 两个人改了同一处，Git 不知道该保留谁 |

::: tip Git 解决的核心问题
Git 不是备份软件，而是“可追踪的项目历史”。每次提交都应该表达一个清晰变化：修复一个问题、完成一个功能、更新一段文档。
:::

## 安装 Git

### macOS

如果安装过 Xcode Command Line Tools，通常已经有 Git：

```bash
git --version
```

没有安装时可以运行：

```bash
xcode-select --install
```

也可以用 Homebrew：

```bash
brew install git
```

### Windows

推荐安装 [Git for Windows](https://git-scm.com/download/win)，安装后可以使用：

- Git Bash
- Windows Terminal
- PowerShell

安装完成后检查：

```bash
git --version
```

### Linux

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git
```

## 首次配置

Git 需要知道提交者是谁：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

查看配置：

```bash
git config --global --list
```

推荐补充这些设置：

```bash
# 默认分支名使用 main
git config --global init.defaultBranch main

# 让命令行输出带颜色
git config --global color.ui auto

# 使用 VS Code 作为编辑器
git config --global core.editor "code --wait"
```

::: warning 邮箱要和远程平台匹配
如果你使用 GitHub，建议把 `user.email` 设置成 GitHub 账号邮箱，或者 GitHub 提供的 noreply 邮箱。否则提交可能无法正确关联到你的账号。
:::

## 创建仓库

### 从零创建

```bash
mkdir my-project
cd my-project
git init
```

查看状态：

```bash
git status
```

### 克隆已有项目

```bash
git clone https://github.com/user/repo.git
cd repo
```

如果使用 SSH：

```bash
git clone git@github.com:user/repo.git
```

## Git 的三个区域

Git 日常操作围绕三个区域：

| 区域 | 说明 | 常用命令 |
|------|------|----------|
| Working Tree | 工作区，正在编辑的文件 | `git status` |
| Staging Area | 暂存区，准备进入下一次提交的文件 | `git add` |
| Repository | 本地仓库，已经提交的历史 | `git commit` |

一次标准提交流程：

```bash
git status
git add README.md
git commit -m "docs: update README"
```

## 基础工作流

### 1. 查看状态

```bash
git status
```

常见状态：

| 状态 | 含义 |
|------|------|
| Untracked files | Git 还没有跟踪的新文件 |
| Modified | 已跟踪文件被修改 |
| Staged | 已加入暂存区，准备提交 |
| Clean | 没有未提交改动 |

### 2. 查看差异

查看工作区改动：

```bash
git diff
```

查看暂存区改动：

```bash
git diff --staged
```

### 3. 暂存文件

```bash
# 暂存单个文件
git add README.md

# 暂存整个目录
git add docs/

# 暂存当前目录所有改动
git add .
```

### 4. 提交

```bash
git commit -m "docs: add git tutorial"
```

好的提交信息：

```text
docs: add git tutorial
fix: handle empty input
feat: add user login page
refactor: simplify sidebar config
```

不太好的提交信息：

```text
update
fix bug
修改
随便改一下
```

### 5. 查看历史

```bash
git log
git log --oneline
git log --oneline --graph --decorate --all
```

## 分支管理

分支适合用来隔离不同任务。不要所有改动都堆在主分支上。

### 查看分支

```bash
git branch
```

### 创建并切换分支

```bash
git switch -c feature/git-tutorial
```

旧写法也常见：

```bash
git checkout -b feature/git-tutorial
```

### 切换分支

```bash
git switch main
git switch feature/git-tutorial
```

### 合并分支

先切回目标分支：

```bash
git switch main
git merge feature/git-tutorial
```

### 删除本地分支

```bash
git branch -d feature/git-tutorial
```

如果分支未合并，Git 会阻止删除。强制删除用：

```bash
git branch -D feature/git-tutorial
```

::: warning 谨慎强制删除
`git branch -D` 会删除未合并分支。执行前确认分支上的改动已经不需要。
:::

## 远程仓库

远程仓库通常托管在 GitHub、GitLab、Gitee 等平台上。Git 负责本地提交和同步，GitHub 负责云端托管和协作。如果还没有配置 GitHub SSH Key，先看 [GitHub 使用教程：本地设备关联 GitHub](/terminal/github#本地设备关联-github-ssh-key-设置)。

### 查看远程地址

```bash
git remote -v
```

### 添加远程仓库

SSH 地址：

```bash
git remote add origin git@github.com:user/repo.git
```

HTTPS 地址：

```bash
git remote add origin https://github.com/user/repo.git
```

如果已经有 `origin`，不要重复添加，改用：

```bash
git remote set-url origin git@github.com:user/repo.git
```

### 推送

第一次推送当前分支：

```bash
git push -u origin main
```

后续推送：

```bash
git push
```

### 拉取

```bash
git pull
```

更稳的协作习惯：

```bash
git fetch
git status
git pull
```

`fetch` 只下载远程信息，不直接改你的工作区；`pull` 会把远程改动合并到当前分支。

## GitHub 常见流程

一个典型协作流程：

```bash
# 1. 拉取最新主分支
git switch main
git pull

# 2. 创建任务分支
git switch -c feature/docs-git

# 3. 修改文件后查看状态和差异
git status
git diff

# 4. 提交
git add docs/terminal/git.md
git commit -m "docs: add git tutorial"

# 5. 推送分支
git push -u origin feature/docs-git
```

然后去 GitHub 创建 Pull Request，让别人审查后再合并。

## .gitignore

`.gitignore` 用来告诉 Git 哪些文件不要提交。

常见内容：

```text
# 依赖目录
node_modules/

# 构建产物
dist/
.vitepress/dist/

# 环境变量
.env
.env.local

# 系统文件
.DS_Store

# 日志
*.log
.logs/
```

::: warning 密钥不要进 Git
如果 API Key、密码、Token、证书、礼品卡兑换码已经提交进 Git，只删除文件不够，因为历史里还在。应立即作废对应密钥，并按仓库安全流程清理历史。
:::

## 撤销与回退

撤销是 Git 新手最容易紧张的部分。先看状态，再决定用哪条命令。

### 放弃工作区某个文件的修改

```bash
git restore README.md
```

### 取消暂存

```bash
git restore --staged README.md
```

### 修改最后一次提交信息

```bash
git commit --amend -m "docs: add git usage tutorial"
```

### 回退到某个提交

如果只是想撤销某次提交，推荐用 `revert`：

```bash
git revert <commit-id>
```

`revert` 会生成一个新的“反向提交”，适合已经推送到远程的历史。

### reset 要谨慎

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

| 命令 | 效果 |
|------|------|
| `--soft` | 撤销提交，但保留暂存区 |
| `--mixed` | 撤销提交和暂存，保留工作区 |
| `--hard` | 撤销提交、暂存和工作区改动 |

::: danger 不要随便 hard reset
`git reset --hard` 会丢弃工作区改动。除非你明确知道自己要丢掉什么，否则不要使用。
:::

## 临时保存：stash

当你改到一半，需要先切分支或拉取更新，可以用 `stash` 临时保存。

```bash
git stash push -m "wip: update docs"
```

查看：

```bash
git stash list
```

恢复：

```bash
git stash pop
```

如果想保留 stash 记录，用：

```bash
git stash apply
```

## 处理冲突

冲突常见于两个人改了同一段内容。

出现冲突后，文件里会有类似内容：

```text
<<<<<<< HEAD
当前分支的内容
=======
要合并进来的内容
>>>>>>> feature-branch
```

处理步骤：

1. 打开冲突文件
2. 判断保留哪部分，或手动合并两边内容
3. 删除 `<<<<<<<`、`=======`、`>>>>>>>` 标记
4. 保存文件
5. 重新暂存并提交

```bash
git add conflicted-file.md
git commit
```

## 标签 tag

标签常用于标记版本：

```bash
git tag v1.0.0
git push origin v1.0.0
```

查看标签：

```bash
git tag
```

删除本地标签：

```bash
git tag -d v1.0.0
```

删除远程标签：

```bash
git push origin --delete v1.0.0
```

## 和 AI 工具配合

使用 Codex、Claude Code、Cursor 等 AI 编程工具时，Git 是安全网。

推荐流程：

```bash
# 任务开始前
git status
git switch -c feature/ai-change

# AI 修改后
git diff
git status

# 验证通过后
git add .
git commit -m "docs: update ai workflow guide"
```

建议：

- 让 AI 修改前先确认当前分支干净
- 每个任务单独建分支
- AI 改完后一定看 `git diff`
- 不要让 AI 提交 `.env`、密钥、账号、验证码
- 大改动分多次提交，不要一个 commit 包含所有东西
- 提交前运行测试或构建

适合给 Codex 的提示：

```text
修改前先运行 git status，确认当前改动范围。
完成后运行 git diff，总结改动。
不要提交密钥、账号、验证码、.env 或构建产物。
```

## 常见问题

### main 和 master 是什么关系？

它们都是分支名。现在很多新仓库默认用 `main`，老仓库可能用 `master`。实际使用时以项目现有分支为准。

### git pull 失败怎么办？

先看错误信息。常见原因是本地有未提交改动。可以选择：

```bash
git status
git add .
git commit -m "wip: save local changes"
git pull
```

或者临时保存：

```bash
git stash
git pull
git stash pop
```

### 提交错文件怎么办？

如果还没 push，可以修正后 amend：

```bash
git restore --staged wrong-file.txt
git commit --amend
```

如果已经 push 到共享分支，不要随便改历史，优先新增一个修正提交。

### 怎么看某一行是谁改的？

```bash
git blame file.md
```

### 怎么看某个文件历史？

```bash
git log -- file.md
git log -p -- file.md
```

## 日常命令速查

| 目标 | 命令 |
|------|------|
| 查看状态 | `git status` |
| 查看差异 | `git diff` |
| 暂存文件 | `git add file.md` |
| 暂存全部 | `git add .` |
| 提交 | `git commit -m "message"` |
| 查看历史 | `git log --oneline` |
| 创建分支 | `git switch -c branch-name` |
| 切换分支 | `git switch branch-name` |
| 拉取更新 | `git pull` |
| 推送分支 | `git push -u origin branch-name` |
| 取消暂存 | `git restore --staged file.md` |
| 放弃文件修改 | `git restore file.md` |
| 临时保存 | `git stash` |
| 恢复临时保存 | `git stash pop` |

## 学习建议

1. 先学会 `status -> diff -> add -> commit`
2. 每次只提交一个清晰主题
3. 不懂撤销命令时，先复制项目或新建分支再试
4. 和别人协作前先 `pull`
5. 用 AI 改代码前先确认 Git 状态干净

## 相关链接

- [Git 官网](https://git-scm.com/)
- [Git 官方文档](https://git-scm.com/docs)
- [Pro Git 在线书](https://git-scm.com/book/zh/v2)
- [GitHub Docs: Git 入门](https://docs.github.com/zh/get-started/using-git)
