# OpenAI Codex

OpenAI Codex 是 OpenAI 面向软件开发的 AI 编程 Agent。它可以理解代码库、修改文件、运行命令、审查代码、修复问题，并把开发任务拆成可执行步骤。

现在的 Codex 不只是一款命令行工具，也不只是 ChatGPT 里的云端 Agent。它覆盖多个入口：

- **Codex Web / Cloud**：在 ChatGPT 或网页中让 Codex 运行云端任务
- **Codex 桌面应用**：在 macOS / Windows 上管理多个线程、worktree、终端和 Git diff
- **Codex CLI**：在终端中运行本地 Agent
- **Codex IDE 扩展**：在 VS Code / Cursor 等编辑器侧边栏中使用 Codex
- **GitHub / Slack / Linear 等集成**：把代码审查、任务分派和协作流程接入现有工具

::: tip 适合谁？
Codex 适合想把「理解代码、改代码、跑测试、审查 diff、处理 PR 反馈」交给 AI 协作完成的开发者。它不是简单补全工具，更像一个能在项目里执行任务的工程助手。
:::

## 能做什么

| 场景 | 可以让 Codex 做什么 |
|------|----------------------|
| 理解项目 | 概述目录结构、解释模块关系、梳理 API、读懂遗留代码 |
| 写代码 | 新增功能、改 UI、补测试、写脚本、迁移配置 |
| 调试 | 读取报错、定位失败测试、分析日志、提出修复方案 |
| 重构 | 拆分模块、消除重复逻辑、迁移旧接口、改善类型定义 |
| 代码审查 | 对未提交改动、指定 commit 或 PR 分支做 review |
| 自动化 | 用 `codex exec`、云任务、GitHub Action 或集成处理重复任务 |
| 协作 | 在桌面应用里开多个线程，分别处理不同问题 |

## 选择哪个入口

| 入口 | 适合场景 | 特点 |
|------|----------|------|
| Codex Web / Cloud | 让 Codex 在云端完成任务，适合交给它跑一段时间 | 不占用本机，适合并行任务和远程执行 |
| Codex 桌面应用 | 日常开发、查看 diff、管理多个线程和 worktree | 图形界面、内置终端、Git review、自动化 |
| Codex CLI | 终端用户、本地仓库、脚本化任务 | 本地执行、开源、配置灵活 |
| Codex IDE 扩展 | 不想离开编辑器 | 和代码编辑器并排工作，适合边看代码边提问 |
| GitHub 集成 | PR 审查、处理 review comments | 适合团队协作和代码审查流程 |

::: tip 新手路线
如果你已经有 ChatGPT 订阅，先从 Codex 桌面应用或 IDE 扩展开始；如果你习惯终端，再安装 CLI。团队协作场景再考虑 GitHub、Slack、Linear 等集成。
:::

## 账号与套餐

Codex 包含在 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise 等计划中，具体额度、模型和功能以官方价格页和账号实际显示为准。

Codex 支持两种 OpenAI 登录方式：

| 登录方式 | 适合场景 | 注意事项 |
|----------|----------|----------|
| ChatGPT 登录 | 个人日常使用、Codex Cloud、桌面应用、IDE、CLI | 使用 ChatGPT 计划内额度和工作区权限 |
| API Key 登录 | CI/CD、脚本化、本地自动化、共享运行环境 | 按 OpenAI API 用量计费，部分云端/工作区功能不可用 |

::: warning 不要混淆两套账单
ChatGPT 订阅额度和 Platform API Key 计费是两套体系。用 ChatGPT 登录时走 ChatGPT 计划；用 API Key 登录时走 API 账号的标准计费。
:::

## 安装与启动

### Codex 桌面应用

Codex 桌面应用适合管理多个开发线程，支持 macOS 和 Windows。

#### macOS

