# Claude Code

Claude Code 是 Anthropic 官方推出的 **命令行 AI 编程助手（Agentic Coding Tool）**，直接在终端中运行。它能够理解你的整个代码库，通过自然语言帮助你编写代码、修复 Bug、重构项目、编写测试，甚至直接执行 Git 操作和 Shell 命令。

与传统的 IDE 插件不同，Claude Code 不依赖任何编辑器，而是以 **Agent 模式** 运行——你描述需求，它自主规划并完成任务，包括读取文件、编辑代码、运行命令等，全程在终端中完成。

## 核心特点

- **Agentic 工作模式**：不只是补全代码，而是自主理解需求、搜索代码、编辑文件、运行测试
- **全项目上下文理解**：自动索引整个代码库，理解项目结构和依赖关系
- **终端原生**：无需切换编辑器，直接在终端中完成所有操作
- **安全可控**：所有文件编辑和命令执行都会先征求你的确认
- **支持多种工作流**：交互式对话、单次命令、管道输入等

## 安装

### 前置要求

- **Node.js** 18 或更高版本
- **操作系统**：macOS、Linux、Windows（通过 WSL）
- **Anthropic 账号**：需要有效的 API Key 或 Claude Pro/Max 订阅

### macOS 环境配置（新手必看）

如果你是第一次在 macOS 上做开发，需要先完成以下基础环境配置。已经有开发环境的用户可以跳过此节。

#### 1. 打开终端

macOS 自带终端应用：
- 按 `Command + 空格` 打开「聚焦搜索」，输入 `Terminal` 或 `终端`，回车打开
- 或在「应用程序 → 实用工具 → 终端」中找到

