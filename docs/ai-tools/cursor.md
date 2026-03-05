# Cursor

Cursor 是一款基于 VS Code 的 AI 代码编辑器，深度集成了 AI 功能，让编程变得更加高效。

## 安装

### 下载地址

访问 [Cursor 官网](https://cursor.sh/) 下载对应平台的安装包。

### 系统要求

- **macOS**: 10.15 或更高版本
- **Windows**: Windows 10 或更高版本
- **Linux**: Ubuntu 18.04+, Debian 10+, CentOS 7+

## 基本使用

### AI 对话

使用 `Cmd + L` (Mac) 或 `Ctrl + L` (Windows/Linux) 打开 AI 对话面板。

```
用户: 帮我写一个排序函数
AI: 好的，这是一个快速排序的实现...
```

### 代码补全

Cursor 会根据上下文智能补全代码，按 `Tab` 接受建议。

### 代码编辑

选中代码后，使用 `Cmd + K` (Mac) 或 `Ctrl + K` (Windows/Linux) 进行内联编辑。

## 常用快捷键

| 功能 | Mac | Windows/Linux |
|------|-----|---------------|
| 打开 AI 对话 | `Cmd + L` | `Ctrl + L` |
| 内联编辑 | `Cmd + K` | `Ctrl + K` |
| 接受建议 | `Tab` | `Tab` |
| 拒绝建议 | `Esc` | `Esc` |

## 最佳实践

1. **清晰的上下文**：在提问前提供足够的上下文信息
2. **分步骤提问**：复杂任务分解为小步骤
3. **验证代码**：AI 生成的代码需要测试验证
4. **善用对话历史**：AI 会记住对话上下文

## 配置建议

```json
{
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.temperature": 0.7,
  "editor.inlineSuggest.enabled": true
}
```

## 相关链接

- [Cursor 官网](https://cursor.sh/)
- [Cursor 文档](https://docs.cursor.sh/)
- [Cursor Discord](https://discord.gg/cursor)
