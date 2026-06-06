# OpenCode 教程问答

OpenCode 是一个开源 AI 编程 Agent，可以在终端、桌面应用或 IDE 中使用。它适合想要“本地项目 + 多模型 Provider + 命令行工作流”的开发者：你可以让它阅读代码、解释项目、制定计划、修改文件、执行任务、撤销改动，并通过配置接入不同模型。

这篇文档用问答方式组织，适合快速查找。

## 一页看懂

| 问题 | 简短答案 |
|------|----------|
| OpenCode 是什么？ | 开源 AI coding agent，主打终端 TUI，也有桌面和 IDE 入口 |
| 需要什么账号？ | 需要可用的大模型 Provider，例如 OpenCode Zen、OpenAI、Anthropic、Google、xAI、DeepSeek、Moonshot、本地模型等 |
| 怎么安装？ | 推荐官方安装脚本，也可用 npm、Bun、pnpm、Yarn、Homebrew、Chocolatey、Scoop、Docker 等 |
| Windows 能用吗？ | 能用，但官方推荐 WSL，兼容性和体验更好 |
| 怎么初始化项目？ | 在项目目录运行 `opencode`，进入 TUI 后执行 `/init`，生成 `AGENTS.md` |
| 怎么选模型？ | 用 `/connect` 添加 Provider，用 `/models` 选择模型，也可以写 `opencode.json` |
| 能撤销 AI 改动吗？ | 可以，用 `/undo`；也建议配合 Git 分支和 `git diff` |
| 适合谁？ | 喜欢终端、想用多模型、需要开源工具链、想自定义 Agent/命令/Provider 的用户 |

## OpenCode 和 Codex / Claude Code 有什么区别？

| 工具 | 定位 | 适合场景 |
|------|------|----------|
| OpenCode | 开源 AI coding agent，支持多 Provider 和本地模型 | 想要开源、多模型、强配置、终端优先 |
| OpenAI Codex | OpenAI 的编程 Agent，覆盖 Web、桌面、CLI、IDE 和云任务 | 已经使用 ChatGPT / OpenAI 生态，想要云端任务、代码审查和本地协作 |
| Claude Code | Anthropic 官方 CLI 编程 Agent | 主要使用 Claude 模型，重视长上下文和终端工作流 |
| Cursor | AI 编辑器 | 喜欢图形界面和 VS Code 风格的用户 |

::: tip 选择建议
如果你想要“一个开源外壳，里面接不同模型”，OpenCode 很适合；如果你已经重度使用 ChatGPT，可以优先看 Codex；如果你主要使用 Claude，则 Claude Code 更直接。
:::

## 安装前需要准备什么？

官方文档提到，终端使用 OpenCode 需要：

- 一个现代终端，例如 WezTerm、Alacritty、Ghostty、Kitty 等
- 至少一个可用的大模型 Provider 或 OpenCode Zen
- 一个代码项目目录
- 建议提前安装 Git，方便查看和回退 AI 改动

推荐基础工具：

```bash
git --version
node --version
npm --version
```

## 怎么安装 OpenCode？

### 方式一：官方安装脚本

```bash
curl -fsSL https://opencode.ai/install | bash
```

安装后检查：

```bash
opencode --version
```

::: warning 运行脚本前先确认来源
`curl | bash` 很方便，但本质上是在本机执行远程脚本。只从官方域名复制命令，不要运行来路不明的安装脚本。
:::

### 方式二：npm

```bash
npm install -g opencode-ai
```

### 方式三：Bun / pnpm / Yarn

```bash
bun install -g opencode-ai
pnpm install -g opencode-ai
yarn global add opencode-ai
```

### 方式四：Homebrew

官方文档推荐使用 OpenCode 自己的 tap 获取更新版本：

```bash
brew install anomalyco/tap/opencode
```

### 方式五：Windows

官方文档建议 Windows 用户优先使用 WSL：

```bash
npm install -g opencode-ai
```

也可以用 Chocolatey 或 Scoop：

```powershell
choco install opencode
scoop install opencode
```

::: tip Windows 建议
如果项目本身是 Node.js、Python、Go、Rust 等开发项目，优先把仓库放在 WSL 的 Linux 文件系统里，例如 `~/code/project`，不要放在 `/mnt/c/...` 里反复跨文件系统读写。
:::

