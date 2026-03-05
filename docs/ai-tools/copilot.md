# GitHub Copilot

GitHub Copilot 是 GitHub 和 OpenAI 合作开发的 AI 编程助手，支持多种 IDE 和编辑器。

## 安装

### 支持的 IDE

- Visual Studio Code
- Visual Studio
- JetBrains IDEs (IntelliJ, PyCharm, etc.)
- Neovim

### VS Code 安装步骤

1. 打开 VS Code 扩展市场
2. 搜索 "GitHub Copilot"
3. 点击安装
4. 使用 GitHub 账号登录授权

## 基本使用

### 代码补全

编写代码时，Copilot 会自动提供建议：

```python
# 输入函数名和注释
def calculate_average(numbers):
    """计算列表的平均值"""
    # Copilot 会自动补全函数体
```

### Copilot Chat

使用 `Cmd + Shift + P` 打开命令面板，输入 "Copilot Chat" 打开对话界面。

可以：
- 提问编程问题
- 解释代码
- 生成单元测试
- 重构代码

### 快捷键

| 功能 | Mac | Windows/Linux |
|------|-----|---------------|
| 接受建议 | `Tab` | `Tab` |
| 拒绝建议 | `Esc` | `Esc` |
| 下一个建议 | `Alt + ]` | `Alt + ]` |
| 上一个建议 | `Alt + [` | `Alt + [` |
| 触发建议 | `Alt + \` | `Alt + \` |

## 常用技巧

### 1. 写好注释

```javascript
// 获取用户信息，如果不存在则创建新用户
async function getOrCreateUser(userId) {
  // Copilot 会根据注释生成代码
}
```

### 2. 提供上下文

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Copilot 知道 User 的结构
function validateUser(user: User) {
  // ...
}
```

### 3. 使用 Copilot Chat

```
你: 帮我写一个分页组件
Copilot: [生成代码]

你: 添加排序功能
Copilot: [修改代码]
```

## 配置选项

在 VS Code `settings.json` 中：

```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": false
  },
  "github.copilot.advanced": {
    "length": 500,
    "temperature": 0.8
  }
}
```

## 定价

- **个人版**: $10/月
- **企业版**: $19/月/用户
- **学生/开源维护者**: 免费

## 相关链接

- [GitHub Copilot 官网](https://github.com/features/copilot)
- [Copilot 文档](https://docs.github.com/copilot)
