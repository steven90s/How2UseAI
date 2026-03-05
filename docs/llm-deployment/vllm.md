# vLLM 部署指南

vLLM 是一个高性能的大语言模型推理引擎，专为生产环境设计，支持高并发请求。

## 特点

- **高性能**：PagedAttention 技术优化显存使用
- **高吞吐**：支持批量请求处理
- **兼容性**：支持 OpenAI API 格式
- **分布式**：支持多 GPU 部署

## 安装

### 环境要求

- Python 3.8+
- CUDA 11.8+
- GPU 显存 16GB+ (推荐)

### 安装步骤

```bash
# 使用 pip 安装
pip install vllm

# 或使用 conda
conda install -c pytorch -c nvidia -c conda-forge vllm
```

## 基本使用

### 启动服务

```bash
# 基本启动
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3.2-3B \
    --host 0.0.0.0 \
    --port 8000
```

### 参数说明

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `--model` | 模型名称或路径 | 必填 |
| `--host` | 监听地址 | localhost |
| `--port` | 监听端口 | 8000 |
| `--tensor-parallel-size` | GPU 数量 | 1 |
| `--gpu-memory-utilization` | GPU 显存利用率 | 0.9 |

## API 调用

### OpenAI 兼容接口

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="meta-llama/Llama-3.2-3B",
    messages=[
        {"role": "user", "content": "你好"}
    ]
)

print(response.choices[0].message.content)
```

### 流式输出

```python
stream = client.chat.completions.create(
    model="meta-llama/Llama-3.2-3B",
    messages=[{"role": "user", "content": "讲个故事"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

### cURL 调用

```bash
curl http://localhost:8000/v1/chat/completions \
    -H "Content-Type: application/json" \
    -d '{
        "model": "meta-llama/Llama-3.2-3B",
        "messages": [{"role": "user", "content": "你好"}]
    }'
```

## 多 GPU 部署

```bash
# 使用 2 个 GPU
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3.2-3B \
    --tensor-parallel-size 2
```

## 使用本地模型

```bash
# 指定本地模型路径
python -m vllm.entrypoints.openai.api_server \
    --model /path/to/your/model \
    --trust-remote-code
```

## 量化部署

### AWQ 量化

```bash
# 使用 AWQ 量化模型
python -m vllm.entrypoints.openai.api_server \
    --model TheBloke/Llama-2-7B-AWQ \
    --quantization awq
```

### GPTQ 量化

```bash
# 使用 GPTQ 量化模型
python -m vllm.entrypoints.openai.api_server \
    --model TheBloke/Llama-2-7B-GPTQ \
    --quantization gptq
```

## 性能调优

### 调整批次大小

```bash
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3.2-3B \
    --max-num-seqs 256 \
    --max-num-batched-tokens 8192
```

### 调整显存使用

```bash
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3.2-3B \
    --gpu-memory-utilization 0.95
```

## Docker 部署

```bash
# 拉取镜像
docker pull vllm/vllm-openai:latest

# 运行容器
docker run --gpus all \
    -v ~/.cache/huggingface:/root/.cache/huggingface \
    -p 8000:8000 \
    --ipc=host \
    vllm/vllm-openai:latest \
    --model meta-llama/Llama-3.2-3B
```

## 监控指标

访问 `http://localhost:8000/metrics` 查看 Prometheus 指标。

## 相关链接

- [vLLM GitHub](https://github.com/vllm-project/vllm)
- [vLLM 文档](https://vllm.readthedocs.io/)
