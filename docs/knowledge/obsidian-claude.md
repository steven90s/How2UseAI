# Obsidian + Claude 工作流指南

Obsidian + Claude 的核心价值是：用 Obsidian 保存长期知识，用 Claude 或 Claude Code 进行阅读、归纳、拆解、改写、复审和知识重组。它特别适合处理长文档、会议纪要、学习资料、产品想法和复杂决策。

如果说 Obsidian + Codex 更偏“把任务做完”，Obsidian + Claude 更偏“把问题想清楚、讲清楚、组织清楚”。

## 最新资料要点

结合 Obsidian 官方帮助和 Claude Code 官方文档，最有效的组合方式有四个关键点：

| 资料来源 | 关键结论 | 对工作流的影响 |
|----------|----------|----------------|
| Obsidian 官方帮助 | Vault 是本地 Markdown 笔记文件夹 | 可以把笔记作为 Claude 可阅读、可整理的文本资料 |
| Obsidian 内部链接 | 笔记之间可以用 `[[内部链接]]` 建立关系 | 适合让 Claude 根据主题网络整理知识 |
| Claude Code Memory | Claude Code 会读取 `CLAUDE.md` 作为项目记忆 | 可以把常用写作、整理、审查规则沉淀成 `CLAUDE.md` |
| Claude Code CLI | 支持非交互模式、管道输入和附加目录 | 可以把 Obsidian 笔记批量交给 Claude 做摘要、分类和复审 |

一句话：**Obsidian 负责保存材料，Claude 负责把材料变成结构化知识和可执行计划。**

## 适合场景

| 场景 | Obsidian 负责 | Claude 负责 |
|------|---------------|--------------|
| 会议纪要 | 保存原始记录、行动项、参与人 | 提取决策、风险、待办和后续问题 |
| 学习资料 | 保存摘录、链接、课程笔记 | 总结概念、生成学习路径、出复习题 |
| 产品想法 | 保存灵感、用户反馈、竞品资料 | 拆成需求、用户故事、优先级 |
| 文档审查 | 保存初稿、资料来源、改版记录 | 找事实错误、逻辑断层、表达不清 |
| 项目复盘 | 保存结果、问题、日志 | 总结经验、生成改进清单 |

## 推荐目录结构

```text
AI-Knowledge/
  00-Inbox/
    quick-notes.md
  10-Projects/
    How2UseAI/
      claude-context.md
      meeting-notes.md
      research-notes.md
      review-requests.md
      writing-drafts.md
      retrospectives.md
  20-Topics/
    AI-Tools/
    Knowledge-Management/
  30-Prompts/
    claude-prompts.md
```

如果使用 Claude Code，可以在一个脱敏的项目上下文目录中放 `CLAUDE.md`：

```text
ai-workspace/
  CLAUDE.md
  context/
    claude-context.md
    research-notes.md
    draft.md
```

不要直接把整个私人 Vault 暴露给 Claude Code。更稳的做法是：从 Obsidian 复制需要处理的笔记到 `context/`，处理完再把结果写回 Vault。

## CLAUDE.md 怎么设计

Claude Code 官方文档说明，`CLAUDE.md` 用来保存项目记忆和长期指令。它适合写“Claude 每次处理这个项目都要知道的规则”。

示例：

```md
# CLAUDE.md

## 工作方式

- 先总结事实，再给建议。
- 不确定的内容必须标记为“待确认”。
- 输出给 Obsidian 的内容使用 Markdown。
- 不保存或复述 API Key、账号密码、验证码、付款信息。

## 笔记整理规则

- 保留原始来源链接。
- 把结论、证据、待确认问题分开。
- 对会议纪要提取行动项、负责人和截止时间。
- 对长文档输出摘要、结构、关键词和后续阅读建议。

## 审查规则

- 优先找事实错误、逻辑跳跃、遗漏步骤、误导性表达。
- 不要只做润色，要指出具体问题。
- 如果没有明显问题，说明剩余风险。
```

如果你的仓库已经有 `AGENTS.md`，Claude Code 也可以在 `CLAUDE.md` 里用 `@AGENTS.md` 导入共同规则。