## 第一次怎么启动？

进入项目目录：

```bash
cd /path/to/project
opencode
```

进入 OpenCode TUI 后，先执行：

```text
/init
```

`/init` 会分析项目并创建 `AGENTS.md`。这个文件会告诉 OpenCode 项目结构、编码规范、常用命令和注意事项。

建议把 `AGENTS.md` 提交进 Git：

```bash
git add AGENTS.md
git commit -m "chore: add agent instructions"
```

## AGENTS.md 应该写什么？

可以从这个模板开始：

```md
# AGENTS.md

## 项目概览

- 这是一个 VitePress 文档项目。
- 文档源码在 `docs/`。
- VitePress 配置在 `docs/.vitepress/config.mts`。

## 常用命令

- 启动服务：`npm run docs:dev`
- 构建验证：`npm run docs:build`

## 工作规则

- 修改文档后运行 `npm run docs:build`。
- 新增页面后同步更新侧边栏。
- 不提交 `.env`、API Key、账号、验证码、付款信息。
- 不做无关重构。

## 完成标准

- 构建通过。
- 页面可以从导航访问。
- 最终说明修改了哪些文件和验证结果。
```

## 怎么连接模型 Provider？

在 TUI 里执行：

```text
/connect
```

然后选择 Provider，输入 API Key 或按页面提示登录。官方文档说明 OpenCode 支持 75+ LLM Providers，也支持本地模型。

连接后选择模型：

```text
/models
```

常见 Provider：

| Provider | 适合谁 |
|----------|--------|
| OpenCode Zen | 新手，想用 OpenCode 团队测试过的模型组合 |
| OpenAI | 已经有 OpenAI API 或想用 GPT 系列模型 |
| Anthropic | 想用 Claude 系列模型 |
| Google | 想用 Gemini 系列模型 |
| xAI | 想用 Grok 系列模型 |
| DeepSeek / Qwen / Z.AI 等 | 想尝试其他模型或更低成本方案 |
| 本地模型 | 需要本地运行或离线实验 |

## OpenCode 支持哪些模型？

先说结论：OpenCode 不是只绑定某一个模型。官方文档说明它通过 AI SDK 和 Models.dev 支持 75+ LLM Provider，也支持本地模型。实际能否使用，取决于你选择的 Provider、账号地区、API Key、余额、模型权限，以及 `/models` 中当前显示的列表。

OpenCode 的模型写法通常是：

```text
provider_id/model_id
```