::: tip 推荐终端工具
macOS 自带终端可以正常使用，但推荐安装 [iTerm2](https://iterm2.com/) 获得更好的体验（分屏、历史搜索、主题等）。
:::

#### 2. 安装 Xcode 命令行工具

许多开发工具依赖 Xcode 命令行工具（提供 Git、编译器等基础组件）：

```bash
xcode-select --install
```

弹出安装提示后点击「安装」，等待完成即可。如果提示已安装则跳过。

#### 3. 安装 Homebrew

[Homebrew](https://brew.sh/) 是 macOS 上最常用的包管理器，用于安装各种开发工具。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完成后，根据终端提示将 Homebrew 添加到 PATH。通常需要执行（Apple Silicon Mac）：

```bash
# 将 Homebrew 添加到 PATH（Apple Silicon）
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

如果是 Intel Mac：

```bash
# 将 Homebrew 添加到 PATH（Intel Mac）
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/usr/local/bin/brew shellenv)"
```

验证安装：

```bash
brew --version
# 输出类似：Homebrew 4.x.x
```

::: warning 网络问题
如果因网络原因无法安装，可以使用国内镜像源：
```bash
/bin/bash -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
按提示选择镜像源即可。
:::

#### 4. 安装 Node.js

Claude Code 需要 Node.js 18 或更高版本。推荐使用 **nvm**（Node Version Manager）管理 Node.js 版本：

**方式一：使用 nvm 安装（推荐）**

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 重新加载 shell 配置
source ~/.zshrc

# 安装最新 LTS 版本的 Node.js
nvm install --lts

# 验证安装
node -v   # 输出类似：v22.x.x
npm -v    # 输出类似：10.x.x
```

**方式二：使用 Homebrew 安装**

```bash
# 安装 Node.js
brew install node

# 验证安装
node -v
npm -v
```

**方式三：直接下载安装包**

前往 [Node.js 官网](https://nodejs.org/) 下载 macOS 安装包（`.pkg`），双击安装即可。

#### 5. 配置 Git（可选）

Claude Code 会使用 Git 进行版本控制操作。如果你还没有配置过 Git 用户信息：

```bash
# 设置用户名和邮箱（替换为你自己的信息）
git config --global user.name "你的名字"
git config --global user.email "your-email@example.com"

# 验证配置
git config --list
```

#### 6. 环境变量配置说明

macOS 默认使用 zsh，配置文件为 `~/.zshrc`。在后续配置 API Key 等环境变量时，需要写入此文件：

```bash
# 查看当前使用的 shell
echo $SHELL
# 输出：/bin/zsh

# 编辑配置文件（使用 nano 编辑器，对新手友好）
nano ~/.zshrc

# 在文件末尾添加环境变量，例如：
# export ANTHROPIC_API_KEY="sk-ant-xxxxx"

# 保存退出：按 Ctrl+O 保存，Ctrl+X 退出

# 使配置生效
source ~/.zshrc
```

::: tip 环境配置完成检查清单
运行以下命令确认环境就绪：
```bash
brew --version    # Homebrew 已安装
node -v           # Node.js 18+
npm -v            # npm 可用
git --version     # Git 可用
```
全部正常输出版本号后，即可继续安装 Claude Code。
:::

### Windows 环境配置

Claude Code 在 Windows 上需要通过 **WSL2（Windows Subsystem for Linux）** 运行。WSL2 让你在 Windows 中运行一个真正的 Linux 环境，Claude Code 在其中可以正常工作。

#### 1. 安装 WSL2

以**管理员身份**打开 PowerShell（右键开始菜单 → 「终端(管理员)」），执行：

```powershell
wsl --install
```

该命令会自动安装 WSL2 和 Ubuntu 发行版。安装完成后**需要重启电脑**。

重启后，Ubuntu 会自动打开并要求你设置用户名和密码（这是 Linux 系统的用户名密码，与 Windows 账号无关）。

::: tip 手动选择发行版
如果你想安装其他 Linux 发行版：
```powershell
# 查看可用发行版
wsl --list --online

# 安装指定发行版
wsl --install -d Debian
```
:::

#### 2. 验证 WSL2

```powershell
# 在 PowerShell 中检查版本
wsl --version

# 确认是 WSL2（VERSION 列应显示 2）
wsl -l -v
```

如果显示的是 WSL1，可以升级：

```powershell
wsl --set-version Ubuntu 2
```

#### 3. 进入 WSL 环境

打开方式（任选其一）：
- 在开始菜单搜索「Ubuntu」打开
- 在 PowerShell 中输入 `wsl` 回车
- 使用 Windows Terminal 中的 Ubuntu 标签页

进入后你会看到 Linux 的命令行界面，后续所有操作都在这个环境中进行。

#### 4. 安装 Node.js

在 WSL 的 Ubuntu 终端中执行：

```bash
# 更新系统包
sudo apt update && sudo apt upgrade -y

# 安装 nvm（Node 版本管理器）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 重新加载配置
source ~/.bashrc

# 安装最新 LTS 版本的 Node.js
nvm install --lts

# 验证安装
node -v   # 应输出 v18+ 或 v22+
npm -v
```

#### 5. 安装 Git

Ubuntu 通常自带 Git，如果没有：

```bash
sudo apt install git -y

# 配置用户信息
git config --global user.name "你的名字"
git config --global user.email "your-email@example.com"
```

#### 6. 环境变量配置

WSL Ubuntu 默认使用 bash，配置文件为 `~/.bashrc`：

```bash
# 编辑配置文件
nano ~/.bashrc

# 在文件末尾添加环境变量，例如：
# export ANTHROPIC_API_KEY="sk-ant-xxxxx"

# 保存退出：Ctrl+O 保存，Ctrl+X 退出

# 使配置生效
source ~/.bashrc
```

::: tip 使用 zsh（可选）
如果你更喜欢 zsh，可以在 WSL 中安装：
```bash
sudo apt install zsh -y
chsh -s $(which zsh)
```
重新打开 WSL 即可使用 zsh，配置文件变为 `~/.zshrc`。
:::

#### 7. 文件系统说明

WSL 中有两个文件系统，理解它们的关系很重要：

| 路径 | 说明 | 性能 |
|------|------|------|
| `/home/你的用户名/` | Linux 原生文件系统 | 快（推荐在这里开发） |
| `/mnt/c/Users/...` | 挂载的 Windows C 盘 | 慢（跨文件系统访问） |

```bash
# 在 Linux 文件系统中创建项目目录（推荐）
mkdir -p ~/projects
cd ~/projects

# 访问 Windows 桌面上的文件
ls /mnt/c/Users/你的Windows用户名/Desktop/
```

::: warning 重要
**项目文件应放在 Linux 文件系统中**（`/home/` 下），不要放在 `/mnt/c/` 下。跨文件系统操作性能很差，Git 和 Node.js 操作会明显变慢。
:::

#### 8. VS Code 集成（推荐）

VS Code 可以无缝连接 WSL 环境，让你在 Windows 的编辑器中编辑 WSL 里的代码：

```bash
# 在 WSL 终端中，进入项目目录后执行：
code .
```

首次使用会自动安装 VS Code 的 WSL 扩展。之后在 VS Code 中打开的终端就是 WSL 环境，可以直接运行 Claude Code。

::: tip 环境配置完成检查清单
在 WSL 终端中运行以下命令确认环境就绪：
```bash
node -v           # Node.js 18+
npm -v            # npm 可用
git --version     # Git 可用
echo $SHELL       # 显示当前 Shell
```
全部正常输出后，即可继续安装 Claude Code。
:::

### 安装 Claude Code

**方式一：使用 npm 安装**

```bash
npm install -g @anthropic-ai/claude-code
```

**方式二：使用 Homebrew 安装（macOS 推荐）**

```bash
brew install claude-code
```

安装完成后，在终端中运行 `claude` 即可启动。验证安装：

```bash
claude --version
```

### 认证方式

Claude Code 支持多种认证方式：

**方式一：直接登录（推荐）**

首次运行 `claude` 时，会自动引导你通过浏览器登录 Anthropic 账号进行 OAuth 认证。如果你有 Claude Pro 或 Max 订阅，可以直接使用，无需额外配置 API Key。

**方式二：API Key**

```bash
# 设置环境变量
export ANTHROPIC_API_KEY="sk-ant-xxxxx"

# 或在启动时指定
claude --api-key "sk-ant-xxxxx"
```

你可以在 [Anthropic Console](https://console.anthropic.com/) 获取 API Key。

**方式三：第三方平台 API（如 Amazon Bedrock / Google Vertex AI）**

```bash
# 使用 Amazon Bedrock
export CLAUDE_CODE_USE_BEDROCK=1
export AWS_REGION="us-east-1"

# 使用 Google Vertex AI
export CLAUDE_CODE_USE_VERTEX=1
export CLOUD_ML_REGION="us-east5"
export ANTHROPIC_VERTEX_PROJECT_ID="your-project-id"
```

## 基本使用

### 启动交互模式

```bash
# 在当前目录启动 Claude Code
claude

# 在指定项目目录启动
cd /path/to/your/project
claude
```

启动后进入交互式对话界面，你可以直接用自然语言描述你的需求。

### 单次命令模式

```bash
# 使用 -p 参数执行单次任务，不进入交互模式
claude -p "解释这个项目的架构"

# 配合管道使用
cat error.log | claude -p "分析这个错误日志，找出根本原因"

# 读取文件并分析
git diff | claude -p "为这些改动写一个 commit message"
```

### 恢复上次会话

```bash
# 恢复上一次的对话
claude --continue

# 恢复并附带新消息
claude --continue "继续完成上次的任务"
```

## 常用使用场景

### 理解代码

```
> 这个项目的整体架构是什么？
> 解释一下 src/auth/middleware.ts 的认证流程
> 找到所有处理用户登录的相关代码
```

### 编写和修改代码

```
> 给 UserService 添加一个批量删除用户的方法
> 把 src/utils/helpers.js 从 CommonJS 转换为 ES Module
> 修复 #123 issue 中描述的分页 Bug
```

### 重构代码

```
> 将 UserController 中的业务逻辑提取到 UserService
> 把这个类组件重构为 React Hooks
> 优化 getOrderList 函数的性能
```

### 编写测试

```
> 为 src/services/payment.ts 编写单元测试
> 补充 API 路由的集成测试
> 当前测试覆盖率不够，帮我找出缺少测试的关键路径
```

### Git 操作

```
> 帮我提交当前的修改，生成合适的 commit message
> 创建一个新分支 feature/user-export 并切换过去
> 查看最近 5 次提交的改动摘要
```

## 常用快捷键与命令

在交互模式中，你可以使用以下命令：

| 命令 | 说明 |
|------|------|
| `/help` | 查看帮助信息 |
| `/compact` | 压缩当前对话上下文，释放 Token 空间 |
| `/clear` | 清除对话历史 |
| `/cost` | 查看当前会话的 Token 用量和费用 |
| `/model` | 切换模型 |
| `Ctrl + C` | 取消当前操作 |
| `Esc` | 中断 AI 正在进行的输出 |

## 提示词说明文件（CLAUDE.md）

Claude Code 通过 `CLAUDE.md` 文件来了解你的项目上下文、编码规范和工作偏好。这是提升 Claude Code 输出质量的最关键配置，相当于给 AI 一份「项目说明书」。

### CLAUDE.md 加载机制

Claude Code 启动时会**自动**按以下顺序加载多个层级的说明文件：

| 文件位置 | 作用范围 | 说明 |
|---------|---------|------|
| `~/.claude/CLAUDE.md` | 全局（所有项目） | 个人通用偏好，如语言、代码风格 |
| `项目根目录/CLAUDE.md` | 当前项目 | 项目技术栈、架构、开发规范 |
| `项目根目录/.claude/CLAUDE.md` | 当前项目 | 同上，放在 `.claude` 目录下便于管理 |
| `当前子目录/CLAUDE.md` | 当前子目录 | 特定模块的额外说明 |

::: tip 优先级
所有层级的文件会**合并生效**，子目录的说明会叠加到项目级和全局说明之上，不会覆盖。
:::

### 全局 CLAUDE.md（个人偏好）

在 `~/.claude/CLAUDE.md` 中配置你的通用编程偏好，适用于所有项目：

```markdown
## 通用偏好

- 回复使用中文
- 代码注释使用英文
- 优先使用 TypeScript，避免使用 any 类型
- 使用函数式编程风格，避免 class
- 变量命名使用 camelCase，常量使用 UPPER_SNAKE_CASE

## Git 规范

- Commit message 使用 Conventional Commits 格式
- 每次只提交相关的文件变更，不要混合不同功能的修改

## 代码风格

- 使用 2 空格缩进
- 字符串使用单引号
- 行尾不加分号（如项目配置允许）
```

### 项目级 CLAUDE.md（项目说明）

在项目根目录创建 `CLAUDE.md`，这是最重要的配置文件，建议包含以下内容：

```markdown
# 项目说明

这是一个基于 Next.js 14 的电商平台后台管理系统。

## 技术栈

- 框架：Next.js 14 (App Router)
- 语言：TypeScript 5.x
- 样式：Tailwind CSS + shadcn/ui
- 状态管理：Zustand
- 数据库：PostgreSQL + Prisma ORM
- 认证：NextAuth.js
- 包管理器：pnpm

## 项目结构

- `src/app/` - 页面路由（App Router）
- `src/components/` - 可复用组件
- `src/components/ui/` - shadcn/ui 基础组件（不要手动修改）
- `src/lib/` - 工具函数和配置
- `src/server/` - 服务端逻辑（API、数据库操作）
- `prisma/` - 数据库模型和迁移文件

## 开发规范

- 组件使用函数式组件 + Hooks，不使用 class 组件
- API 响应统一使用 `{ code: number, data: T, message: string }` 格式
- 数据库操作统一封装在 `src/server/services/` 中
- 新增页面需要在 `src/app/` 下创建对应的路由目录
- 表单验证使用 Zod schema

## 常用命令

- `pnpm dev` - 启动开发服务器（端口 3000）
- `pnpm build` - 生产构建
- `pnpm test` - 运行测试（Vitest）
- `pnpm lint` - ESLint 检查
- `pnpm db:push` - 同步数据库 schema
- `pnpm db:studio` - 打开 Prisma Studio

## 注意事项

- 修改数据库 schema 后需要运行 `pnpm db:push`
- 不要直接修改 `src/components/ui/` 下的 shadcn 组件
- 环境变量在 `.env.local` 中配置，不要提交到 Git
```

### 常用 CLAUDE.md 模板

**前端项目（React/Vue）：**

```markdown
# 项目说明

[项目名称和简介]

## 技术栈
- 框架：[React/Vue/Svelte] + TypeScript
- 构建工具：[Vite/Webpack]
- 样式方案：[Tailwind/CSS Modules/Styled Components]
- 路由：[React Router/Vue Router]
- 状态管理：[Zustand/Pinia/Redux]

## 组件规范
- 使用函数式组件
- Props 必须定义 TypeScript 接口
- 组件文件名使用 PascalCase

## 命令
- `npm run dev` - 开发服务器
- `npm run build` - 构建
- `npm run test` - 测试
```

**后端项目（Node.js/Python）：**

```markdown
# 项目说明

[项目名称和简介]

## 技术栈
- 运行时：[Node.js/Python]
- 框架：[Express/FastAPI/NestJS]
- 数据库：[PostgreSQL/MySQL/MongoDB]
- ORM：[Prisma/TypeORM/SQLAlchemy]

## API 规范
- RESTful 风格
- 路由前缀：/api/v1/
- 统一错误格式：{ error: { code, message } }
- 认证使用 Bearer Token

## 数据库规范
- 表名使用 snake_case 复数形式
- 每张表必须有 created_at 和 updated_at 字段
- 软删除使用 deleted_at 字段

## 命令
- `npm run dev` - 启动开发服务器
- `npm run test` - 运行测试
- `npm run migrate` - 执行数据库迁移
```

### 权限设置

Claude Code 默认会在执行文件编辑和 Shell 命令前征求你的确认。你可以通过设置调整权限：

```bash
# 允许特定命令自动执行
claude config set allowedTools "Bash(npm test)" "Bash(pnpm lint)"
```

## 接入第三方 API

Claude Code 不仅支持 Anthropic 官方 API，还可以通过 **Amazon Bedrock** 和 **Google Vertex AI** 使用，适合企业用户、有合规要求、或希望统一云平台计费的场景。

### Amazon Bedrock

通过 AWS Bedrock 调用 Claude 模型，费用走 AWS 账单，适合已有 AWS 基础设施的团队。

**前置要求：**
- AWS 账号，并在 Bedrock 中 [开通 Claude 模型访问权限](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html)
- 配置好 AWS CLI 认证（`aws configure` 或 IAM Role）

**配置方式：**

```bash
# 基本配置
export CLAUDE_CODE_USE_BEDROCK=1
export AWS_REGION="us-east-1"

# 如果使用指定的 AWS Profile
export AWS_PROFILE="your-profile-name"

# 如果需要跨账号访问（通过 AssumeRole）
export ANTHROPIC_BEDROCK_ROLE_ARN="arn:aws:iam::123456789:role/BedrockRole"

# 启动 Claude Code
claude
```

**IAM 权限要求：**

你的 AWS 用户或角色至少需要以下权限：

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": "arn:aws:bedrock:*::foundation-model/anthropic.*"
    }
  ]
}
```

### Google Vertex AI

通过 Google Cloud Vertex AI 调用 Claude 模型，费用走 GCP 账单。

**前置要求：**
- GCP 项目，并开通 [Vertex AI Claude 模型](https://cloud.google.com/vertex-ai/docs/generative-ai/partner-models/claude)
- 安装并认证 Google Cloud CLI（`gcloud auth login`）

**配置方式：**

```bash
# 基本配置
export CLAUDE_CODE_USE_VERTEX=1
export CLOUD_ML_REGION="us-east5"  # Claude 模型可用区域
export ANTHROPIC_VERTEX_PROJECT_ID="your-gcp-project-id"

# 认证（二选一）
# 方式 1：使用应用默认凭据
gcloud auth application-default login

# 方式 2：使用服务账号
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"

# 启动 Claude Code
claude
```

**可用区域：**

Claude 模型在 Vertex AI 上并非所有区域都可用，常用区域包括：
- `us-east5`（美国）
- `europe-west1`（欧洲）
- `asia-southeast1`（亚太）

具体可用区域请查阅 [Vertex AI Claude 文档](https://cloud.google.com/vertex-ai/docs/generative-ai/partner-models/claude)。

### 智谱 GLM（BigModel）

[智谱 AI](https://bigmodel.cn/) 提供的 GLM 系列大模型是国内领先的大语言模型之一。智谱提供了 **Anthropic 兼容 API 端点**，因此可以直接将 GLM 模型接入 Claude Code 作为后端模型使用，无需任何额外代理。

#### 获取 API Key

1. 注册 [智谱 AI 开放平台](https://open.bigmodel.cn/) 账号
2. 进入控制台，创建 API Key
3. 新用户注册后会赠送免费额度，可以直接体验

#### 可用模型

| 模型 | 特点 | 上下文长度 | 参考价格（每百万 Token） |
|------|------|-----------|----------------------|
| GLM-5 | 最新旗舰（744B MoE），编程能力对标 Claude Opus | 200K | 高峰时段 3x 计费 |
| GLM-4.7 | 主力模型，支持 Agentic Coding、深度推理 | 200K | 输入 ¥4 / 输出 ¥16 |
| GLM-4.7-FlashX | 轻量高速版，适合日常任务 | 200K | 更低价格 |
| GLM-4.5-Air | 轻量模型，适合简单任务 | 128K | 低价格 |
| GLM-4-Flash | 免费模型，适合学习测试 | 128K | 免费 |

::: tip 提示
`GLM-4-Flash` 是免费模型，非常适合学习和测试阶段使用。`GLM-5` 是 2026 年 2 月发布的最新旗舰，采用 744B MoE 架构，编程能力接近 Claude Opus 4.5 水平。
:::

#### 接入 Claude Code（重点）

智谱提供了 **Anthropic 兼容的 API 端点**（`/api/anthropic`），这意味着 Claude Code 可以直接连接智谱 API，把 GLM 模型当作后端使用。

**第一步：编辑配置文件**

编辑 `~/.claude/settings.json`（没有则新建）：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的智谱API Key",
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

::: tip 国际版端点
如果你在海外或有国际网络，也可以使用国际版端点：`https://api.z.ai/api/anthropic`
:::

**第二步：创建初始化文件**

编辑 `~/.claude.json`（没有则新建），跳过首次登录引导：

```json
{
  "hasCompletedOnboarding": true
}
```

**第三步：配置模型映射（可选）**

默认情况下，智谱会自动将 Claude 模型名映射到 GLM 模型。你也可以手动指定模型映射，在 `~/.claude/settings.json` 的 `env` 中添加：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的智谱API Key",
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-5",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air"
  }
}
```

**默认模型映射关系：**

| Claude Code 内部模型 | 映射到的 GLM 模型 | 用途 |
|---------------------|------------------|------|
| Opus（高级模型） | GLM-5 / GLM-4.7 | 复杂任务、深度推理 |
| Sonnet（默认模型） | GLM-4.7 | 日常编程、代码生成 |
| Haiku（快速模型） | GLM-4.5-Air | 简单任务、快速响应 |

**第四步：启动 Claude Code**

```bash
# 关闭所有终端窗口，重新打开终端
# 进入你的项目目录
cd /path/to/your/project

# 启动 Claude Code
claude
```

启动后，Claude Code 界面和操作方式与使用 Anthropic 官方 API 完全一致，但底层调用的是智谱 GLM 模型。

::: warning 注意事项
1. 配置完成后需要**关闭所有终端窗口**，重新打开才能生效
2. 推荐使用 Claude Code **v2.1.42 或更高版本**，可通过 `claude update` 更新
3. GLM-5 模型参数量更大，在高峰时段（北京时间 14:00-18:00）按 3x 计费，非高峰按 2x 计费
4. 配置成功后，界面中显示的模型名仍为 Claude 系列名称，但实际调用的是 GLM 模型
:::

#### 关于 GLM-5 模型

GLM-5 是智谱 AI 于 2026 年 2 月发布的最新一代旗舰模型，主要特点：

- **架构**：744B 参数 MoE（混合专家），激活参数 40B，采用 DeepSeek 同款稀疏注意力（DSA）
- **编程能力**：在前端、后端、长程任务等编程场景中，性能较上代提升超 20%，接近 Claude Opus 4.5 水平
- **长上下文**：200K 上下文窗口，注意力计算成本降低 1.5-2x
- **开源**：模型权重在 Hugging Face 和 ModelScope 开源，MIT 许可证
- **国产适配**：深度优化华为昇腾等七大国产芯片平台

在 Claude Code 中使用 GLM-5，只需将 `ANTHROPIC_DEFAULT_OPUS_MODEL` 设置为 `glm-5` 即可。GLM-5 适合处理复杂的编程任务、大规模代码重构、深度代码分析等场景。

#### 使用官方 SDK 独立调用

除了通过 Claude Code 使用，你也可以在项目中直接调用智谱 API。

**安装 SDK：**

```bash
pip install zhipuai
```

**Python 调用示例：**

```python
from zhipuai import ZhipuAI

client = ZhipuAI(api_key="your-api-key")

response = client.chat.completions.create(
    model="glm-4.7",
    messages=[
        {"role": "system", "content": "你是一个专业的编程助手"},
        {"role": "user", "content": "用 Python 写一个快速排序算法"}
    ],
    temperature=0.7,
    max_tokens=4096,
)

print(response.choices[0].message.content)
```

**流式输出：**

```python
response = client.chat.completions.create(
    model="glm-4.7",
    messages=[
        {"role": "user", "content": "解释 TCP 三次握手的过程"}
    ],
    stream=True,
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

#### 使用 OpenAI 兼容接口调用

智谱 API 同时兼容 OpenAI 接口格式，你可以直接使用 OpenAI SDK：

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-zhipuai-api-key",
    base_url="https://open.bigmodel.cn/api/paas/v4/"
)

response = client.chat.completions.create(
    model="glm-4.7",
    messages=[
        {"role": "user", "content": "写一个 Express 中间件处理 JWT 认证"}
    ]
)

print(response.choices[0].message.content)
```

**Node.js / TypeScript 调用：**

```typescript
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: 'your-zhipuai-api-key',
  baseURL: 'https://open.bigmodel.cn/api/paas/v4/',
})

const response = await client.chat.completions.create({
  model: 'glm-4.7',
  messages: [
    { role: 'user', content: '用 TypeScript 写一个分页工具函数' }
  ],
})

console.log(response.choices[0].message.content)
```

**cURL 调用：**

```bash
curl -X POST "https://open.bigmodel.cn/api/paas/v4/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "model": "glm-4.7",
    "messages": [
      {"role": "user", "content": "你好，请介绍一下你自己"}
    ]
  }'
