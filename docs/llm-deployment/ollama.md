# Ollama 部署指南

Ollama 是一个简单易用的本地大模型运行工具，支持多种开源模型。

## 安装

### macOS

```bash
# 使用 Homebrew 安装
brew install ollama

# 或直接下载安装包
# https://ollama.com/download
```

### Linux

```bash
# 一键安装脚本
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

下载 [Ollama Windows 版本](https://ollama.com/download) 并安装。

## 基本使用

### 启动服务

```bash
ollama serve
```

### 拉取模型

```bash
# 拉取 Llama 3.2
ollama pull llama3.2

# 拉取其他模型
ollama pull mistral
ollama pull qwen2.5
ollama pull deepseek-r1
```

### 运行模型

```bash
# 交互式对话
ollama run llama3.2

# 单次提问
ollama run llama3.2 "解释什么是机器学习"
```

### 模型管理

```bash
# 列出已安装的模型
ollama list

# 删除模型
ollama rm llama3.2

# 查看模型信息
ollama show llama3.2
```

## 常用模型

| 模型 | 大小 | 说明 |
|------|------|------|
| llama3.2 | 3B | Meta 最新模型 |
| mistral | 7B | 高性能开源模型 |
| qwen2.5 | 7B | 阿里通义千问 |
| deepseek-r1 | 7B | DeepSeek 推理模型 |
| codellama | 7B | 代码生成专用 |

## API 使用

Ollama 默认在 `http://localhost:11434` 提供 REST API。

### 生成文本

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "为什么天空是蓝色的？"
}'
```

### 对话接口

```bash
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    { "role": "user", "content": "你好" }
  ]
}'
```

### Python 调用

```python
import requests

response = requests.post('http://localhost:11434/api/chat', json={
    "model": "llama3.2",
    "messages": [
        {"role": "user", "content": "你好"}
    ],
    "stream": False
})

print(response.json())
```

## 自定义模型

### 创建 Modelfile

```dockerfile
FROM llama3.2

# 设置参数
PARAMETER temperature 0.7
PARAMETER num_ctx 4096

# 设置系统提示
SYSTEM 你是一个专业的编程助手
```

### 构建自定义模型

```bash
ollama create my-model -f Modelfile
```

## 性能优化

### GPU 加速

确保安装了 NVIDIA 驱动和 CUDA：

```bash
# 检查 GPU 是否被识别
nvidia-smi
```

### 量化模型

使用量化版本减少显存占用：

```bash
# 拉取 4-bit 量化版本
ollama pull llama3.2:7b-q4_0
```

## 故障排除

### 服务未启动

```bash
# 检查服务状态
ollama --version

# 手动启动服务
ollama serve
```

### 内存不足

- 使用量化模型
- 减小上下文长度
- 关闭其他程序

## 相关链接

- [Ollama 官网](https://ollama.com/)
- [Ollama GitHub](https://github.com/ollama/ollama)
- [模型库](https://ollama.com/library)
