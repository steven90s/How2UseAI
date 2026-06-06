# Obsidian Claudian 插件教程

Claudian 是一个 Obsidian 社区插件，可以把 Claude Code、Codex、OpenCode 等 AI 编程 Agent 嵌入到 Obsidian Vault 里。启用后，Vault 会变成 Agent 的工作目录，Agent 可以读取、搜索、编辑笔记，也可以按权限执行 Bash 和多步骤任务。

这篇教程分别介绍 Claudian 如何配合 Claude、Codex、OpenCode 使用。

::: warning 先理解风险
Claudian 不是普通聊天插件。它会让 AI Agent 在你的 Vault 中读写文件，并把输入、附件、图片、工具调用结果发送给你选择的模型 Provider。使用前请先备份 Vault，并确认没有把账号、密钥、验证码、付款信息、客户隐私等敏感内容暴露给 Agent。
:::

## 一页看懂

| 路线 | 适合谁 | 当前定位 |
|------|--------|----------|
| Claudian + Claude | 想在 Obsidian 里使用 Claude Code 的用户 | 默认主线，功能最完整 |
| Claudian + Codex | 想用 OpenAI Codex 处理 Vault、文档和项目上下文的用户 | 可选 Provider，建议先小范围验证 |
| Claudian + OpenCode | 想用开源、多 Provider 或本地模型工作流的用户 | 可选 Provider，建议先小范围验证 |

常用能力：

- 在 Obsidian 右侧打开 AI 聊天侧边栏
- 用 `@` 引用 Vault 笔记、子 Agent、MCP 或外部文件
- 选中文本后进行 Inline Edit，并查看词级 diff
- 用 `/` 调用命令模板
- 用 `$` 调用 Skills
- 用 `Shift + Tab` 切换 Plan Mode
- 用 `#` 添加临时指令
- 多会话、历史记录、fork、resume、compact

## 安装 Claudian

### 方式一：社区插件安装

1. 打开 Obsidian
2. 进入 Settings
3. 打开 Community plugins
4. 如果还在 Restricted mode，先关闭限制模式
5. 点击 Browse
6. 搜索 `Claudian`
7. 点击 Install
8. 安装后点击 Enable

也可以打开 Claudian 的 Obsidian 社区插件页直接安装。

### 方式二：GitHub Release 手动安装

1. 打开 Claudian GitHub Release
2. 下载 `main.js`、`manifest.json`、`styles.css`
3. 在 Vault 中创建插件目录：

```text
/path/to/vault/.obsidian/plugins/claudian/
```

4. 把三个文件复制进去
5. 回到 Obsidian：Settings -> Community plugins -> Enable `Claudian`

### 方式三：源码安装

```bash
cd /path/to/vault/.obsidian/plugins
git clone https://github.com/YishenTu/claudian.git
cd claudian
npm install
npm run build
```

然后在 Obsidian 中启用插件。

## 安装前检查

| 项目 | 建议 |
|------|------|
| Obsidian | 需要桌面版，Claudian 社区页标注兼容 Obsidian 1.7.2+ |
| Vault | 先备份；重要 Vault 建议用 Git 或 Obsidian Sync 做版本管理 |
| 系统 | macOS、Linux、Windows 桌面端 |
| CLI | 至少安装 Claude Code、Codex、OpenCode 中的一个 |
| 网络 | CLI 和 Provider API 要能正常访问 |
| 隐私 | 不要把敏感账号、密钥、验证码、付款信息放进 Agent 可读上下文 |

先在终端测试 CLI 是否可用：

```bash
which claude
which codex
which opencode

claude --version
codex --version
opencode --version
```

Windows 可以用：

```powershell
where.exe claude
where.exe codex
where.exe opencode
```

::: tip GUI App 的 PATH 问题
Obsidian 是图形界面应用，拿到的 `PATH` 可能和你终端里的不同。如果终端能运行 `claude`、`codex`、`opencode`，但 Claudian 找不到命令，通常是 Obsidian 没拿到正确 PATH。可以在 Claudian 设置里指定 CLI 绝对路径，或在 Environment / Custom variables 中补充 PATH。
:::

## 通用工作流

建议把 Vault 先整理成 Agent 友好的结构：

