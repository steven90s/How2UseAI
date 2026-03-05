# LM Studio 部署指南

LM Studio 是一个图形化的大模型运行工具，提供类似 ChatGPT 的界面，适合非技术用户使用。

## 特点

- **图形界面**：友好的桌面应用
- **模型管理**：内置模型下载器
- **本地运行**：完全离线使用
- **API 服务**：提供本地 API 接口

## 安装

### 下载地址

访问 [LM Studio 官网](https://lmstudio.ai/) 下载对应平台的安装包。

### 系统要求

- **macOS**: 12.0 或更高版本
- **Windows**: Windows 10 或更高版本
- **Linux**: 支持 AppImage 和 deb 包

## 基本使用

### 1. 下载模型

1. 打开 LM Studio
2. 点击左侧的搜索图标
3. 搜索想要的模型（如 "llama 3.2"）
4. 选择模型版本并下载

### 2. 加载模型

1. 点击左侧的聊天图标
2. 在顶部选择已下载的模型
3. 等待模型加载完成

### 3. 开始对话

在输入框中输入问题，按回车发送。

## 推荐模型

| 模型 | 大小 | 适用场景 |
|------|------|----------|
| Llama 3.2 3B | 2GB | 日常对话 |
| Mistral 7B | 4GB | 通用任务 |
| Qwen 2.5 7B | 4GB | 中文对话 |
| DeepSeek R1 | 4.7GB | 推理任务 |
| CodeLlama | 4GB | 代码生成 |

## 设置选项

### GPU 加速

1. 进入 Settings > GPU Settings
2. 启用 GPU Offload
3. 选择使用的 GPU
4. 调整显存分配

### 上下文长度

1. 进入 Settings > Context
2. 调整 Context Length
3. 注意：更长的上下文需要更多显存

### 温度设置

- **低温度 (0.1-0.3)**：更确定的输出
- **中温度 (0.5-0.7)**：平衡创造性和准确性
- **高温度 (0.8-1.0)**：更有创造性

## 本地 API 服务

LM Studio 可以作为本地 API 服务器运行。

### 启动服务

1. 进入 Local Server 标签页
2. 选择模型
3. 设置端口（默认 1234）
4. 点击 Start Server

### API 调用

```python
import requests

response = requests.post('http://localhost:1234/v1/chat/completions', json={
    "model": "local-model",
    "messages": [
        {"role": "user", "content": "你好"}
    ]
})

print(response.json())
```

### OpenAI SDK 兼容

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="local-model",
    messages=[{"role": "user", "content": "你好"}]
)
```

## 模型存储位置

下载的模型存储在：

- **macOS**: `~/.cache/lm-studio/models`
- **Windows**: `%USERPROFILE%\.cache\lm-studio\models`
- **Linux**: `~/.cache/lm-studio/models`

## 故障排除

### 模型加载失败

- 检查显存是否足够
- 尝试减少 GPU Offload 层数
- 使用量化版本的模型

### 响应速度慢

- 确保启用了 GPU 加速
- 减小上下文长度
- 使用更小的模型

### 中文乱码

- 确保使用支持中文的模型
- 检查系统编码设置

## 相关链接

- [LM Studio 官网](https://lmstudio.ai/)
- [LM Studio Discord](https://discord.gg/aQNC3YPK)
