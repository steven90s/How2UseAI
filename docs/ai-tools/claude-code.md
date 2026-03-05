# Claude Code

Claude Code 是 Anthropic 推出的命令行 AI 助手，可以直接在终端中使用 Claude 的强大能力。

## 安装

### 前置要求

- Node.js 18+
- npm 或 pnpm

### 安装步骤

```bash
# 使用 npm 安装
npm install -g @anthropic-ai/claude-code

# 或使用 pnpm
pnpm add -g @anthropic-ai/claude-code
```

### 配置 API Key

```bash
# 设置环境变量
export ANTHROPIC_API_KEY="your-api-key"

# 或者在 ~/.claude/config.json 中配置
```

## 基本使用

### 启动 Claude Code

```bash
claude
```

### 常用命令

```bash
# 提问
claude "解释这个函数的作用"

# 读取文件并分析
claude "分析 app.js 文件的结构" --file app.js

# 生成代码
claude "写一个 React 组件，显示用户列表"

# 执行命令
claude "帮我运行测试" --exec
```

## 高级功能

### 项目上下文

Claude Code 可以理解整个项目的上下文：

```bash
# 分析整个项目
claude "这个项目的技术栈是什么？"

# 查找特定文件
claude "找到所有的 API 路由文件"
```

### 代码重构

```bash
# 重构代码
claude "将这个类组件转换为函数组件"
```

## 配置文件

在项目根目录创建 `.claude/config.json`:

```json
{
  "model": "claude-3.5-sonnet",
  "maxTokens": 4096,
  "temperature": 0.7
}
```

## 安全提示

1. **不要提交 API Key** 到版本控制
2. **审查 AI 生成的代码**再执行
3. **使用 `.claudeignore`** 排除敏感文件

## 相关链接

- [Claude Code 官网](https://www.anthropic.com/claude)
- [Claude API 文档](https://docs.anthropic.com/)