1. 打开 [Codex 官网](https://openai.com/codex/)
2. 下载 macOS 版本
3. 按提示安装并打开 Codex
4. 使用 ChatGPT 账号或 OpenAI API Key 登录
5. 选择一个项目文件夹开始工作

也可以在安装 CLI 后用命令打开桌面应用：

```bash
codex app .
```

#### Windows

##### 系统需求

根据官方 Windows 说明，Codex 在 Windows 上可以用三种方式运行：原生 Windows + elevated sandbox、原生 Windows + unelevated sandbox，或 WSL2 Linux 环境。

| 项目 | 要求 / 建议 |
|------|-------------|
| 操作系统 | **推荐 Windows 11** |
| Windows 10 | 近期且完整更新的 Windows 10 可尽力支持；实际需要 Windows 10 1809 或更新版本，因为依赖现代控制台能力，例如 ConPTY |
| 旧版 Windows 10 | 不推荐，可能缺少必要控制台组件，也更容易在企业管控环境中失败 |
| 安装工具 | 建议系统可用 `winget`；如果缺失，先更新 Windows 或安装 Windows Package Manager |
| 运行环境 | 默认可使用 Windows 原生 PowerShell Agent；需要 Linux 原生命令、仓库和工具链时使用 WSL2 |
| WSL 版本 | 使用 WSL2；WSL1 不再适合作为 Codex Linux 沙箱环境 |
| 沙箱 | 推荐原生 Windows `elevated` sandbox；无法完成管理员批准的设置时可退回 `unelevated` sandbox |
| 权限 | 不建议默认使用 Full Access，日常开发保持 sandbox 和 approval 边界 |

推荐提前安装的开发工具：

```powershell
winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
```

安装 GitHub CLI 后，可以运行：

```powershell
gh auth login
```

这样 Codex 桌面应用才能更好地读取 GitHub PR 上下文、review comments 和 changed files。

如果在 Windows 原生环境中运行 Codex，推荐在配置里使用 elevated sandbox：

```toml
[windows]
sandbox = "elevated"
```

如果没有管理员权限，或企业设备阻止相关设置，可以临时使用：

```toml
[windows]
sandbox = "unelevated"
```

::: tip 什么时候选 WSL2？
如果项目依赖 Linux 命令、Linux 路径、容器工具链，或者仓库本来就放在 WSL2 里，优先让 Codex 在 WSL2 中运行。为了性能和权限稳定，仓库建议放在 WSL 的 Linux home 目录，例如 `~/code/my-app`，而不是 `/mnt/c/...`。
:::

1. 打开 Microsoft Store 搜索 Codex
2. 安装 Codex
3. 打开应用并登录
4. 添加项目目录

也可以用 `winget` 安装：

```powershell
winget install Codex -s msstore
```

Windows 上可以使用原生 PowerShell Agent，也可以配置 WSL2。需要 Linux 原生命令环境时优先考虑 WSL2。

### Codex CLI

Codex CLI 是开源命令行工具，适合在终端里直接和本地仓库协作。

```bash
# 安装
npm install -g @openai/codex

# 验证
codex --version

# 登录
codex login
```

如果你在远程服务器或无浏览器环境中登录，可以使用设备码：

```bash
codex login --device-auth
```

::: warning 只安装官方包
安装 CLI 时认准官方包名 `@openai/codex` 和官方 GitHub 仓库 `openai/codex`。不要安装名称相似的第三方包，也不要把 `~/.codex/auth.json`、API Key 或访问 token 发给别人。
:::

### IDE 扩展

Codex IDE 扩展适合 VS Code、Cursor 等编辑器用户。安装后在编辑器侧边栏登录 ChatGPT 或 API Key，即可让 Codex 读取当前项目、解释代码、修改文件和执行任务。

在 Cursor 这类 VS Code 分支里，如果 Codex 图标不在你想要的位置，可以把 Codex 面板拖到右侧边栏，和 Cursor Chat 分开使用。

## CLI 基本使用

### 交互模式

```bash
# 在当前目录启动
codex

# 带初始任务启动
codex "解释这个项目的结构，并指出主要入口文件"
```

交互模式适合边看边改。Codex 会展示计划、命令、diff 和执行结果，你可以继续追问或要求它调整。

### 指定模型

```bash
codex --model gpt-5.5
```

也可以在交互会话中使用 `/model` 切换。官方文档当前推荐大多数 Codex 任务从 `gpt-5.5` 开始；轻量任务可选择更快的 mini 模型。模型可用性会随账号、地区和产品更新变化，以 Codex 模型选择器和官方文档为准。

### 设置权限

```bash
# 推荐的本地开发模式：允许工作区内编辑，越权或联网时请求确认
codex --sandbox workspace-write --ask-for-approval on-request

# 只读咨询模式
codex --sandbox read-only --ask-for-approval on-request
```

常见权限模式：

| 模式 | 适合场景 | 行为 |
|------|----------|------|
| Auto | 日常开发 | 可读写当前工作区，越界或联网时请求确认 |
| Read-only | 只想咨询、审查或规划 | 只读为主，不主动修改 |
| Full Access | 高信任、隔离环境 | 权限很大，谨慎使用 |

::: warning 谨慎使用 Full Access
Full Access 或 `--dangerously-bypass-approvals-and-sandbox` 会显著扩大权限边界。只在你信任仓库、任务和运行环境时使用。
:::

### 非交互执行

适合脚本和自动化：

```bash
codex exec "修复当前测试失败，并总结改动"
```

可以把它放到 CI、脚本、定时任务或内部工具里。自动化场景优先用 API Key，并避免在公开仓库或不可信 runner 中暴露凭证。

### 恢复历史会话

```bash
codex resume
codex resume --last
codex resume --all
```

Codex 会把本地会话记录保存在 `~/.codex/sessions/`，方便继续之前的上下文。

### 常用命令速查

| 命令 | 用途 |
|------|------|
| `codex` | 启动交互式 TUI |
| `codex login` | 登录 ChatGPT 或 API Key |
| `codex logout` | 清除登录状态 |
| `codex exec` | 非交互执行任务 |
| `codex resume` | 恢复历史会话 |
| `codex app` | 打开 Codex 桌面应用 |
| `codex doctor` | 生成本地诊断报告 |
| `codex completion zsh` | 生成 shell 补全 |
| `codex features list` | 查看功能开关 |
| `codex cloud` | 浏览或启动 Codex Cloud 任务 |

## 桌面应用工作流

### 1. 添加项目

打开 Codex 桌面应用，选择一个项目文件夹。项目最好是 Git 仓库，因为 Codex 的 review pane、worktree 和 diff 功能都依赖 Git 状态。

### 2. 选择运行目标

常见目标：

- **Local**：在当前项目目录中工作
- **Worktree**：创建独立 Git worktree，适合并行开发和隔离改动
- **Cloud**：交给云端任务执行

### 3. 给出明确任务

好的提示词：

```text
给用户管理页增加 CSV 导出按钮。保持现有 UI 风格，补充单元测试，最后运行 npm test。
```

不够好的提示词：

```text
优化一下项目。
```

### 4. 审查 diff

Codex 修改后，在 review pane 中查看：

- 未提交改动
- 当前分支相对 base 分支的改动
- 最近一轮 Codex 改动
- staged / unstaged 状态

你可以按文件、hunk 或整段 diff stage、unstage、revert，也可以对具体行添加 inline comment，让 Codex 继续修。

### 5. 运行和验证

使用内置终端运行：

```bash
npm test
npm run lint
npm run build
```

也可以在 local environments 中配置项目 setup script 和常用 action，例如安装依赖、启动开发服务器、运行测试。

## IDE 工作流

在 VS Code / Cursor 中使用 Codex 时，推荐这样配合：

1. 在编辑器中打开项目
2. 打开 Codex 侧边栏
3. 让 Codex 先解释当前文件或相关模块
4. 要求 Codex 修改明确范围
5. 在编辑器 diff 中检查改动
6. 运行测试或让 Codex 运行测试

适合的任务：

- 解释当前文件
- 补一个函数的测试
- 修复 TypeScript 报错
- 根据打开的错误栈定位问题
- 对选中代码做局部重构

## 配置文件

Codex 使用 TOML 配置。

| 位置 | 用途 |
|------|------|
| `~/.codex/config.toml` | 用户级默认配置 |
| `.codex/config.toml` | 项目级配置，项目被信任后才加载 |
| `~/.codex/<profile>.config.toml` | profile 配置，可用 `--profile` 选择 |

常用配置示例：

```toml
# ~/.codex/config.toml
model = "gpt-5.5"
approval_policy = "on-request"
sandbox_mode = "workspace-write"
web_search = "cached"

[sandbox_workspace_write]
network_access = false
```

::: tip 配置优先级
CLI 参数和 `-c key=value` 优先级最高，其次是项目 `.codex/config.toml`，再是 profile、用户配置和系统配置。临时试验可以用 CLI 参数，长期习惯写进 config。
:::

## 项目说明：AGENTS.md

Codex 会在开始工作前读取 `AGENTS.md`，用来理解项目规范、测试命令和开发约束。它比旧式的 `codex.md` 更适合做项目指令。

项目根目录示例：

```markdown
# AGENTS.md

## 项目说明

这是一个 VitePress 文档站。

## 开发命令

- 安装依赖：`npm install`
- 本地开发：`npm run docs:dev`
- 构建检查：`npm run docs:build`

## 规范

- 文档使用中文
- 新增页面后更新侧边栏
- 提交前必须跑 `npm run docs:build`
```

个人全局说明可以放在：

```text
~/.codex/AGENTS.md
```

如果子目录有特殊规则，也可以在子目录里放更近的 `AGENTS.md` 或 `AGENTS.override.md`。

## MCP、Skills 与插件

Codex 可以通过 MCP、Skills 和 Plugins 扩展能力。

| 能力 | 用途 |
|------|------|
| MCP | 接入外部工具、数据库、内部系统、浏览器、GitHub 等上下文 |
| Skills | 把可复用工作流写成说明和脚本，例如“生成 PPT”“处理表格” |
| Plugins | 把 skills、MCP、hooks、资源打包成可安装能力 |
| Hooks | 在工具调用、文件编辑、命令执行前后加自动检查或限制 |

新手不需要一开始配置这些。先把 CLI、桌面应用、AGENTS.md 和基本权限用熟，再根据团队需求扩展。

## 代码审查

Codex 可以做本地代码审查：

```bash
# 在 CLI 会话中
/review
```

常见审查对象：

- 未提交改动
- 指定 commit
- 当前分支相对 base 分支的改动
- PR 分支和 review comments

审查输出应该重点看：

- 是否有真实 bug
- 是否有边界条件遗漏
- 是否有安全风险
- 是否缺测试
- 是否破坏现有 API 或行为

::: tip 审查不是替代人工 review
Codex review 适合提前发现问题，但最终合并前仍建议由人确认需求、风险和产品行为。
:::

## 安全与权限建议

1. **先用 Git 管理项目**：让所有改动都可 diff、可回滚
2. **默认使用 Auto / workspace-write**：不要一上来开 Full Access
3. **敏感项目用 read-only 开始**：先让 Codex 解释和规划
4. **联网要谨慎**：默认命令网络关闭，需要安装依赖时再显式允许
5. **不要提交凭证**：检查 `.env`、`auth.json`、API Key、token
6. **不要让 Codex 处理不可信仓库时全权限运行**
7. **分享日志前先脱敏**：`~/.codex/sessions/` 和日志可能包含路径、命令和片段

## 常见任务示例

### 理解代码

```text
概述这个仓库的目录结构，指出前端入口、后端入口和测试目录。
```

```text
解释 src/auth/session.ts 的登录态刷新流程，并画出关键调用链。
```

### 编写功能

```text
给订单列表增加按状态筛选。保持现有组件风格，补充测试，最后运行 lint 和 test。
```

```text
把这个脚本改成支持 --dry-run，并更新 README 中的使用示例。
```

### 修复问题

```text
npm test 失败了。请先运行测试，定位失败原因，然后做最小修复。
```

```text
页面在移动端按钮溢出。请用浏览器检查 375px 宽度并修复布局。
```

### 代码审查

```text
审查当前未提交改动，重点关注边界条件、错误处理和缺失测试。
```

```text
对比 main 分支审查这个功能分支，按严重程度列出问题。
```

## 常见问题

### Codex 和 ChatGPT 有什么区别？

ChatGPT 是通用对话助手；Codex 是面向软件工程的 Agent，可以读取项目、编辑文件、运行命令、审查 diff，并与 Git / IDE / 云任务协作。

### Codex 和 Cursor / Copilot 有什么区别？

Cursor 和 Copilot 更偏编辑器内补全、对话和局部修改；Codex 更偏 Agent 工作流，适合把一个明确任务交给它执行、验证和审查。

### Codex CLI 必须用 API Key 吗？

不必须。CLI 支持 ChatGPT 登录和 API Key 登录。日常个人使用优先 ChatGPT 登录；自动化、CI/CD 或共享环境更适合 API Key。

### Codex 会不会直接乱改项目？

取决于权限设置。默认推荐 workspace-write + on-request。重要仓库先用 read-only 或在新分支/worktree 中运行，并用 Git 审查所有改动。

### 为什么桌面应用和 CLI 功能不完全一样？

官方文档说明，Codex app 和 CLI 使用同一类底层 Agent 和配置，但可能捆绑不同版本，实验能力也可能先出现在 CLI。

### worktree 里命令跑不起来怎么办？

worktree 只继承 Git 中已提交的文件，依赖和本地配置可能缺失。给项目配置 local environment setup script，例如：

```bash
npm install
npm run build
```

## 最佳实践

- 任务要具体：说明文件范围、验收标准、测试命令
- 先让 Codex 读项目，再让它改代码
- 大任务拆成多个线程或多个小任务
- 修改前开新分支或用 worktree
- 每轮改动后看 diff，不满意就及时纠偏
- 让 Codex 运行测试，但自己也要看失败原因和最终 diff
- 把项目约定写入 `AGENTS.md`
- 用 `/review` 做提交前自检

## 相关链接

- [Codex 官网](https://openai.com/codex/)
- [Codex 官方概览](https://developers.openai.com/codex/overview)
- [Codex Quickstart](https://developers.openai.com/codex/quickstart)
- [Codex Pricing](https://developers.openai.com/codex/pricing)
- [Codex 桌面应用](https://developers.openai.com/codex/app)
- [Codex CLI](https://developers.openai.com/codex/cli)
- [Codex IDE 扩展](https://developers.openai.com/codex/ide)
- [Codex CLI GitHub 仓库](https://github.com/openai/codex)
- [Codex 模型选择](https://developers.openai.com/codex/models)
- [Codex 配置基础](https://developers.openai.com/codex/config-basic)
- [Codex 安全与审批](https://developers.openai.com/codex/agent-approvals-security)
- [AGENTS.md 指南](https://developers.openai.com/codex/guides/agents-md)
- [MCP 配置](https://developers.openai.com/codex/mcp)
