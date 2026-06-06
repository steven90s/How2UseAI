# Obsidian + Codex 工作流指南

Obsidian + Codex 的核心价值是：用 Obsidian 保存长期项目知识，用 Codex 在代码仓库里执行实现、测试、修复和审查。Obsidian 不替代代码仓库，Codex 也不替代知识库；两者配合后，可以把“想法、需求、决策、复盘”稳定转化成可验证的工程改动。

## 最新资料要点

结合 Obsidian 官方帮助和 OpenAI Codex 官方手册，最有效的组合方式有四个关键点：

| 资料来源 | 关键结论 | 对工作流的影响 |
|----------|----------|----------------|
| Obsidian 官方帮助 | Obsidian 将笔记保存为本地 Markdown 文件，Vault 是普通文件夹 | 可以把项目上下文整理成可复制、可版本管理的 Markdown |
| Obsidian 内部链接 | `[[内部链接]]` 可以把笔记连成知识网络 | 适合维护需求、决策、架构、复盘之间的关系 |
| Codex 最佳实践 | 好任务要包含目标、上下文、约束和完成标准 | Obsidian 可以专门维护这些“交给 Codex 的任务上下文” |
| Codex `AGENTS.md` | Codex 会读取 `AGENTS.md` 作为持久项目指导 | Obsidian 中沉淀的工程规则，可以同步成仓库里的 `AGENTS.md` |

一句话：**Obsidian 负责把背景讲清楚，Codex 负责把事情做完并验证。**

## 适合场景

| 场景 | Obsidian 负责 | Codex 负责 |
|------|---------------|------------|
| 文档站维护 | 记录选题、资料来源、页面结构 | 新增页面、改导航、跑构建 |
| 功能开发 | 记录需求、验收标准、边界条件 | 改代码、补测试、修 lint |
| Bug 排查 | 记录现象、日志、复现步骤、已尝试方案 | 阅读代码、定位根因、提交修复 |
| 技术决策 | 记录备选方案、取舍、结论 | 根据决策修改实现和文档 |
| 项目复盘 | 记录本次改动、验证结果、后续问题 | 生成 changelog、更新 README 或 docs |

## 推荐目录结构

不要把整个代码仓库直接放进 Obsidian Vault。更稳的方式是：Vault 保存知识，仓库保存实现；需要给 Codex 的上下文，复制或同步成仓库中的精简 Markdown。

Obsidian Vault：

```text
AI-Knowledge/
  10-Projects/
    How2UseAI/
      requirements.md
      architecture.md
      decisions.md
      codex-context.md
      codex-prompts.md
      changelog.md
      retrospectives.md
```

代码仓库：

```text
How2UseAI/
  AGENTS.md
  docs/
    ai-context.md
    decisions.md
  package.json
```

推荐分工：

- `requirements.md`：写完整需求，面向自己和团队
- `codex-context.md`：写精简上下文，面向 Codex
- `codex-prompts.md`：保存可复用提示词
- `AGENTS.md`：写 Codex 每次进入仓库都要遵守的规则
- `docs/ai-context.md`：放本次任务需要的上下文，不放私密资料

## AGENTS.md 怎么从 Obsidian 沉淀出来

Codex 官方手册建议把仓库结构、构建命令、测试命令、工程约定、限制和完成标准写进 `AGENTS.md`。这些内容最适合先在 Obsidian 中迭代，稳定后再复制到仓库。

示例：

```md
# AGENTS.md

## 项目规则

- 使用项目现有文档风格，不做无关重构。
- 新增 VitePress 页面后，同步更新侧边栏和相关入口。
- 涉及 OpenAI、Apple、Google、Claude 等会变化的信息时，优先查官方文档。
- 不提交 `.env`、API Key、账号、手机号、验证码、付款信息。

## 验证命令

- 修改文档后运行 `npm run docs:build`
- 本地服务使用 `npm run docs:dev`

## 完成标准

- 构建通过
- 相关页面可以从侧边栏访问
- 最终说明修改了哪些文件和验证结果
```