```

::: warning 注意
使用 OpenAI SDK 调用智谱 API 时，`base_url` 必须设置为 `https://open.bigmodel.cn/api/paas/v4/`（末尾带 `/`）。部分 OpenAI 客户端库会自动拼接 `/v1` 路径，可能导致 404 错误，请注意检查实际请求地址。
:::

### 通过 API 代理/中转使用

如果你所在的网络无法直接访问 Anthropic API，可以配置自定义 API 端点：

```bash
# 设置自定义 API 地址
export ANTHROPIC_BASE_URL="https://your-proxy-domain.com"
export ANTHROPIC_API_KEY="sk-ant-xxxxx"

claude
```

::: warning 安全提示
使用第三方代理时请确保信任该服务，因为所有对话内容都会经过代理服务器。建议仅使用自建代理或可信的企业级服务。
:::

### 各接入方式对比

| 特性 | Anthropic 直连 | Amazon Bedrock | Google Vertex AI | 智谱 GLM |
|------|---------------|---------------|-----------------|---------|
| 认证方式 | API Key / OAuth | AWS IAM | GCP 服务账号 | API Key |
| 计费 | Anthropic 账单 | AWS 账单 | GCP 账单 | 智谱账单 |
| 数据驻留 | Anthropic 服务器 | AWS 区域 | GCP 区域 | 国内服务器 |
| 适合场景 | 个人 / 小团队 | 已有 AWS 基础设施 | 已有 GCP 基础设施 | 国内用户 / 低成本 |
| 免费额度 | 无 | 无 | 无 | 有（GLM-4-Flash 免费） |
| OpenAI 兼容 | 否 | 否 | 否 | 是 |

