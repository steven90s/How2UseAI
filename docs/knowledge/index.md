# 知识管理

这里收集个人知识库、笔记整理和学习资料管理工具的使用方法。

## 工具列表

| 工具 | 类型 | 适合场景 |
|------|------|----------|
| [Obsidian](/knowledge/obsidian) | 本地 Markdown 笔记工具 | 构建个人知识库、双向链接、学习笔记和项目资料管理 |
| [Obsidian Claudian](/knowledge/obsidian-claudian) | Obsidian AI Agent 插件 | 在 Obsidian Vault 中使用 Claude、Codex、OpenCode 读写笔记、整理上下文和执行多步骤任务 |
| [Obsidian + Claude](/knowledge/obsidian-claude) | AI 知识整理工作流 | 用 Obsidian 保存资料，用 Claude 做长文档总结、需求拆解、复审和知识重组 |
| [Obsidian + Codex](/knowledge/obsidian-codex) | AI 编程工作流 | 用 Obsidian 沉淀任务上下文，用 Codex 实现、测试、修复和审查 |

## 学习建议

- **先记录，再整理**：不要一开始就设计复杂分类，先把信息稳定写下来
- **少建文件夹，多用链接**：Obsidian 的优势是笔记之间的关联，不只是目录树
- **保留原始文件**：笔记以 Markdown 文件保存，方便备份、迁移和版本管理
- **定期回顾**：每周花一点时间清理收件箱、补链接、归档项目资料
- **插件先小范围验证**：Claudian 这类 Agent 插件会让 AI 读写 Vault，建议先建测试 Vault 跑通流程
- **让 AI 吃精简上下文**：把 Obsidian 中的项目背景整理成 `agent-context.md`，再交给 Codex 或 Claude，而不是把整个知识库一次性丢给 AI
- **按任务选择工具**：要执行代码和跑验证时用 Codex；要整理材料、拆解需求和复审文档时用 Claude

## 推荐阅读

- [Obsidian 官方中文帮助](https://obsidian.md/zh/help/obsidian)
- [Obsidian Help](https://help.obsidian.md/)
- [PKMer 中文社区](https://pkmer.cn/)
- [Obsidian Hub](https://publish.obsidian.md/hub/)