维护建议：

- `AGENTS.md` 不要写成百科，优先写会影响 Codex 行为的规则
- 如果规则越来越多，把详细说明放到 `docs/ai-context.md`，在 `AGENTS.md` 里引用
- 每次 Codex 犯同类错误，就把对应规则补回 Obsidian 和 `AGENTS.md`

## 标准工作流

### 1. 在 Obsidian 写任务卡

```md
# 任务：强化 ChatGPT 订阅文档

## 背景

当前文档已有注册和订阅说明，但网络环境、地区限制和代理说明不够清楚。

## 目标

- 增加网络环境与地区限制章节
- 补充代理 / VPN 的边界
- 更新 FAQ、检查清单和相关链接

## 约束

- 不鼓励绕过地区限制
- 官方政策必须以 OpenAI 帮助中心为准
- 不能删除已有注册和支付路线

## 完成标准

- `npm run docs:build` 通过
- 页面能正常访问
- 新内容能在文档中搜索到
```

### 2. 整理成 Codex 任务上下文

把任务卡压缩成 Codex 更容易执行的格式：

```text
请根据 docs/ai-context.md 修改 ChatGPT 文档。

目标：
- 在注册前准备后面增加“网络环境与地区限制”
- 说明访问地区、账号地区、付款地区、设备地区的区别
- 说明代理 / VPN 的作用和边界
- 更新 FAQ、检查清单、相关链接

约束：
- 不鼓励绕过地区限制
- 涉及 OpenAI 政策时查官方帮助中心
- 不改无关页面

完成标准：
- npm run docs:build 通过
- http://127.0.0.1:808/ai-tools/chatgpt 返回 200
- 最终说明改动文件和验证结果
```

### 3. 让 Codex 执行

适合交给 Codex 的任务：

- 新增文档页面
- 修改 VitePress 导航和侧边栏
- 根据资料重写章节
- 对照旧文档合并内容
- 运行构建、测试、lint
- 根据错误日志修复问题
- 审查 `git diff` 中的遗漏和风险

不建议直接交给 Codex 的任务：

- 让它猜测未提供的业务事实
- 给它整个私密 Obsidian Vault
- 让它在没有验收标准的情况下大范围重构
- 把账号、密钥、验证码、礼品卡码放进上下文

### 4. 把结果写回 Obsidian

Codex 完成后，把结果沉淀回 Obsidian：

```md
# 2026-06-06 ChatGPT 网络环境补充

## 改动

- 新增网络环境与地区限制章节
- 补充代理 / VPN 说明
- 更新 FAQ、检查清单、相关链接

## 验证

- `npm run docs:build` 通过
- 本地页面返回 200

## 可复用经验

- 地区类文档要分清访问地区、付款地区、账号地区、设备地区
- 涉及 OpenAI 当前政策必须查官方帮助中心

## 下次优化

- 增加一张账号注册风险矩阵
```

## 效率提升方法

### 方法一：把 Obsidian 变成任务 Brief 库

不要每次重新解释项目背景。给每个项目维护固定的 Brief 模板：

```md
# Codex Brief

## 项目背景

## 当前目标

## 相关文件

## 不能做什么

## 验收标准

## 参考资料
```

每次只更新“当前目标”和“相关文件”，Codex 就能更快进入状态。

### 方法二：用内部链接组织上下文

在 Obsidian 里用链接把项目知识连接起来：

```md
本次任务关联：

- [[ChatGPT账号注册]]
- [[OpenAI支持地区]]
- [[Apple礼品卡订阅]]
- [[Google Play订阅]]
- [[代理和网络限制]]
```

然后只把相关笔记摘成 `docs/ai-context.md`，不要把整个 Vault 丢给 Codex。这样上下文更小，结果更稳定。

