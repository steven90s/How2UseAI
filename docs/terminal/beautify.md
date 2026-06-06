# 终端美化

默认的终端界面功能简陋、外观朴素。通过安装主题、插件和工具，可以让终端变得美观且高效。本文以 macOS 为主进行介绍，Linux 用户步骤基本一致。

## 最终效果

美化后的终端可以拥有以下特性：

- 彩色高亮的命令提示符，显示 Git 分支、Node.js 版本等信息
- 命令语法高亮（正确的命令显示绿色，错误的显示红色）
- 智能命令补全和历史命令搜索
- 目录跳转增强（模糊匹配，快速跳转常用目录）
- 文件列表带图标和颜色

## 第一步：安装更好的终端

macOS 自带的 Terminal.app 功能有限，推荐使用以下终端：

### iTerm2（macOS 推荐）

```bash
brew install --cask iterm2
```

iTerm2 的优势：
- 分屏（`Cmd + D` 水平分屏，`Cmd + Shift + D` 垂直分屏）
- 热键窗口（快捷键呼出/隐藏终端）
- 历史命令搜索
- 自动补全提示
- 丰富的主题和配色方案

### Warp（可选）

```bash
brew install --cask warp
```

Warp 是一款现代化终端，内置 AI 助手、命令补全、块编辑等功能。界面更接近代码编辑器的体验。

## 第二步：安装 Oh My Zsh

