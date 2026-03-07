# AI名词解释

本文档收集了AI领域常见的术语和概念，帮助你快速理解专业名词。

## 基础概念

### AI / 人工智能
Artificial Intelligence，让机器模拟人类智能行为的技术。

### ML / 机器学习
Machine Learning，AI的子领域，让机器从数据中学习规律，无需显式编程。

### DL / 深度学习
Deep Learning，机器学习的子领域，使用多层神经网络进行学习。

### NLP / 自然语言处理
Natural Language Processing，让机器理解和生成人类语言的技术。

### LLM / 大语言模型
Large Language Model，基于Transformer架构、参数量巨大的语言模型，如GPT、Claude、Llama等。

---

## 模型架构术语

### Transformer
2017年Google提出的神经网络架构，是现代大模型的基础。核心是**自注意力机制**。

### Attention / 注意力机制
让模型在处理输入时，能够"关注"到最重要的部分。

::: tip 通俗理解
就像人看书时会重点关注关键词，注意力机制让模型知道哪些词更重要。
:::

### Token / 词元
文本被切分成的最小单位。中文约1.5-2个字符=1个token，英文约4个字符=1个token。

```
"Hello World" → ["Hello", " World"] → 2 tokens
"你好世界" → ["你好", "世界"] → 2 tokens
```

### Embedding / 嵌入
将文字转换为向量（数字列表），让机器能够理解语义。

### Context Window / 上下文窗口
模型一次能处理的最大token数量。

| 模型 | 上下文窗口 |
|------|-----------|
| GPT-4 Turbo | 128K |
| Claude 3 | 200K |
| Llama 3 | 8K-128K |

### Parameters / 参数量
模型中可学习权重的数量，通常以B（十亿）为单位。

- 7B = 70亿参数
- 70B = 700亿参数
- 175B = 1750亿参数（GPT-3）

---

## 训练相关术语

### Pre-training / 预训练
在大规模无标注数据上训练模型，学习通用知识。

### Fine-tuning / 微调
在特定领域数据上继续训练预训练模型，使其适应特定任务。

### SFT / 监督微调
Supervised Fine-Tuning，使用标注数据进行微调。

### RLHF / 人类反馈强化学习
Reinforcement Learning from Human Feedback，通过人类评价来优化模型输出。

```
训练流程：预训练 → SFT → RLHF → 最终模型
```

### RAG / 检索增强生成
Retrieval-Augmented Generation，先从知识库检索相关信息，再让模型生成回答。

### Zero-shot / 零样本
不给示例，直接让模型完成任务。

### Few-shot / 少样本
给少量示例，帮助模型理解任务。

---

## 推理相关术语

### Inference / 推理
使用训练好的模型生成输出的过程。

### Temperature / 温度
控制模型输出随机性的参数（0-2）。

| 温度值 | 特点 |
|--------|------|
| 0 | 最确定，输出最可预测 |
| 0.7 | 平衡，常用默认值 |
| 1.0+ | 更有创造性，输出更多样 |

### Top-p / 核采样
限制模型只从累积概率达到p的候选词中选择。

### Max Tokens / 最大输出长度
限制模型回复的最大token数。

### Latency / 延迟
从发送请求到收到第一个token的时间。

### TPS / Tokens Per Second
每秒生成的token数量，衡量推理速度。

---

## 量化与优化

### Quantization / 量化
将模型参数从高精度（如FP16）转换为低精度（如INT8、INT4），减少显存占用。

| 精度 | 显存需求 | 质量损失 |
|------|----------|----------|
| FP16 | 100% | 无 |
| INT8 | 50% | 极小 |
| INT4 | 25% | 小 |

### KV Cache
键值缓存，加速推理的优化技术。

### Flash Attention
一种高效的注意力计算方法，显著提升训练和推理速度。

---

## 模型格式

### GGUF
llama.cpp使用的量化模型格式，适合CPU推理。

### Safetensors
Hugging Face推广的安全模型格式，替代pickle。

### ONNX
跨平台模型格式，便于在不同框架间部署。

### AWQ / GPTQ
GPU量化格式，平衡精度和速度。

---

## 评估指标

### Perplexity / 困惑度
衡量模型预测能力，越低越好。

### BLEU
评估机器翻译质量的指标。

### MMLU
大规模多任务语言理解基准测试，评估模型综合能力。

### Human Eval
评估代码生成能力的基准测试。

---

## 常见缩写速查

| 缩写 | 全称 | 含义 |
|------|------|------|
| API | Application Programming Interface | 应用程序接口 |
| GPU | Graphics Processing Unit | 图形处理器 |
| TPU | Tensor Processing Unit | 张量处理器 |
| CUDA | Compute Unified Device Architecture | NVIDIA并行计算平台 |
| HF | Hugging Face | 开源模型社区 |
| API Key | API密钥 | 调用API的认证凭证 |

---

## 下一步

了解了术语后，继续学习[主流模型介绍](/getting-started/models)。