```md
@AGENTS.md

## Claude 补充

- 负责需求拆解、资料整理和文档复审。
- 不直接修改代码时，输出可交给 Codex 的任务 brief。
```

## 标准工作流

### 1. 在 Obsidian 捕获材料

先把材料放进 Obsidian，不急着让 Claude 处理：

- 会议录音转写
- 对话记录
- 官方文档链接
- 阅读摘录
- 用户反馈
- 项目想法
- Bug 现象和日志

建议每条笔记至少包含：

```md
# 标题

## 来源

## 原始内容

## 我的理解

## 待确认问题

## 相关链接
```

### 2. 复制精简上下文给 Claude

把要处理的笔记复制到 `claude-context.md`，不要把整个 Vault 都给 Claude。

```md
# Claude Context

## 背景

## 原始资料

## 已知事实

## 不确定点

## 需要 Claude 输出什么
```

### 3. 让 Claude 进行结构化整理

常用提示词：

```text
请把下面的 Obsidian 笔记整理成结构化知识。

输出：
1. 一句话摘要
2. 关键事实
3. 重要概念
4. 可执行任务
5. 风险和待确认问题
6. 适合保存回 Obsidian 的 Markdown

要求：
- 不要编造没有出现在资料里的信息
- 保留来源链接
- 对不确定内容标记“待确认”
```

### 4. 把结果写回 Obsidian

Claude 输出后，不要直接覆盖原始笔记。推荐写成三层：

```text
原始笔记 -> Claude 整理稿 -> 人工确认后的长期笔记
```

这样既保留来源，也能避免 AI 整理过程中的误解污染知识库。

### 5. 定期让 Claude 做知识库复盘

每周或每月从 Obsidian 导出某个主题的相关笔记，让 Claude 做复盘：

```text
请阅读这些笔记，帮我做一次主题复盘。

输出：
- 过去一段时间的主要进展
- 已解决的问题
- 仍然重复出现的问题
- 可以沉淀成模板的经验
- 下周最值得做的 3 件事
```

## Claude Code 用法

### 方式一：在脱敏目录中运行

```bash
cd ai-workspace
claude
```

适合需要多轮讨论、逐步整理资料的场景。

### 方式二：用非交互模式处理单篇笔记

```bash
cat context/meeting-notes.md | claude -p "请提取会议决策、行动项、风险和待确认问题，输出 Markdown"
```

适合把一篇笔记快速转成结构化结果。

### 方式三：添加上下文目录

```bash
claude --add-dir ./context
```

适合让 Claude Code 读取一个脱敏后的上下文目录。不要把整个私人 Vault 作为 `--add-dir` 暴露出去。

### 方式四：用 @ 引用文件

在 Claude Code 中可以引用具体文件：

```text
请阅读 @context/research-notes.md 和 @context/draft.md，帮我找出事实不一致和结构问题。
```

这种方式比“把整段内容复制进对话”更适合多文件整理，但仍要注意只引用需要的文件。

## 效率提升方法

### 方法一：把 Claude 当作知识编辑

Obsidian 保存原始内容，Claude 做编辑处理：

- 把散乱笔记整理成大纲
- 把会议纪要整理成行动项
- 把长文档变成摘要和术语表
- 把多个观点整理成对比表
- 把口语化记录改成正式文档

### 方法二：用 Claude 生成 Obsidian 模板

让 Claude 帮你生成稳定模板：

```text
请为 Obsidian 生成一个项目复盘模板。

要求：
- 适合软件项目
- 包含目标、结果、验证、问题、经验、后续行动
- 用 Markdown
- 可以直接保存为模板文件
```

模板生成后放到 `30-Prompts/` 或 Obsidian Templates 文件夹中。

### 方法三：用 Claude 做长文档压缩

当资料很多时，不要让 Claude 直接“总结所有内容”。先要求它按层级压缩：

```text
请按三层压缩这份资料：

1. 100 字摘要
2. 10 条关键事实
3. 3 个最重要的行动建议

不要加入资料中没有的信息。
```

这种输出更适合写回 Obsidian，也更容易交给 Codex 或其他工具继续执行。

### 方法四：用 Claude 做二次审查