例如：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "openai/gpt-5.1-codex"
}
```

::: tip 选模型不要只看名气
OpenCode 是编程 Agent，核心能力依赖代码理解、工具调用、长上下文、指令遵循和改文件稳定性。模型很强不代表一定适合 Agent 工作流；优先选择官方推荐、支持 tool calling、适合 coding 的模型。
:::

### 官方推荐的代表模型

OpenCode 官方模型页当前列出的推荐示例包括：

| 模型 | 适合场景 |
|------|----------|
| GPT 5.2 | 综合能力强，适合复杂代码理解、架构调整和多步骤任务 |
| GPT 5.1 Codex | 偏代码 Agent 工作流，适合实现、修复、重构和测试 |
| Claude Opus 4.5 | 高质量推理、复杂需求拆解和长上下文任务 |
| Claude Sonnet 4.5 | 代码、文档、速度和成本比较均衡 |
| MiniMax M2.1 | 成本和可用性友好，适合尝试国产模型路线 |
| Gemini 3 Pro | 适合多模态、长上下文和复杂推理任务 |

这个列表不是完整清单，也会随 OpenCode 和各 Provider 更新变化。最终以 `/models` 里实际可选项为准。

### 国外顶尖闭源模型

| Provider | 代表模型 ID / 名称 | 适合场景 |
|----------|--------------------|----------|
| OpenAI | `openai/gpt-5.2`、`openai/gpt-5.1-codex`、`openai/gpt-5-codex`、`openai/o3`、`openai/o4-mini` | 编程 Agent、复杂修复、测试生成、代码审查 |
| Anthropic | `anthropic/claude-opus-4-5`、`anthropic/claude-sonnet-4-5`、`anthropic/claude-sonnet-4-6`、`anthropic/claude-haiku-4-5` | 长上下文、需求拆解、代码理解、文档重构 |
| Google | `google/gemini-3-pro-preview`、`google/gemini-3-flash-preview`、`google/gemini-2.5-pro`、`google/gemini-2.5-flash` | 长上下文、多模态、快速迭代和综合任务 |
| xAI | `xai/grok-4.3`、`xai/grok-4.20-0309-reasoning`、`xai/grok-build-0.1` | Grok 工作流、推理任务、代码实验 |
| Mistral | `mistral/mistral-large-latest`、`mistral/mistral-medium-latest`、`mistral/codestral-latest`、`mistral/devstral-medium-latest` | 欧洲 Provider、代码模型、开源/商用混合路线 |

选择建议：

- 追求代码 Agent 综合效果：优先 GPT Codex、Claude Sonnet / Opus、Gemini Pro
- 追求速度和成本：看 Mini / Flash / Haiku / Medium 级别模型
- 追求特定生态：OpenAI 选 GPT / Codex，Anthropic 选 Claude，Google 选 Gemini

### 国内大模型

OpenCode Provider 目录中已经列出 DeepSeek、Moonshot AI、MiniMax、Z.AI 等 Provider；Qwen / 通义千问通常可以通过支持它的 Provider、聚合平台、本地模型或 OpenAI-compatible 自定义 Provider 接入。常见模型可以这样理解：

| 模型厂商 / 系列 | 代表模型 ID / 名称 | 适合场景 |
|-----------------|--------------------|----------|
| DeepSeek | `deepseek/deepseek-v4-pro`、`deepseek/deepseek-v4-flash`、`deepseek/deepseek-r1`、`deepseek/deepseek-reasoner`、`deepseek/deepseek-chat` | 中文代码任务、推理、性价比路线 |
| 阿里 Qwen / 通义千问 | `alibaba/qwen3-coder-plus`、`alibaba/qwen3-coder-480b-a35b-instruct`、`alibaba/qwen3-max`、`alibaba/qwen3-235b-a22b`、`alibaba/qwen3-next-80b-a3b-thinking` | 中文技术文档、代码生成、开源/本地部署路线 |
| Moonshot / Kimi | `moonshotai/kimi-k2-thinking`、`moonshotai/kimi-k2-thinking-turbo`、`moonshotai/kimi-k2.6`、`moonshotai/kimi-k2.5` | 长上下文、中文资料整理、复杂推理 |
| MiniMax | `minimax/MiniMax-M2.1`、`minimax/MiniMax-M2.5`、`minimax/MiniMax-M2.7`、`minimax/MiniMax-M3` | 成本友好的 Agent 实验、中文和代码混合任务 |
| Z.AI / GLM | `zhipuai/glm-4.7`、`zhipuai/glm-4.7-flash`、`zhipuai/glm-5`、`zhipuai/glm-5.1`、`zhipuai/glm-4.5-air` | GLM 生态、中文任务、代码计划和实现 |

::: warning 国内模型接入注意
不要只按模型名字配置。不同 Provider 的模型 ID 可能不同，同一个模型也可能通过直连 API、聚合平台、本地推理、OpenAI-compatible 网关暴露成不同 ID。实际填写 `opencode.json` 前，先在 OpenCode 里执行 `/connect` 和 `/models`，以当前列表为准。
:::

其他国内模型，例如百度文心、腾讯混元、百川、零一万物 Yi、阶跃星辰、商汤日日新等，如果提供 OpenAI-compatible API，理论上可以按 OpenCode 的 Custom provider 方式配置；但是否适合 OpenCode 的代码 Agent 工作流，要看它们是否支持工具调用、流式输出、长上下文和稳定的代码能力。

### 开源 / 开放权重模型

OpenCode 可以通过 Ollama、LM Studio、llama.cpp、本地 OpenAI-compatible 服务，或 Hugging Face、Together AI、Fireworks、NVIDIA、Deep Infra、OpenRouter 等托管 Provider 使用开放模型。

| 模型系列 | 代表模型 | 常见接入方式 |
|----------|----------|--------------|
| DeepSeek 开放模型 | DeepSeek-R1、DeepSeek Chat、DeepSeek Reasoner、DeepSeek V4 Flash / Pro | DeepSeek、Ollama、LM Studio、OpenRouter、Deep Infra、本地推理 |
| Qwen 开放模型 | Qwen3 Coder、Qwen3 235B-A22B、Qwen3 Next、Qwen VL、Qwen Coder Flash | 本地推理、Cerebras、OpenRouter、STACKIT、Hugging Face、聚合 Provider |
| Kimi K2 | Kimi K2 Thinking、Kimi K2 Thinking Turbo、Kimi K2.5 / K2.6 | Moonshot AI、OpenRouter、Nebius、托管推理平台 |
| MiniMax 开放模型 | MiniMax M2、M2.1、M2.5、M2.7 | MiniMax、OpenRouter、托管推理平台 |
| Meta Llama | Llama 4 Maverick、Llama 4 Scout、Llama 3.3 70B Instruct | Ollama、LM Studio、Hugging Face、Together AI、Groq、Deep Infra |
| Mistral / Devstral / Codestral | Mistral Large、Mistral Small、Devstral、Codestral、Pixtral | Mistral、Ollama、LM Studio、OpenRouter、Together AI |
| Google Gemma | Gemma 4 31B IT、Gemma 4 26B A4B IT | Ollama、LM Studio、Google、Hugging Face |
| OpenAI gpt-oss | gpt-oss-120b、gpt-oss-20b / Ollama Cloud 版本 | Ollama Cloud、OVHcloud、Scaleway、DigitalOcean 等 |
| NVIDIA Nemotron | nemotron-3-super-120b-a12b 等 | NVIDIA、NIM、本地或企业内部署 |

本地模型常见三种跑法：

| 方式 | 适合谁 | OpenCode 配置重点 |
|------|--------|-------------------|
| Ollama | 新手、本地快速试模型 | `baseURL` 常见为 `http://localhost:11434/v1` |
| LM Studio | 想用图形界面下载和管理模型 | `baseURL` 常见为 `http://127.0.0.1:1234/v1` |
| llama.cpp | 想要更底层、轻量、可控的本地推理 | 使用 `llama-server` 提供 OpenAI-compatible endpoint |

