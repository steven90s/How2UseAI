import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI工具与大模型部署指南",
  description: "记录各种AI工具使用方法和大模型部署步骤",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/getting-started/' },
      { text: 'AI工具', link: '/ai-tools/' },
      { text: '大模型部署', link: '/llm-deployment/' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: '入门指南',
          items: [
            { text: '入门概览', link: '/getting-started/' },
            { text: 'AI起源与背景', link: '/getting-started/background' },
            { text: '名词解释', link: '/getting-started/glossary' },
            { text: '模型介绍', link: '/getting-started/models' },
            { text: '模型对比', link: '/getting-started/comparison' }
          ]
        }
      ],
      '/ai-tools/': [
        {
          text: 'AI工具',
          items: [
            { text: '工具概览', link: '/ai-tools/' },
            { text: 'Cursor', link: '/ai-tools/cursor' },
            { text: 'Claude Code', link: '/ai-tools/claude-code' },
            { text: 'GitHub Copilot', link: '/ai-tools/copilot' }
          ]
        }
      ],
      '/llm-deployment/': [
        {
          text: '大模型部署',
          items: [
            { text: '部署概览', link: '/llm-deployment/' },
            { text: 'Ollama 部署', link: '/llm-deployment/ollama' },
            { text: 'vLLM 部署', link: '/llm-deployment/vllm' },
            { text: 'LM Studio 部署', link: '/llm-deployment/lm-studio' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright 2025 AI文档站'
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})
