---
layout: home

hero:
  name: "AI工具与大模型部署"
  text: "完整指南"
  tagline: 从入门到精通，记录AI工具、知识管理、智能体平台和大模型部署的详细步骤
  actions:
    - theme: brand
      text: 新手入门
      link: /getting-started/
    - theme: alt
      text: AI工具
      link: /ai-tools/
    - theme: alt
      text: AI智能体
      link: /ai-agents/

features:
  - icon: 📚
    title: 入门指南
    details: AI起源背景、名词解释、主流模型介绍与对比，帮助你快速了解AI世界
    link: /getting-started/
    linkText: 开始学习
  - icon: 🛠️
    title: AI工具指南
    details: 详细介绍Cursor、Claude Code、GitHub Copilot、OpenAI Codex等AI编程工具的安装配置与使用方法
    link: /ai-tools/
    linkText: 查看工具
  - icon: 🤖
    title: AI 智能体
    details: 介绍OpenClaw等AI Agent平台，让AI主动帮你执行任务、管理文件、自动化工作流
    link: /ai-agents/
    linkText: 了解智能体
  - icon: 🧠
    title: 知识管理
    details: 介绍Obsidian等个人知识库工具，帮助你整理学习笔记、项目资料和长期知识资产
    link: /knowledge/
    linkText: 管理知识库
  - icon: 🚀
    title: 大模型部署
    details: 手把手教你部署Ollama、vLLM、LM Studio等大模型推理框架
    link: /llm-deployment/
    linkText: 查看部署教程
  - icon: 💻
    title: 终端学习
    details: 终端基础命令、文件操作、环境变量配置，以及 Oh My Zsh 终端美化教程
    link: /terminal/
    linkText: 学习终端
---

<style>
.home-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
}

.home-content h2 {
  text-align: center;
  margin-bottom: 32px;
  font-size: 1.75rem;
  color: var(--vp-c-text-1);
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.tool-card {
  display: block;
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.tool-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px -12px rgba(99, 102, 241, 0.25);
  text-decoration: none;
}

.tool-card h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
}

.tool-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.tool-card .card-tag {
  display: inline-block;
  margin-top: 12px;
  padding: 2px 10px;
  font-size: 0.75rem;
  border-radius: 6px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
</style>

<div class="home-content">

## 快速导航

<div class="tool-grid">

<a class="tool-card" href="/ai-tools/claude-code">
  <h3>Claude Code</h3>
  <p>Anthropic 官方命令行 AI 编程助手，Agent 模式自主完成编码任务</p>
  <span class="card-tag">AI 工具</span>
</a>

<a class="tool-card" href="/ai-tools/cursor">
  <h3>Cursor</h3>
  <p>基于 VS Code 的 AI 代码编辑器，深度集成 AI 对话与代码补全</p>
  <span class="card-tag">AI 工具</span>
</a>

<a class="tool-card" href="/ai-tools/codex">
  <h3>OpenAI Codex</h3>
  <p>OpenAI 推出的 AI 编程助手，提供桌面客户端和开源 CLI 两种方式</p>
  <span class="card-tag">AI 工具</span>
</a>

<a class="tool-card" href="/ai-tools/copilot">
  <h3>GitHub Copilot</h3>
  <p>GitHub 官方 AI 编程插件，支持多种 IDE，智能代码补全</p>
  <span class="card-tag">AI 工具</span>
</a>

<a class="tool-card" href="/ai-agents/openclaw">
  <h3>OpenClaw</h3>
  <p>开源个人 AI 智能体，能主动操作系统、自动化工作流，500+ 社区技能</p>
  <span class="card-tag">AI 智能体</span>
</a>

<a class="tool-card" href="/knowledge/obsidian">
  <h3>Obsidian</h3>
  <p>本地优先的 Markdown 笔记工具，适合搭建个人知识库和项目资料库</p>
  <span class="card-tag">知识管理</span>
</a>

<a class="tool-card" href="/llm-deployment/ollama">
  <h3>Ollama</h3>
  <p>一键本地部署和运行大模型，支持 Llama、Qwen、DeepSeek 等</p>
  <span class="card-tag">大模型部署</span>
</a>

<a class="tool-card" href="/llm-deployment/vllm">
  <h3>vLLM</h3>
  <p>高性能大模型推理引擎，支持 GPU 加速和高并发服务</p>
  <span class="card-tag">大模型部署</span>
</a>

<a class="tool-card" href="/llm-deployment/lm-studio">
  <h3>LM Studio</h3>
  <p>图形化本地大模型管理工具，一键下载和运行模型</p>
  <span class="card-tag">大模型部署</span>
</a>

<a class="tool-card" href="/terminal/basics">
  <h3>终端基础</h3>
  <p>命令结构、路径概念、文件操作、管道重定向等核心基础知识</p>
  <span class="card-tag">终端学习</span>
</a>

<a class="tool-card" href="/terminal/beautify">
  <h3>终端美化</h3>
  <p>Oh My Zsh + Powerlevel10k 主题 + 实用插件，打造高颜值终端</p>
  <span class="card-tag">终端学习</span>
</a>

</div>

</div>
