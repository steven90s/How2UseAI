# 终端基础

## 什么是终端？

终端（Terminal）是一个让你通过**文字命令**与操作系统交互的程序。你输入命令，系统执行后返回结果——没有按钮，没有菜单，全靠键盘输入。

听起来原始，但它是最高效、最强大的操作方式。

### 终端 vs Shell vs 命令行

这三个概念经常被混用，它们的区别：

| 概念 | 说明 | 举例 |
|------|------|------|
| **终端（Terminal）** | 显示文字的窗口程序 | macOS 终端、iTerm2、Windows Terminal |
| **Shell** | 解释并执行命令的程序 | zsh、bash、fish、PowerShell |
| **命令行（CLI）** | 通过输入文字来操作的方式 | 相对于图形界面（GUI）而言 |

简单理解：**终端**是窗口，**Shell** 是里面运行的解释器，**命令行**是这种交互方式的统称。

### macOS 默认配置

- 终端应用：`Terminal.app`（自带）
- 默认 Shell：`zsh`（macOS Catalina 起）
- 配置文件：`~/.zshrc`

### 打开终端

- **macOS**：`Command + 空格` 搜索「终端」或「Terminal」
- **Windows**：搜索「Windows Terminal」或「PowerShell」
- **Linux**：`Ctrl + Alt + T`（大多数发行版）

## 理解命令的结构

一条命令的基本格式：

```
命令 [选项] [参数]
```

例如：

```bash
ls -la /Users/steven/Documents
#  |  |   |
#  |  |   └── 参数：操作的目标（哪个目录）
#  |  └────── 选项：修改命令的行为（-l 详细列表，-a 显示隐藏文件）
#  └───────── 命令：要执行的操作（列出文件）
```

## 路径的概念

### 绝对路径 vs 相对路径

```bash
# 绝对路径：从根目录 / 开始的完整路径
/Users/steven/Documents/project

# 相对路径：相对于当前目录的路径
./project        # 当前目录下的 project
../project       # 上一级目录下的 project
```

### 特殊路径符号

| 符号 | 含义 | 示例 |
|------|------|------|
| `/` | 根目录 | `cd /` |
| `~` | 用户主目录 | `cd ~` 等同于 `cd /Users/你的用户名` |
| `.` | 当前目录 | `./script.sh`（执行当前目录下的脚本） |
| `..` | 上一级目录 | `cd ..`（回到上一层） |
| `-` | 上一次所在目录 | `cd -`（在两个目录间快速切换） |

## 基础命令速查

### 导航

```bash
# 查看当前所在目录
pwd
# 输出：/Users/steven/Documents

# 切换目录
cd ~/Desktop          # 去桌面
cd ..                 # 回到上一级
cd -                  # 回到上一次的目录
cd                    # 直接回到主目录

# 列出文件和目录
ls                    # 简单列出
ls -l                 # 详细列表（权限、大小、日期）
ls -la                # 包含隐藏文件（以 . 开头的文件）
ls -lh                # 文件大小用人类可读格式（KB、MB）
```

### 文件操作

```bash
# 创建文件
touch newfile.txt               # 创建空文件

# 创建目录
mkdir my-project                # 创建目录
mkdir -p src/components/ui      # 创建多级嵌套目录

# 复制
cp file.txt backup.txt          # 复制文件
cp -r folder/ folder-backup/    # 复制整个目录（-r 递归）

# 移动/重命名
mv old-name.txt new-name.txt    # 重命名
mv file.txt ~/Desktop/          # 移动到桌面

# 删除
rm file.txt                     # 删除文件
rm -r folder/                   # 删除目录及其内容
rm -ri folder/                  # 删除前逐一确认
```

::: danger 危险操作
`rm -rf /` 或 `rm -rf ~` 会删除所有文件且**无法恢复**。执行 `rm` 前务必确认路径正确。终端中的删除不进回收站。
:::

### 查看文件内容

```bash
# 查看完整内容
cat file.txt

# 分页查看（适合长文件）
less file.txt             # 按 q 退出，空格翻页，/ 搜索

# 查看前几行/后几行
head -20 file.txt         # 前 20 行
tail -20 file.txt         # 后 20 行
tail -f server.log        # 实时跟踪文件变化（查看日志常用）
```

### 搜索

```bash
# 在文件中搜索文字
grep "error" log.txt               # 在 log.txt 中搜索包含 error 的行
grep -r "TODO" src/                # 在 src 目录下递归搜索
grep -i "hello" file.txt           # 忽略大小写

# 查找文件
find . -name "*.txt"               # 在当前目录下查找所有 .txt 文件
find ~/Desktop -name "report*"     # 在桌面查找以 report 开头的文件
```