```text
Vault/
  00-Inbox/
  10-Projects/
    How2UseAI/
      context.md
      requirements.md
      decisions.md
      changelog.md
  20-Prompts/
    claude-prompts.md
    codex-prompts.md
    opencode-prompts.md
  90-Archive/
```

推荐流程：

1. 在 `context.md` 写清楚项目背景
2. 用 `@` 明确引用相关笔记
3. 复杂任务先开 Plan Mode
4. 确认计划后再允许 Agent 改笔记
5. Inline Edit 时查看 diff
6. 任务结束后把结果写入 `decisions.md` 或 `changelog.md`

## 配合 Claude 使用

Claudian 的默认 Provider 是 Claude，适合做长文档理解、资料整理、写作编辑、需求拆解和知识库重组。

### 准备 Claude Code

先确认 Claude Code 在终端可用：

```bash
claude --version
```

如果 Claudian 找不到 Claude：

```bash
which claude
dirname $(which claude)
dirname $(which node)
```

如果 `claude` 和 `node` 不在同一个目录，Obsidian 可能找不到 Node.js。解决方式：

- 优先安装 Claude Code 原生版本
- 在 Claudian 设置中填写 Claude CLI path
- 在 Environment / Custom variables 中补充 `PATH=/path/to/node/bin`

Windows 注意：Claudian README 建议不要使用 `.cmd` 或 `.ps1` wrapper。原生安装优先使用 `claude.exe`；包管理器安装可使用对应的 `cli-wrapper.cjs`。

### Claude 适合做什么

| 场景 | 用法 |
|------|------|
| 长文档摘要 | `@` 引用一篇或多篇笔记，让 Claude 提取摘要、关键词、待确认问题 |
| 会议纪要 | 提取决策、行动项、负责人和风险 |
| 笔记改写 | 选中文本，使用 Inline Edit 改成更清晰的 Markdown |
| 知识重组 | 把 `00-Inbox` 中的零散笔记整理成主题页 |
| 写作审查 | 检查事实、逻辑、结构和表达 |
| Prompt 沉淀 | 生成可复用的 Claude Prompt 模板 |

### 推荐提示词

```text
请阅读 @10-Projects/How2UseAI/context.md 和 @10-Projects/How2UseAI/requirements.md。

任务：
- 整理这批笔记的核心目标
- 提取已经确定的决策
- 列出待确认问题
- 生成适合保存回 Obsidian 的 Markdown

要求：
- 不要编造资料中没有的信息
- 不确定内容标记为“待确认”
- 保留原始来源链接
```

### Claude 高级用法

Claudian 支持 Claude 相关的 slash commands、skills、agents 和 MCP 管理。可以在 Vault 中维护这些目录：

```text
.claude/
  commands/
  skills/
  agents/
  mcp.json
```

示例命令：

```text
.claude/commands/summarize-note.md
```

```md
---
description: Summarize current note for Obsidian
---

请总结当前笔记：
- 一句话摘要
- 关键事实
- 待确认问题
- 可行动事项
- 相关笔记建议
```

之后在 Claudian 中用 `/summarize-note` 调用。

## 配合 Codex 使用

Claudian 支持 Codex 作为可选 Provider。它适合把 Obsidian Vault 当作项目上下文来处理：整理任务卡、生成文档、维护技术决策、把知识库内容转成可执行开发 brief。

### 准备 Codex

先确认 Codex CLI 可用：

```bash
codex --version
```

如果需要登录或配置，请先在终端完成 Codex 自身的认证和设置。然后在 Claudian 设置中选择 Codex Provider，必要时填写 Codex CLI 路径。

### Codex 在 Claudian 中适合做什么

| 场景 | 用法 |
|------|------|
| 项目上下文整理 | 根据 Obsidian 笔记生成 `AGENTS.md` 或开发 brief |
| 文档站任务 | 读取需求笔记，生成 VitePress 页面草稿 |
| 决策记录 | 把讨论整理成 ADR / decisions.md |
| 代码任务卡 | 把产品想法拆成目标、约束、验收标准 |
| 复审 | 检查文档是否漏了导航、验证、风险提示 |

### 推荐提示词

