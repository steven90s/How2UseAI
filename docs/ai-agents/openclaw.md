# OpenClaw

OpenClaw 是一个免费开源的 **个人 AI 智能体（AI Agent）平台**，它不只是一个对话助手——它能主动操作你的电脑系统、访问网页、处理邮件、整理文件、自动编写代码，真正做到「你说，它做」。

OpenClaw 由奥地利开发者 Peter Steinberger 开发，最初在 2025 年 11 月以 Clawdbot 的名字发布，后因商标问题先后更名为 Moltbot 和 OpenClaw。截至 2026 年 3 月，项目在 GitHub 上已有超过 24 万 Star，是 2026 年最火的开源 AI 项目之一。

## 核心特点

- **本地优先**：运行在你自己的电脑上，数据不上传到云端
- **真正的 Agent**：不只回答问题，能主动执行终端命令、读写文件、运行代码、控制浏览器
- **多平台聊天**：通过 WhatsApp、Telegram、Discord、Signal 等消息平台交互
- **Web UI**：内置网页聊天界面，无需绑定任何消息平台也能使用
- **多模型支持**：支持 Claude、GPT、Gemini、DeepSeek、本地 Ollama 等多种大模型
- **技能生态**：500+ 社区技能，通过 ClawHub 一键安装
- **跨对话记忆**：自动记录你的偏好和上下文，长期记忆持久化
- **完全开源**：MIT 许可证，可自由使用和修改

## 与其他 AI 工具的区别

| 能力 | OpenClaw | Claude Code | Codex CLI |
|------|----------|-------------|-----------|
| 定位 | 通用 AI 智能体 | 编程 AI 助手 | 编程 AI 助手 |
| 任务规划 | 自动拆解并执行 | 交互式确认 | 三种模式可选 |
| 系统操作 | 完整（文件、浏览器、邮件等） | 终端和文件操作 | 终端和文件操作 |
| 自我修复 | 支持（执行失败自动重试） | 不支持 | 不支持 |
| 消息平台集成 | WhatsApp、Telegram 等 | 无 | 无 |
| 本地自动化 | 原生支持 | 有限 | 有限 |
| 开源 | 是（MIT） | 否 | 是（Apache 2.0） |

简单来说：**Claude Code 和 Codex 专注于编程**，而 **OpenClaw 是一个通用的 AI 自动化平台**，编程只是它能力的一部分。

## 安装

### 前置要求

- **Node.js** 22 或更高版本
- **操作系统**：macOS、Linux、Windows

### 方式一：一键安装脚本（推荐）

**macOS / Linux：**

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows（PowerShell）：**

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

脚本会自动安装 OpenClaw 并引导你完成初始化配置。

### 方式二：npm 安装

```bash
# 使用 npm
npm install -g openclaw

# 或使用 pnpm
pnpm add -g openclaw
```

安装完成后运行初始化向导：

```bash
openclaw onboard
```

### 方式三：源码安装（开发模式）

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install
pnpm ui:build
pnpm build
pnpm openclaw onboard --install-daemon
```

## 初始化配置

安装后执行 `openclaw onboard` 会启动一个交互式设置向导，依次配置以下内容：

### 第一步：安全确认

OpenClaw 会提示你它拥有系统操作权限（执行命令、读写文件等），需要确认同意。

### 第二步：选择大模型

OpenClaw 本身不包含大模型，需要接入外部 LLM。支持的模型包括：

| 模型 | 说明 |
|------|------|
| Claude（Anthropic） | 推荐，Agent 能力最强 |
| GPT-4.1 / o4-mini（OpenAI） | 通用能力强 |
| Gemini（Google） | 免费额度较多 |
| DeepSeek | 性价比高，国内可直连 |
| 智谱 GLM | 国内服务，延迟低 |
| Ollama 本地模型 | 完全离线，隐私最佳 |

选择模型后输入对应的 API Key 即可。

### 第三步：选择聊天通道

OpenClaw 通过消息平台作为交互界面，你可以选择：

- **Web UI（默认）**：内置网页聊天界面，无需额外配置
- **WhatsApp**：通过扫码绑定
- **Telegram**：通过 Bot Token 接入
- **Discord**：通过 Bot Token 接入
- **Slack**：通过 App 接入

::: tip 提示
如果你不使用任何消息平台，选择 Web UI 即可。后续随时可以添加更多通道。
:::

### 第四步：选择技能

OpenClaw 的能力通过「技能（Skills）」扩展。初始化时可以从推荐列表中选择常用技能，也可以稍后通过 ClawHub 安装。

### 第五步：启动

配置完成后，OpenClaw 会自动启动网关服务，并打开 Web UI：

```
http://127.0.0.1:18789/chat
```

## 基本使用

### 启动与停止

```bash
# 启动 OpenClaw 网关
openclaw gateway start

