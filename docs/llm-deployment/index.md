# 大模型部署概览

本章节介绍如何在本地或服务器上部署和运行大语言模型(LLM)。

## 为什么本地部署？

- **隐私保护**：数据不离开本地环境
- **成本控制**：无需按API调用付费
- **离线使用**：不依赖网络连接
- **定制化**：可以微调和优化模型

## 部署方案对比

| 工具 | 难度 | 性能 | 适用场景 |
|------|------|------|----------|
| [Ollama](/llm-deployment/ollama) | 简单 | 中等 | 个人使用、快速体验 |
| [vLLM](/llm-deployment/vllm) | 中等 | 高 | 生产环境、高并发 |
| [LM Studio](/llm-deployment/lm-studio) | 简单 | 中等 | 图形界面、非技术用户 |

## 硬件要求

### 最低配置

- **CPU**: 4核以上
- **内存**: 16GB
- **存储**: 50GB SSD

### 推荐配置

- **GPU**: NVIDIA RTX 3060 或更高 (12GB+ 显存)
- **内存**: 32GB+
- **存储**: 100GB+ SSD

### 模型大小与显存需求

| 模型大小 | 最小显存 | 推荐显存 |
|----------|----------|----------|
| 7B | 6GB | 8GB |
| 13B | 10GB | 16GB |
| 30B | 20GB | 24GB |
| 70B | 40GB | 48GB |

## 模型格式

### GGUF

- 适用于 CPU 推理
- 量化后体积小
- Ollama、LM Studio 支持

### Safetensors

- 原始模型格式
- 精度最高
- vLLM、HuggingFace 支持

### AWQ/GPTQ

- GPU 量化格式
- 平衡性能和精度

## 开始使用

选择适合你的部署方案：

1. **新手推荐**: [Ollama](/llm-deployment/ollama) - 一键安装，开箱即用
2. **生产环境**: [vLLM](/llm-deployment/vllm) - 高性能，支持并发
3. **图形界面**: [LM Studio](/llm-deployment/lm-studio) - 类似ChatGPT的界面