```text
请阅读 @10-Projects/How2UseAI/context.md。

目标：
- 把这份 Obsidian 项目笔记整理成适合交给 Codex CLI 的开发任务

输出：
1. 背景
2. 目标
3. 需要修改的文件
4. 不做范围
5. 验收标准
6. 可直接复制给 Codex 的提示词

要求：
- 不要编造文件路径
- 不确定内容写成“待确认”
```

### Codex 支持状态说明

根据 Claudian 项目说明，Codex Provider 是可选集成；插件的通用能力包括聊天、文件读写、搜索、Plan Mode、Inline Edit、`@` 引用、`/` commands、`$` skills 和多会话工作流。实际使用 Codex 时，建议先用测试 Vault 验证你当前系统、安装方式和 CLI 路径是否稳定。

需要注意：

- Codex 在 Claudian 中不等同于完整 Codex App
- Codex 的 MCP 配置由 Codex CLI 自己管理，不是 Claudian 内置管理
- Claudian README 明确提示 Codex、OpenCode、Pi 支持已上线，但部分功能可能仍不完整，需要更多平台和安装方式测试
- 如果遇到行为不一致，先在终端中直接测试 Codex CLI

### Codex Skills 目录

Claudian 项目说明中提到 Codex 相关技能可以出现在：

```text
.codex/skills/*/SKILL.md
.agents/skills/*/SKILL.md
```

适合沉淀：

- 文档审查流程
- 需求拆解流程
- VitePress 页面生成流程
- GitHub PR 描述生成流程

## 配合 OpenCode 使用

Claudian 也支持 OpenCode。OpenCode 适合想用开源、多 Provider、本地模型或自定义模型路由的用户。

### 准备 OpenCode

先在终端确认 OpenCode 可用：

```bash
opencode --version
```

如果还没配置 Provider，先在终端运行：

```bash
opencode
```

进入 TUI 后：

```text
/connect
/models
/init
```

OpenCode 官方文档说明，它通过 AI SDK 和 Models.dev 支持 75+ Provider，也支持本地模型。配置完成后，再回到 Claudian 中选择 OpenCode Provider。

### OpenCode 适合做什么

| 场景 | 用法 |
|------|------|
| 多模型实验 | 用不同 Provider 对同一批笔记做整理或审查 |
| 本地模型工作流 | 使用本地模型处理低敏感度笔记 |
| Prompt 工作台 | 在 Obsidian 中维护 OpenCode Prompt 模板 |
| 轻量文档修改 | 让 OpenCode 修改 Vault 中的 Markdown |
| 技术笔记整理 | 把代码片段、命令、错误日志整理成教程 |

### 推荐提示词

```text
请阅读 @20-Prompts/opencode-prompts.md 和当前笔记。

任务：
- 把当前笔记改写成教程问答
- 保留命令示例
- 增加“常见问题”和“检查清单”
- 不要删除原始事实

完成后：
- 总结你改了哪些段落
- 列出仍需人工确认的问题
```

### OpenCode 注意事项

根据 Claudian README，OpenCode 支持已经可用，但仍需要更多跨平台和安装方式测试。因此建议：

- 先在终端确认 `opencode` 工作正常
- 再在 Claudian 中使用
- 出错时优先检查 CLI 路径、Provider 配置、API Key 和 PATH
- 重要 Vault 不要直接让 OpenCode 批量改全库

## 三种路线怎么选

| 需求 | 推荐 |
|------|------|
| 写作、总结、长文档整理 | Claude |
| 把笔记整理成开发任务、技术文档和工程规则 | Codex |
| 多 Provider、本地模型、开源工作流 | OpenCode |
| 需要最稳定的 Claudian 功能 | Claude |
| 想和 OpenAI / Codex 工作流保持一致 | Codex |
| 想尝试不同模型成本和效果 | OpenCode |

也可以这样分工：

1. Claude 整理原始笔记
2. Codex 生成开发任务 brief
3. OpenCode 用不同模型复审或改写
4. 人工确认后写回长期笔记

## 安全边界

使用 Claudian 前，建议先建一个“AI 工作区”：

```text
Vault/
  00-Inbox/
  10-Projects/
  80-AI-Workspace/
    context.md
    draft.md
    review.md
```

只把当前任务需要的内容复制到 `80-AI-Workspace/`，不要让 Agent 默认处理整个私人 Vault。

不要暴露：