::: tip 本地模型的现实预期
本地模型更适合隐私敏感、低成本、可控实验；但代码 Agent 任务需要稳定 tool calling 和足够上下文。用 Ollama 时，如果工具调用不稳定，可以按官方建议增大 `num_ctx`，先从 16k 到 32k 级别测试。
:::

### 简单选择建议

| 需求 | 优先选择 |
|------|----------|
| 最强代码实现和重构 | GPT Codex、Claude Sonnet / Opus、Gemini Pro |
| 中文代码和文档 | DeepSeek、Qwen Coder、Kimi K2、GLM、MiniMax |
| 长上下文资料整理 | Claude、Gemini、Kimi |
| 成本敏感 | MiniMax、DeepSeek、Qwen、Flash / Mini / Haiku 级模型 |
| 本地隐私 | Ollama / LM Studio + Qwen、DeepSeek、Llama、Mistral、Gemma |
| 企业合规 | Azure OpenAI、Google Vertex AI、Amazon Bedrock、Snowflake Cortex、私有 OpenAI-compatible 网关 |

::: warning API Key 安全
OpenCode 用 `/connect` 添加 Provider 凭证时，官方文档说明凭证会保存在本机用户目录下。不要把本机凭证文件、`.env` 或 API Key 提交到 Git。
:::

## 配置文件放在哪里？

OpenCode 使用 JSON / JSONC 配置。

常见位置：

| 位置 | 作用 |
|------|------|
| `~/.config/opencode/opencode.json` | 全局配置，适合主题、默认模型、通用偏好 |
| 项目根目录 `opencode.json` | 项目配置，适合项目专用模型、命令、权限 |
| `.opencode/` | 放自定义 agents、commands、plugins、skills、tools、themes 等 |

