---
layout: home

hero:
  name: "AI工具与大模型部署"
  text: "完整指南"
  tagline: 记录AI工具使用方法和大模型部署的详细步骤，助你成为AI开发高手
  actions:
    - theme: brand
      text: 开始探索
      link: /ai-tools/
    - theme: alt
      text: 大模型部署
      link: /llm-deployment/

features:
  - icon: 🛠️
    title: AI工具指南
    details: 详细介绍Cursor、Claude Code、GitHub Copilot等AI编程工具的使用方法和最佳实践
  - icon: 🚀
    title: 大模型部署
    details: 手把手教你部署Ollama、vLLM、LM Studio等大模型推理框架
  - icon: 📖
    title: 实战案例
    details: 包含大量实际使用场景和代码示例，帮助你快速上手
  - icon: 🔄
    title: 持续更新
    details: 随着AI技术发展，持续更新最新的工具和部署方案
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
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
}

.tool-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px -12px rgba(99, 102, 241, 0.25);
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
</style>

<div class="home-content">

## 快速导航

<div class="tool-grid">

<div class="tool-card">
  <h3>🛠️ AI工具</h3>
  <p>Cursor、Claude Code、Copilot 使用指南</p>
</div>

<div class="tool-card">
  <h3>🚀 大模型部署</h3>
  <p>Ollama、vLLM、LM Studio 部署教程</p>
</div>

<div class="tool-card">
  <h3>💻 代码示例</h3>
  <p>实用的API调用和集成代码</p>
</div>

<div class="tool-card">
  <h3>⚡ 性能优化</h3>
  <p>提升模型推理速度的技巧</p>
</div>

</div>

</div>
