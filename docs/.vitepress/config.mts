import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI工具与大模型部署指南",
  description: "记录各种AI工具使用方法和大模型部署步骤",
  lang: 'zh-CN',
  vite: {
    server: {
      allowedHosts: ['badesign.pro']
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/getting-started/' },
      { text: 'AI工具', link: '/ai-tools/' },
      { text: 'AI智能体', link: '/ai-agents/' },
      { text: '知识管理', link: '/knowledge/' },
      { text: '大模型部署', link: '/llm-deployment/' },
      { text: '终端学习', link: '/terminal/' }
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
            { text: 'ChatGPT', link: '/ai-tools/chatgpt' },
            { text: 'Claude Code', link: '/ai-tools/claude-code' },
            { text: 'GitHub Copilot', link: '/ai-tools/copilot' },
            { text: 'OpenAI Codex', link: '/ai-tools/codex' },
            { text: 'OpenCode', link: '/ai-tools/opencode' }
          ]
        }
      ],
      '/ai-agents/': [
        {
          text: 'AI 智能体',
          items: [
            { text: '智能体概览', link: '/ai-agents/' },
            { text: 'OpenClaw', link: '/ai-agents/openclaw' }
          ]
        }
      ],
      '/knowledge/': [
        {
          text: '知识管理',
          items: [
            { text: '知识管理概览', link: '/knowledge/' },
            { text: 'Obsidian', link: '/knowledge/obsidian' },
            { text: 'Obsidian Claudian', link: '/knowledge/obsidian-claudian' },
            { text: 'Obsidian + Claude', link: '/knowledge/obsidian-claude' },
            { text: 'Obsidian + Codex', link: '/knowledge/obsidian-codex' }
          ]
        }
      ],
      '/terminal/': [
        {
          text: '终端学习',
          items: [
            { text: '终端学习指南', link: '/terminal/' },
            { text: '终端基础', link: '/terminal/basics' },
            { text: '文件与目录操作', link: '/terminal/files' },
            { text: 'Git 使用教程', link: '/terminal/git' },
            { text: 'GitHub 使用教程', link: '/terminal/github' },
            { text: '终端美化', link: '/terminal/beautify' }
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