## 订阅计划与费用

Claude Code 可以通过 Anthropic 订阅或 API 按量付费使用，以下是各方案的详细对比。

### 订阅计划对比

| | Free | Pro | Max 5x | Max 20x |
|---|---|---|---|---|
| **月费** | 免费 | $20/月（年付 $17/月） | $100/月 | $200/月 |
| **Claude Code** | 不支持 | 支持 | 支持 | 支持 |
| **可用模型** | 仅 Sonnet（有限） | Sonnet 4.6 + Opus 4.6（有限） | Sonnet 4.6 + Opus 4.6 | 全部模型，含完整 Opus 4.6 |
| **用量** | 基础用量 | 5x 基础用量 | 5x Pro 用量（25x 基础） | 20x Pro 用量（100x 基础） |
| **优先级** | 低 | 标准 | 高优先级 | 最高优先级 |
| **新功能** | 无 | 无 | 优先体验 | 优先体验 |
| **适合人群** | 体验 Claude 网页版 | 轻度使用、学习 | 专业开发者 | 高频重度用户 |

::: tip 如何选择？
- **偶尔使用**：Pro 计划（$20/月）足够应对日常编程辅助
- **日常开发主力**：Max 5x（$100/月）提供足够的用量和 Opus 模型访问
- **重度依赖 Claude Code**：Max 20x（$200/月）适合每天大量使用、需要最高优先级的开发者
:::