Claude 很适合审查文档和需求：

```text
请审查下面这篇文档。

重点看：
- 是否有事实错误
- 是否有逻辑断层
- 是否有步骤遗漏
- 是否有安全或账号风险
- 是否有读者可能误解的表达

只输出问题清单和修改建议。
```

### 方法五：把反复用到的提示词沉淀回 Obsidian

维护 `claude-prompts.md`：

```md
## 会议纪要整理

请把以下会议纪要整理成：

- 背景
- 已确定决策
- 行动项
- 负责人
- 截止时间
- 风险
- 待确认问题

输出 Markdown。
```

每次用完后，根据 Claude 的效果微调模板。几轮之后，提示词会越来越贴近你的工作方式。

## 常用 Prompt

### 知识整理

```text
请把下面的笔记整理成 Obsidian 知识卡片。

要求：
- 标题清晰
- 用二级标题组织
- 保留来源
- 提取关键词
- 增加“相关笔记”占位
- 不要编造事实
```

### 需求拆解

```text
请把下面的想法拆成产品需求。

输出：
1. 用户问题
2. 目标用户
3. 核心功能
4. 不做范围
5. 验收标准
6. 待确认问题
7. 可交给开发 Agent 的任务描述
```

### 学习计划

```text
请根据这些学习笔记，为我生成 7 天复习计划。

要求：
- 每天有主题
- 每天有输出任务
- 列出需要回看的笔记
- 最后生成自测题
```

### 文档复审

```text
请审查这篇文档，按严重程度列出问题。

优先关注：
- 事实错误
- 步骤缺失
- 读者误解
- 风险提示不足
- 官方来源缺失
```

## 与 Codex 的分工

如果你同时使用 Codex，可以这样分工：

| 阶段 | Claude | Codex |
|------|--------|-------|
| 需求输入 | 整理会议纪要和原始想法 | 不参与或只读精简结果 |
| 任务拆解 | 输出背景、范围、验收标准 | 根据任务修改仓库 |
| 文档写作 | 生成结构、审查逻辑 | 写入 VitePress 页面、更新侧边栏 |
| 代码变更 | 做方案讨论和复审 | 实现、测试、修复 |
| 复盘 | 总结经验和模板 | 生成变更说明和验证结果 |

推荐顺序：**Obsidian 捕获事实 -> Claude 整理和审查 -> Codex 执行修改 -> Obsidian 沉淀结果。**

## 安全边界

不要直接交给 Claude：

- 整个私人 Obsidian Vault
- API Key、Token、Cookie、SSH 私钥
- Apple / Google / OpenAI 账号密码
- 手机验证码、礼品卡兑换码、支付卡资料
- 客户隐私数据、合同、未公开财务信息

更稳的做法：

- 使用脱敏的 `context/` 目录
- 一次只给当前任务需要的笔记
- 保留原始笔记，不直接覆盖
- 对 Claude 输出做人工确认
- 重要结论写入 `decisions.md`

## 检查清单

开始前：

- [ ] 笔记已脱敏
- [ ] 资料来源清楚
- [ ] 已说明希望 Claude 输出什么
- [ ] 不确定内容有标记

执行中：

- [ ] Claude 没有编造来源
- [ ] 输出可直接保存为 Markdown
- [ ] 事实、建议、待确认问题分开
- [ ] 重要内容经过人工确认

完成后：

- [ ] 结果写回 Obsidian
- [ ] 原始笔记保留
- [ ] 可复用 Prompt 已保存
- [ ] 待办项进入任务系统或项目笔记

## 相关链接

- [Obsidian 使用教程](/knowledge/obsidian)
- [Obsidian Claudian 插件教程](/knowledge/obsidian-claudian)
- [Claude Code](/ai-tools/claude-code)
- [Obsidian + Codex 工作流指南](/knowledge/obsidian-codex)
- [Obsidian 数据存储说明](https://help.obsidian.md/data-storage)
- [Obsidian 内部链接说明](https://help.obsidian.md/links)
- [Obsidian Templates](https://help.obsidian.md/plugins/templates)
- [Claude Code Memory / CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference)
- [Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