示例：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "autoupdate": true
}
```

配置建议：

- 个人偏好写全局配置
- 项目规则写项目配置
- 具体工程约定写 `AGENTS.md`
- 密钥不要写进项目配置

## Plan 模式和 Build 模式怎么用？

OpenCode 内置两种主要 Agent：Plan 和 Build。官方文档说明可以用 `Tab` 在主 Agent 间切换。

| 模式 | 适合做什么 |
|------|------------|
| Plan | 让 OpenCode 先读代码、拆方案、列步骤，不直接改文件 |
| Build | 根据已经确认的方案实际修改文件、执行命令 |

推荐流程：

1. 先切到 Plan
2. 描述需求，让 OpenCode 给方案
3. 你补充约束和边界
4. 确认方案
5. 切到 Build
6. 让 OpenCode 修改
7. 用 Git 检查 diff
8. 运行测试或构建

示例：

```text
请先进入计划模式，阅读项目结构，告诉我新增 OpenCode 教程应该放在哪个栏目、需要改哪些文件、如何验证。
```

确认后：

```text
方案可以，开始实现。请新增页面、更新侧边栏和工具概览，完成后运行构建。
```

## 怎么让 OpenCode 看指定文件？

官方文档提到，可以使用 `@` 来模糊搜索并引用项目文件。

示例：

```text
请阅读 @docs/.vitepress/config.mts 和 @docs/ai-tools/index.md，帮我新增一个 OpenCode 页面入口。
```

这样比让模型“自己猜文件在哪里”更稳定。

## 怎么让 OpenCode 修改代码？

给它明确的目标、上下文、约束和完成标准。

示例：

```text
目标：
- 新增 OpenCode 教程问答页面
- 更新 AI 工具侧边栏和工具概览

上下文：
- 文档目录在 docs/
- AI 工具配置在 docs/.vitepress/config.mts

约束：
- 保持现有中文文档风格
- 不改无关页面
- 不提交密钥或账号信息

完成标准：
- npm run docs:build 通过
- /ai-tools/opencode 能访问
```

## 怎么撤销 OpenCode 的改动？

OpenCode TUI 内可以用：

```text
/undo
```

也可以用：

```text
/redo
```

但更稳的做法是配合 Git：

```bash
git status
git diff
```

如果确定要丢弃某个文件改动：

```bash
git restore path/to/file
```

::: warning 不要盲目回退
先看 `git diff`，确认要丢弃的内容，再使用 `git restore`。不要随便执行 `git reset --hard`。
:::

## 怎么创建自定义命令？

OpenCode 支持自定义命令。官方文档说明，可以在 `commands/` 目录创建 Markdown 文件。

项目内示例：

```text
.opencode/commands/build-docs.md
```

内容：

```md
---
description: Build VitePress docs
---

Run `npm run docs:build`.
If it fails, explain the error and propose a minimal fix.
```

之后在 TUI 中可以执行：

```text
/build-docs
```

适合沉淀这些重复任务：

- `/review-docs`
- `/run-tests`
- `/build-docs`
- `/summarize-diff`
- `/fix-lint`

## Agents 和 Subagents 是什么？

OpenCode 有主 Agent 和子 Agent。

| 类型 | 说明 |
|------|------|
| Primary agents | 你直接交互的主助手，例如 Build、Plan |
| Subagents | 专门处理特定任务的助手，可以被主 Agent 调用，也可以用 `@` 手动提到 |

使用建议：

- 新手先用内置 Plan / Build
- 熟悉后再配置专门的 review、docs、test、security agent
- 不要一开始就堆很多 agent，容易把工作流搞复杂

## 怎么和 Git 配合？

AI 编程 Agent 必须配 Git。

任务开始前：

```bash
git status
git switch -c feature/opencode-docs
```

OpenCode 修改后：

```bash
git diff
npm run docs:build
```

确认后提交：

```bash
git add docs/ai-tools/opencode.md docs/.vitepress/config.mts docs/ai-tools/index.md
git commit -m "docs: add opencode guide"
```

## 怎么和 Obsidian 配合？

推荐把 Obsidian 当作 OpenCode 的任务 Brief 库：

```md
# OpenCode 任务卡

## 背景

## 目标

## 相关文件

## 不做范围

## 验收标准