# 停止
openclaw gateway stop

# 重启
openclaw gateway restart

# 查看运行状态
openclaw status
```

### Web UI 使用

启动后访问 `http://127.0.0.1:18789/chat`，直接在网页中与 OpenClaw 对话。

### 通过消息平台使用

如果你配置了 WhatsApp、Telegram 等通道，直接在对应的 App 中给 OpenClaw 发消息即可，它会自动在你的电脑上执行任务。

### 常用对话示例

**系统操作：**

```
> 帮我整理一下桌面上的文件，按文件类型分类到不同文件夹
> 查看一下现在哪些进程占用了最多内存
> 把 Downloads 文件夹里超过 30 天的文件移到回收站
```

**编程开发：**

```
> 在当前项目创建一个 Express API，实现用户的增删改查
> 分析 src 目录下所有 TypeScript 文件，找出没有被使用的导出
> 帮我把这个项目的 ESLint 配置从 v8 迁移到 v9
```

**信息处理：**

```
> 帮我调研一下 2026 年主流的前端框架，整理成对比表格
> 把这个网页的内容总结成中文摘要：[URL]
> 读取 report.pdf 并提取关键数据，生成一份 Markdown 报告
```

**日常自动化：**

```
> 每天早上 9 点帮我查看 GitHub 上的 PR 通知，发一份摘要给我
> 监控 server.log 文件，如果出现 ERROR 关键字立即通知我
> 帮我把这 20 张图片批量压缩到 500KB 以下
```

## 聊天内命令

在对话中可以使用斜杠命令：

| 命令 | 说明 |
|------|------|
| `/status` | 查看当前状态和上下文信息 |
| `/model <模型名>` | 切换大模型 |
| `/new` | 开启新会话 |
| `/stop` | 终止当前正在执行的任务 |
| `/context list` | 查看当前上下文 |
| `/think` | 切换深度推理模式 |
| `/tts on\|off` | 开启/关闭语音合成 |

## 终端命令

| 命令 | 说明 |
|------|------|
| `openclaw status` | 查看网关运行状态 |
| `openclaw health` | 健康检查 |
| `openclaw doctor` | 综合诊断与自动修复 |
| `openclaw gateway start/stop/restart` | 管理网关服务 |
| `openclaw logs --follow` | 实时查看日志 |
| `openclaw config get/set <key>` | 查看/修改配置 |
| `openclaw channels list` | 查看已连接的聊天通道 |
| `openclaw channels add --channel telegram` | 添加新的聊天通道 |
| `openclaw skills list` | 查看已安装的技能 |
| `openclaw models list` | 查看可用的大模型 |
| `openclaw memory search "关键词"` | 搜索记忆库 |
| `openclaw memory index` | 重建记忆索引 |
| `openclaw plugins list` | 查看已安装插件 |
| `openclaw plugins install @openclaw/voice-call` | 安装插件 |
| `openclaw dashboard` | 打开网页控制面板 |
| `openclaw uninstall --all --yes` | 完全卸载 |

## 技能系统（ClawHub）

OpenClaw 的能力通过「技能」扩展，社区已有 500+ 技能可供安装。技能通过 **ClawHub** 管理，类似于 npm 之于 Node.js。

### 安装 ClawHub

```bash
npm install -g clawhub
clawhub login
```

### 常用操作

```bash
# 搜索技能
clawhub search "postgres backups"

# 安装技能
clawhub install my-skill-pack

# 更新所有技能
clawhub update --all
```

### 热门技能分类

| 分类 | 技能示例 |
|------|---------|
| 开发工具 | Git 操作、代码审查、CI/CD 管理 |
| 文件处理 | PDF 解析、图片压缩、文件格式转换 |
| 网络操作 | 网页抓取、API 调用、网站监控 |
| 办公自动化 | 邮件处理、日历管理、文档生成 |
| 数据处理 | 数据库查询、CSV 分析、数据可视化 |
| 系统管理 | 进程管理、磁盘清理、日志分析 |