### 方法三：让 Codex 带着完成标准工作

Codex 官方最佳实践强调“完成标准”。Obsidian 里每个任务都应该写清楚：

- 哪个页面或模块要变化
- 哪些行为不能变
- 要跑什么验证
- 什么结果算完成
- 最终要汇报什么

Codex 收到这类任务后，会更容易自己规划、实现、验证和复盘。

### 方法四：把重复任务沉淀为 Prompt

Obsidian 里维护一页 `codex-prompts.md`：

```md
## 文档增强 Prompt

请增强指定文档：

- 先阅读现有页面
- 查官方资料
- 保持原有风格
- 更新侧边栏或首页入口
- 运行 `npm run docs:build`
- 汇报文件和验证结果
```

之后每次复用，只改目标页面和主题。

### 方法五：用 Codex 审查自己的产出

任务完成后，让 Codex 进入审查模式：

```text
请审查本次改动，优先找：
- 事实错误
- 链接遗漏
- 导航遗漏
- 构建风险
- 对读者有误导的表达

只输出问题和建议。
```

这一步能减少“页面写了但入口没挂”“内容改了但检查清单没同步”这类低级遗漏。

## 常用 Prompt

### 从 Obsidian 任务卡生成 Codex 指令

```text
请把下面的 Obsidian 任务卡整理成 Codex 可执行任务。

输出：
1. 目标
2. 背景
3. 需要修改的文件
4. 约束
5. 验收标准
6. 可直接复制给 Codex 的最终提示词

要求：
- 不要编造文件路径
- 不确定内容标记为待确认
```

### 让 Codex 根据上下文执行

```text
请阅读 AGENTS.md 和 docs/ai-context.md，然后完成任务。

要求：
- 先搜索相关文件
- 保持现有文档风格
- 修改后运行必要验证
- 不处理无关文件
- 最后说明修改和验证结果
```

### 让 Codex 写回复盘

```text
请根据本次改动生成一段适合保存到 Obsidian 的复盘。

包含：
- 本次目标
- 改动文件
- 验证结果
- 关键决策
- 后续建议
```

## 安全边界

不要给 Codex 这些内容：

- 私人 Obsidian Vault 全量目录
- API Key、Token、Cookie、SSH 私钥
- Apple / Google / OpenAI 账号密码
- 手机验证码、礼品卡兑换码、支付卡资料
- 客户隐私数据、合同、内部财务信息

推荐做法：

- 从 Obsidian 复制“脱敏后的精简上下文”
- 仓库里使用 `.env.example`，不要提交 `.env`
- 让 Codex 只访问当前任务需要的目录
- 重大改动后用 Git diff 审查

## 检查清单

开始前：

- [ ] Obsidian 中有任务卡
- [ ] 上下文已经脱敏
- [ ] 仓库有 `AGENTS.md`
- [ ] 验收标准清楚

执行中：

- [ ] Codex 已阅读相关文件
- [ ] 没有改无关页面
- [ ] 已运行构建、测试或 lint
- [ ] 已检查导航和链接

完成后：

- [ ] 把结果写回 Obsidian
- [ ] 更新 `decisions.md` 或 `changelog.md`
- [ ] 保存可复用 Prompt
- [ ] 删除临时上下文文件

## 相关链接

- [Obsidian 使用教程](/knowledge/obsidian)
- [Obsidian Claudian 插件教程](/knowledge/obsidian-claudian)
- [OpenAI Codex](/ai-tools/codex)
- [Obsidian + Claude 工作流指南](/knowledge/obsidian-claude)
- [Obsidian 数据存储说明](https://help.obsidian.md/data-storage)
- [Obsidian 内部链接说明](https://help.obsidian.md/links)
- [OpenAI Codex Manual](https://developers.openai.com/codex/codex-manual.md)
- [AGENTS.md 官方说明](https://developers.openai.com/codex/guides/agents-md)