## 可复制给 OpenCode 的提示词
```

然后只把精简后的任务上下文给 OpenCode，不要把整个私人 Vault 暴露给工具。

## 常见问题

### OpenCode 免费吗？

OpenCode 本身是开源工具，但模型调用通常需要 Provider 的 API Key 或订阅/账单。工具免费不等于模型调用免费。

### OpenCode 支持哪些模型？

官方文档说明它通过 AI SDK 和 Models.dev 支持 75+ Provider，并支持本地模型。上面的“OpenCode 支持哪些模型？”章节已经按国外顶尖模型、国内大模型、开源/开放权重模型列出代表清单；实际可用项仍以 `/models` 当前显示为准。

### OpenCode 能用 ChatGPT Plus / Pro 吗？

OpenCode 官网介绍中提到支持登录 OpenAI 使用 ChatGPT Plus / Pro 账号能力，但具体可用性、地区和额度以 OpenCode 当前登录页和你的账号实际显示为准。更稳定的方式通常是配置 Provider API Key。

### OpenCode 和 OpenAI Codex 是同一个东西吗？

不是。OpenCode 是开源 AI coding agent；OpenAI Codex 是 OpenAI 的编程 Agent 产品。两者都能辅助编程，但账号体系、配置方式、模型接入和生态不同。

### 为什么安装后命令找不到？

常见原因：

- 终端没有重新打开
- npm global bin 目录不在 `PATH`
- Homebrew 路径没有加入 shell 配置
- Windows 在 PowerShell 和 WSL 里安装到了不同环境

排查：

```bash
which opencode
opencode --version
echo $PATH
```

### 为什么 `/connect` 后还是不能用模型？

可能原因：

- API Key 输错
- Provider 账号没有余额
- 模型没有权限
- 配置中的 provider ID 和 `/connect` 使用的不一致
- 网络无法访问 Provider API

可以重新执行：

```text
/connect
/models
```

### OpenCode 会不会自动上传我的代码？

OpenCode 需要把必要上下文发给你选择的模型 Provider 才能生成回答或改代码；本地工具本身不等于完全离线。若使用本地模型，则可以减少外发，但工具、插件和配置仍要自己确认。不要把密钥、客户隐私和敏感数据交给不该访问的模型或 Provider。

### 适合在公司项目里用吗？

可以评估，但要先看公司政策：

- 是否允许使用外部 AI 工具
- 是否允许代码发送给外部模型 Provider
- 是否要求企业账号、审计、代理或私有部署
- 是否禁止上传客户数据和密钥

公司项目优先使用受批准的模型、账号和网络环境。

## 推荐新手流程

1. 安装 OpenCode
2. 进入一个 Git 状态干净的项目
3. 执行 `opencode`
4. 用 `/connect` 配置 Provider
5. 用 `/models` 选择模型
6. 执行 `/init` 生成 `AGENTS.md`
7. 先让它解释项目
8. 再让它 Plan
9. 确认后 Build
10. 用 `git diff` 和测试/构建验证

## 检查清单

开始前：

- [ ] 项目已初始化 Git
- [ ] 当前 `git status` 可控
- [ ] 已配置 Provider 或 OpenCode Zen
- [ ] 已生成或维护 `AGENTS.md`
- [ ] 没有把密钥写入项目文件

执行中：

- [ ] 复杂任务先 Plan 再 Build
- [ ] 明确目标、上下文、约束和完成标准
- [ ] 用 `@` 指定重要文件
- [ ] OpenCode 修改后检查 `git diff`

完成后：

- [ ] 运行测试或构建
- [ ] 提交有意义的 commit
- [ ] 把可复用 Prompt 写回 Obsidian 或项目文档
- [ ] 清理临时文件和敏感信息

## 相关链接

- [OpenCode 官方文档](https://opencode.ai/docs/)
- [OpenCode 配置文档](https://opencode.ai/docs/config)
- [OpenCode Providers](https://opencode.ai/docs/providers/)
- [OpenCode Models](https://opencode.ai/docs/models/)
- [Models.dev](https://models.dev/)
- [OpenCode Commands](https://opencode.ai/docs/commands/)
- [OpenCode Agents](https://opencode.ai/docs/agents/)
- [OpenCode GitHub 仓库](https://github.com/opencode-ai/opencode)
- [Git 使用教程](/terminal/git)
- [OpenAI Codex](/ai-tools/codex)
- [Claude Code](/ai-tools/claude-code)