### API 按量计费

如果你通过 API Key 使用 Claude Code，则按 Token 用量计费：

| 模型 | 输入价格（每百万 Token） | 输出价格（每百万 Token） |
|------|----------------------|----------------------|
| Claude Sonnet 4.6 | $3 | $15 |
| Claude Opus 4.5 | $5 | $25 |
| Claude Haiku 4.5 | $1 | $5 |

**省钱技巧：**
- **Prompt Caching**：重复内容最高可节省 90%
- **Batch API**：非实时任务可使用批处理 API，所有模型半价

::: warning Claude Code Token 消耗提醒
Claude Code 的 Agent 工作模式会消耗较多 Token。一次典型的编程任务（如修复一个 Bug）通常消耗 **5,000 - 50,000 Token**，复杂的重构任务可能达到 **10 万+ Token**。如果通过 API 按量付费，建议密切关注用量。高频使用者推荐选择 Max 订阅，费用更可控。
:::

### 其他计费方式

| 方式 | 费用 | 适合场景 |
|------|------|---------|
| Amazon Bedrock | 按 AWS 定价，走 AWS 账单 | 已有 AWS 基础设施的企业 |
| Google Vertex AI | 按 GCP 定价，走 GCP 账单 | 已有 GCP 基础设施的企业 |
| 智谱 GLM | 按智谱定价（远低于 Anthropic） | 国内用户、预算有限 |