技能仓库地址：[clawhub.ai](https://clawhub.ai/)

## 记忆系统

OpenClaw 具备跨对话的长期记忆能力，通过以下文件实现：

| 文件 | 位置 | 作用 |
|------|------|------|
| `MEMORY.md` | `~/.openclaw/workspace/` | 长期记忆库，存储跨对话的重要信息 |
| `USER.md` | `~/.openclaw/workspace/` | 用户偏好设置（语言、风格等） |
| `SOUL.md` | `~/.openclaw/workspace/` | AI 人格与语气配置 |
| `IDENTITY.md` | `~/.openclaw/workspace/` | 名称与主题设定 |
| `HEARTBEAT.md` | `~/.openclaw/workspace/` | 定时检查清单与周期任务 |
| `BOOT.md` | `~/.openclaw/workspace/` | 启动时执行的初始化配置 |
| `AGENTS.md` | `~/.openclaw/workspace/` | 智能体的指令说明 |

你可以直接编辑这些 Markdown 文件来自定义 OpenClaw 的行为。例如，编辑 `USER.md`：

```markdown
## 偏好

- 回复使用中文
- 代码注释使用英文
- 优先使用 TypeScript
- 时区：Asia/Shanghai
```

## 配置大模型

### 修改默认模型

```bash
# 查看当前模型
openclaw models list

# 切换模型
openclaw config set model.default "claude-sonnet-4-6"
```

### 接入本地 Ollama 模型

```bash
# 确保 Ollama 已运行
ollama serve

# 配置 OpenClaw 使用 Ollama
openclaw config set model.provider "ollama"
openclaw config set model.default "qwen2.5-coder:7b"
openclaw config set model.ollama.baseUrl "http://localhost:11434"

# 重启网关
openclaw gateway restart
```

### 接入国内模型

```bash
# 使用 DeepSeek
openclaw config set model.provider "deepseek"
openclaw config set model.apiKey "your-deepseek-api-key"

# 使用智谱 GLM
openclaw config set model.provider "zhipu"
openclaw config set model.apiKey "your-zhipu-api-key"
```

## 云部署（可选）

除了本地运行，OpenClaw 也支持部署到云服务器，实现 24 小时在线。

**国内云平台一键部署：**

- [阿里云部署](https://www.aliyun.com/activity/ecs/clawdbot) - 提供预装镜像
- [腾讯云部署](https://cloud.tencent.com/developer/article/2624973) - 提供一键部署方案

部署到云服务器后，你可以通过消息平台（WhatsApp、Telegram 等）随时随地给 OpenClaw 发指令，它会在服务器上执行任务。

## 安全注意事项

::: danger 重要
OpenClaw 拥有执行系统命令、读写文件的完整权限，使用时请注意：
:::

1. **审查执行计划**：OpenClaw 执行任务前会展示计划，务必确认后再同意
2. **敏感操作谨慎**：涉及删除文件、修改系统配置等操作时要格外小心
3. **API Key 安全**：不要在公开渠道分享你的配置文件
4. **云部署加固**：如果部署到服务器，确保设置了访问密码和防火墙规则
5. **定期更新**：及时更新到最新版本以获取安全修复

## 最佳实践

1. **从 Web UI 开始**：先通过内置网页界面熟悉基本操作，再绑定消息平台
2. **按需安装技能**：不要一次性安装太多技能，根据实际需要逐步添加
3. **善用记忆系统**：编辑 `USER.md` 和 `MEMORY.md` 让 OpenClaw 更了解你的习惯
4. **利用 HEARTBEAT.md**：配置定时任务，让 OpenClaw 自动执行重复性工作
5. **本地模型兜底**：配置一个本地 Ollama 模型作为备选，网络不好时也能使用

## 相关链接

- [OpenClaw 官网](https://openclaw.ai/)
- [OpenClaw 官方文档](https://docs.openclaw.ai/)
- [GitHub 仓库](https://github.com/openclaw/openclaw)
- [ClawHub 技能市场](https://clawhub.ai/)
- [中文文档](https://docs.openclaw.ai/zh-CN)