[Oh My Zsh](https://ohmyz.sh/) 是 zsh 的配置管理框架，提供大量主题和插件，一键安装：

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

安装完成后，Oh My Zsh 会自动修改 `~/.zshrc` 配置文件。

::: tip 国内镜像
如果网络问题无法安装，可以使用 Gitee 镜像：
```bash
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```
:::

### Oh My Zsh 配置文件

安装后，所有配置都在 `~/.zshrc` 中：

```bash
# 编辑配置
nano ~/.zshrc

# 修改后使配置生效
source ~/.zshrc
```

## 第三步：安装 Powerlevel10k 主题

[Powerlevel10k](https://github.com/romkatv/powerlevel10k) 是最受欢迎的 zsh 主题，提供丰富的提示符信息和极快的渲染速度。

### 安装字体

Powerlevel10k 需要 Nerd Font 字体才能正确显示图标。推荐安装 MesloLGS NF：

```bash
# 通过 Homebrew 安装
brew install --cask font-meslo-lg-nerd-font
```

安装后在终端中设置字体：
- **iTerm2**：Preferences → Profiles → Text → Font → 选择 `MesloLGS NF`
- **macOS Terminal**：偏好设置 → 描述文件 → 字体 → 选择 `MesloLGS NF`
- **VS Code 终端**：设置中搜索 `terminal.integrated.fontFamily`，填入 `MesloLGS NF`

### 安装主题

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

编辑 `~/.zshrc`，修改主题设置：

```bash
# 找到 ZSH_THEME 这一行，改为：
ZSH_THEME="powerlevel10k/powerlevel10k"
```

保存后重新加载：

```bash
source ~/.zshrc
```

首次加载会自动启动配置向导（`p10k configure`），按提示选择你喜欢的样式即可。如果后续想重新配置：

```bash
p10k configure
```

## 第四步：安装实用插件

Oh My Zsh 有大量插件，以下是最推荐安装的几个。

### zsh-autosuggestions（命令自动建议）

根据历史命令自动提示补全，按 `→` 键接受建议：

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

### zsh-syntax-highlighting（语法高亮）

命令输入时实时高亮——正确的命令显示绿色，错误的显示红色：

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### zsh-completions（增强补全）

为更多命令提供 Tab 补全支持：

```bash
git clone https://github.com/zsh-users/zsh-completions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-completions
```

### 启用插件

编辑 `~/.zshrc`，找到 `plugins=` 这一行，修改为：

```bash
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-completions
  z
  extract
  sudo
)
```

各插件说明：

| 插件 | 功能 |
|------|------|
| `git` | Git 命令别名和补全（Oh My Zsh 内置） |
| `zsh-autosuggestions` | 根据历史自动建议命令 |
| `zsh-syntax-highlighting` | 命令语法实时高亮 |
| `zsh-completions` | 增强 Tab 补全 |
| `z` | 智能目录跳转，输入部分目录名即可跳转（内置） |
| `extract` | 万能解压命令，`extract file.tar.gz` 自动识别格式（内置） |
| `sudo` | 按两次 `Esc` 自动在命令前加 `sudo`（内置） |

保存后生效：

```bash
source ~/.zshrc
```

## 第五步：增强工具

### eza - 更好的 ls

[eza](https://github.com/eza-community/eza) 是 `ls` 的现代替代品，支持颜色、图标、Git 状态显示：

```bash
brew install eza
```

常用命令：

```bash
eza                        # 基本列出（带颜色）
eza -la                    # 详细列表 + 隐藏文件
eza -la --icons            # 带文件图标
eza --tree --level=2       # 树形展示，深度 2 级
eza -la --git              # 显示 Git 状态
```

添加别名到 `~/.zshrc`：

```bash
alias ls="eza --icons"
alias ll="eza -la --icons --git"
alias tree="eza --tree --icons"
```

### bat - 更好的 cat

[bat](https://github.com/sharkdp/bat) 是 `cat` 的替代品，支持语法高亮和行号：

```bash
brew install bat
```

```bash
bat README.md              # 语法高亮查看文件
bat -n README.md           # 只显示行号，不显示边框
bat --diff file.txt        # 显示 Git diff 高亮
```

添加别名：

```bash
alias cat="bat"
```

### fzf - 模糊搜索

[fzf](https://github.com/junegunn/fzf) 是一个通用的模糊搜索工具，可以搜索文件、历史命令等：

```bash
brew install fzf

# 安装键绑定和补全
$(brew --prefix)/opt/fzf/install
```

安装后的快捷键：

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + R` | 模糊搜索历史命令 |
| `Ctrl + T` | 模糊搜索文件并插入路径 |
| `Alt + C` | 模糊搜索目录并 cd 进入 |

### zoxide - 更智能的 cd

[zoxide](https://github.com/ajeetdsouza/zoxide) 会记住你访问过的目录，通过模糊匹配快速跳转：

```bash
brew install zoxide
```

在 `~/.zshrc` 末尾添加：

```bash
eval "$(zoxide init zsh)"
```

使用：

```bash
z project          # 跳转到路径中包含 "project" 的最常访问目录
z doc how          # 跳转到路径中包含 "doc" 和 "how" 的目录
zi                 # 交互式选择（配合 fzf）
```

## 完整配置参考

以下是一份完整的 `~/.zshrc` 配置参考，包含上述所有优化：

```bash
# Oh My Zsh 路径
export ZSH="$HOME/.oh-my-zsh"

# 主题
ZSH_THEME="powerlevel10k/powerlevel10k"

# 插件
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-completions
  z
  extract
  sudo
)

source $ZSH/oh-my-zsh.sh

# ---- 自定义别名 ----

# 文件列表增强
alias ls="eza --icons"
alias ll="eza -la --icons --git"
alias tree="eza --tree --icons"

# 文件查看增强
alias cat="bat"

# 常用快捷命令
alias c="clear"
alias ..="cd .."
alias ...="cd ../.."
alias md="mkdir -p"

# Git 快捷命令
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gl="git log --oneline -20"
alias gd="git diff"

# ---- 工具初始化 ----

# zoxide（智能 cd）
eval "$(zoxide init zsh)"

# ---- 环境变量 ----

# Node.js 版本管理（如果使用 nvm）
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## 一键安装脚本

如果你不想逐步操作，可以把以下命令依次执行，快速完成所有配置：

```bash
# 1. 安装 iTerm2
brew install --cask iterm2

# 2. 安装字体
brew install --cask font-meslo-lg-nerd-font

# 3. 安装 Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 4. 安装 Powerlevel10k 主题
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 5. 安装插件
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-completions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-completions

# 6. 安装增强工具
brew install eza bat fzf zoxide
$(brew --prefix)/opt/fzf/install --all

# 7. 配置主题（安装后手动修改 ~/.zshrc 中的 ZSH_THEME 和 plugins）
echo "安装完成！请编辑 ~/.zshrc 修改 ZSH_THEME 和 plugins，然后运行 source ~/.zshrc"
```

## 相关链接

- [Oh My Zsh 官网](https://ohmyz.sh/)
- [Powerlevel10k GitHub](https://github.com/romkatv/powerlevel10k)
- [iTerm2 官网](https://iterm2.com/)
- [Nerd Fonts](https://www.nerdfonts.com/)
- [eza GitHub](https://github.com/eza-community/eza)
- [bat GitHub](https://github.com/sharkdp/bat)
- [fzf GitHub](https://github.com/junegunn/fzf)
- [zoxide GitHub](https://github.com/ajeetdsouza/zoxide)