## 与其他工具的对比

| 特性 | Claude Code | Cursor | GitHub Copilot |
|------|------------|--------|----------------|
| 运行环境 | 终端 | 独立编辑器 | IDE 插件 |
| 工作模式 | Agent（自主完成任务） | 对话 + 编辑器 | 补全 + 对话 |
| 项目理解 | 全代码库索引 | 打开文件 + 引用 | 当前文件 + 上下文 |
| 命令执行 | 支持 | 部分支持 | 不支持 |
| Git 操作 | 原生支持 | 部分支持 | 不支持 |
| 适合人群 | 命令行重度用户 | 喜欢图形界面 | 已有 IDE 习惯 |

## 最佳实践

1. **写好 CLAUDE.md**：提供清晰的项目上下文、技术栈、开发规范，能显著提升 Claude Code 的输出质量
2. **明确具体地描述需求**：比起"优化代码"，"将 getUsers 的数据库查询从 N+1 改为 JOIN 查询"效果更好
3. **善用 `/compact`**：长对话后压缩上下文，避免 Token 浪费
4. **利用管道输入**：结合 `git diff`、`cat`、`grep` 等命令，将上下文直接传给 Claude Code
5. **审查每次修改**：虽然 Claude Code 很强大，但务必审查它的每次代码修改

## 相关链接

- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic Console（获取 API Key）](https://console.anthropic.com/)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