- API Key、Token、Cookie、SSH 私钥
- Apple / Google / OpenAI / Anthropic 账号密码
- 手机验证码、礼品卡兑换码、付款资料
- 客户隐私、合同、财务信息
- 公司内部未公开资料

Claudian README 明确说明，发送给 API 的内容包括你的输入、附件、图片和工具调用输出；本地也会保存设置和会话元数据。使用前要理解你的数据会流向哪个 Provider。

## 建议加入 .gitignore

如果你的 Vault 用 Git 管理，建议谨慎处理这些目录：

```text
.claudian/
.claude/
.codex/
.agents/
```

是否忽略要看你的用法：

| 目录 | 建议 |
|------|------|
| `.claudian/` | 通常包含插件设置和会话元数据，个人 Vault 可忽略 |
| `.claude/commands/` | 如果是团队共享命令，可以提交 |
| `.claude/skills/` | 如果是团队共享技能，可以提交 |
| `.claude/mcp.json` | 可能含本机路径或敏感配置，提交前检查 |
| `.codex/skills/` | 可提交通用技能，不提交密钥 |
| `.agents/skills/` | 可提交通用技能，不提交私密内容 |

最稳的做法是：命令、技能、Agent 定义可以共享；会话、路径、凭证、个人设置不要共享。

## 常见问题

### Claudian 找不到 Claude / Codex / OpenCode 怎么办？

先在终端执行：

```bash
which claude
which codex
which opencode
```

如果终端能找到，Obsidian 找不到，通常是 GUI PATH 问题。去 Claudian 设置中填写 CLI 绝对路径，或在 Environment / Custom variables 里添加 PATH。

### Claude CLI works in shell，但 Claudian 里不响应怎么办？

常见原因：

- Obsidian 没拿到终端里的环境变量
- Node.js 和 CLI 不在同一目录
- 使用了 nvm / fnm / volta，GUI App 无法解析路径
- 第三方兼容 Provider 的环境变量没有传给 Obsidian

先把 Claude CLI path 留空让 Claudian 自动检测；不行再手动指定路径，并补充 PATH / API 环境变量。

### Codex 和 OpenCode 支持是否完整？

Claudian README 说明 Codex、OpenCode、Pi 支持已经上线，但部分功能仍可能不完整，需要更多平台和安装方式测试。重要工作建议先在小 Vault 或测试笔记中验证。

### 能不能让 Agent 扫整个 Vault？

技术上可以，但不建议。更好的方式是用 `@` 明确引用当前任务需要的笔记，或者把相关内容复制到 `80-AI-Workspace/`。

### Inline Edit 安全吗？

Inline Edit 会显示词级 diff，但仍要人工确认。不要在没有检查 diff 的情况下批量接受改动。

### MCP 怎么用？

Claudian README 说明 Claude 可以在应用内管理 Vault MCP；Codex 使用自己的 CLI MCP 配置。OpenCode 则按 OpenCode 自己的 Provider / MCP / 配置体系处理。不要假设三个 Provider 的 MCP 管理方式完全一致。

## 推荐实践

1. 重要 Vault 先备份
2. 先用 Claude 跑通基础流程
3. 再尝试 Codex 和 OpenCode
4. 每次只让 Agent 处理少量明确笔记
5. 复杂任务先 Plan，再改文件
6. 使用 Inline Edit 时一定看 diff
7. 把高频流程沉淀成 `/` commands 或 `$` skills
8. 把可复用 Prompt 写回 Obsidian
9. 不把密钥和验证码放进 Vault
10. 出错时先回到终端验证 CLI 本身是否可用

## 相关链接

- [Claudian Obsidian 社区插件页](https://community.obsidian.md/plugins/realclaudian)
- [Claudian GitHub 仓库](https://github.com/YishenTu/claudian)
- [Claude Code](/ai-tools/claude-code)
- [OpenAI Codex](/ai-tools/codex)
- [OpenCode 教程问答](/ai-tools/opencode)
- [Obsidian + Claude 工作流指南](/knowledge/obsidian-claude)
- [Obsidian + Codex 工作流指南](/knowledge/obsidian-codex)
- [OpenCode 官方文档](https://opencode.ai/docs/)
- [Claude Code 官方文档](https://code.claude.com/docs/en/overview)
- [Codex Manual](https://developers.openai.com/codex/codex-manual.md)