### 系统信息

```bash
# 查看当前用户
whoami

# 查看系统信息
uname -a

# 查看磁盘使用
df -h                     # 各磁盘分区使用情况
du -sh ~/Downloads        # 某个目录占用的空间

# 查看进程
ps aux                    # 所有进程
top                       # 实时进程监控（按 q 退出）

# 查看端口占用
lsof -i :8080             # 查看 8080 端口被哪个进程占用
```

### 网络

```bash
# 测试网络连通性
ping google.com            # 按 Ctrl+C 停止

# 下载文件
curl -O https://example.com/file.zip
wget https://example.com/file.zip    # 需要安装 wget

# 查看本机 IP
ifconfig | grep "inet "
```

## 管道和重定向

管道（`|`）和重定向（`>`）是终端的核心概念，能把简单命令组合成强大的操作链。

### 管道 `|`

把一个命令的输出作为另一个命令的输入：

```bash
# 搜索进程中包含 node 的
ps aux | grep node

# 统计当前目录下有多少个 .ts 文件
find . -name "*.ts" | wc -l

# 查看最占空间的 10 个文件
du -sh * | sort -rh | head -10
```

### 重定向 `>` `>>`

把命令的输出写入文件：

```bash
# 输出到文件（覆盖）
echo "hello" > output.txt

# 追加到文件
echo "world" >> output.txt

# 把命令结果保存到文件
ls -la > filelist.txt
```

## 快捷键

在终端中，这些快捷键能大幅提升效率：

| 快捷键 | 作用 |
|--------|------|
| `Tab` | 自动补全命令、文件名、路径 |
| `Ctrl + C` | 中断当前正在运行的命令 |
| `Ctrl + Z` | 暂停当前命令（用 `fg` 恢复） |
| `Ctrl + D` | 退出当前 Shell |
| `Ctrl + L` | 清屏（等同于 `clear`） |
| `Ctrl + A` | 光标移到行首 |
| `Ctrl + E` | 光标移到行尾 |
| `Ctrl + W` | 删除光标前的一个单词 |
| `Ctrl + U` | 删除光标前的整行 |
| `Ctrl + R` | 搜索历史命令 |
| `!!` | 重复上一条命令 |
| `!$` | 引用上一条命令的最后一个参数 |
| `上下方向键` | 浏览历史命令 |

::: tip Tab 补全是最重要的技巧
输入文件名或命令的前几个字母后按 `Tab`，Shell 会自动补全。如果有多个匹配项，按两次 `Tab` 会列出所有选项。善用 Tab 补全可以避免拼写错误，大幅提升速度。
:::

## 环境变量

环境变量是系统中全局可用的配置值，很多 AI 工具依赖它来读取 API Key 等配置。

```bash
# 查看某个环境变量
echo $PATH
echo $HOME

# 临时设置（只在当前终端有效）
export MY_VAR="hello"

# 永久设置（写入配置文件）
echo 'export ANTHROPIC_API_KEY="sk-ant-xxxxx"' >> ~/.zshrc
source ~/.zshrc    # 使配置立即生效

# 查看所有环境变量
env
```

### PATH 变量

`PATH` 是最重要的环境变量，它告诉 Shell 去哪些目录查找可执行程序：

```bash
# 查看当前 PATH
echo $PATH
# 输出类似：/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin

# 添加新路径到 PATH
export PATH="$PATH:/new/path"
```

当你输入 `claude`、`node`、`git` 等命令时，Shell 会在 PATH 列出的目录中依次查找。如果提示「command not found」，通常是程序没有安装或不在 PATH 中。

## 常见问题

### command not found

```bash
# 问题：zsh: command not found: node
# 原因：程序未安装或未添加到 PATH

# 排查：
which node          # 查看 node 在哪里
echo $PATH          # 检查 PATH 中有没有 node 所在目录
```

### permission denied

```bash
# 问题：permission denied
# 原因：没有执行权限

# 解决：
chmod +x script.sh       # 给脚本添加执行权限
sudo command              # 以管理员身份执行（需要输入密码）
```

::: warning sudo 注意事项
`sudo` 拥有最高权限，执行前务必确认命令是安全的。不要盲目在所有报错命令前加 `sudo`。
:::

### 进程卡住了

```bash
# 方法 1：Ctrl + C 中断
# 方法 2：Ctrl + Z 暂停，然后 kill 掉
kill %1

# 方法 3：找到进程并杀掉
ps aux | grep "进程名"
kill -9 进程PID
```
