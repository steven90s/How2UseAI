# 文件与目录操作

本章详细介绍终端中文件和目录的常用操作，涵盖日常开发中会遇到的绝大部分场景。

## 文件的增删改查

### 创建文件

```bash
# 创建空文件
touch index.html

# 同时创建多个文件
touch index.html style.css app.js

# 创建并写入内容
echo "hello world" > hello.txt

# 写入多行内容
cat > config.txt << 'EOF'
host=localhost
port=3000
debug=true
EOF
```

### 创建目录

```bash
# 创建单个目录
mkdir my-project

# 创建多级嵌套目录
mkdir -p my-project/src/components/ui

# 同时创建多个目录
mkdir -p {src,test,docs,config}
```

### 复制

```bash
# 复制文件
cp package.json package.json.bak

# 复制目录（必须加 -r）
cp -r src/ src-backup/

# 复制时保留权限和时间戳
cp -rp original/ backup/
```

### 移动和重命名

```bash
# 重命名
mv old-name.js new-name.js

# 移动文件到另一个目录
mv report.pdf ~/Documents/

# 移动多个文件
mv *.png ~/Pictures/

# 移动并重命名
mv src/old-component.tsx src/components/NewComponent.tsx
```

### 删除

```bash
# 删除文件
rm temp.txt

# 删除前确认
rm -i important.txt

# 删除目录
rm -r old-project/

# 删除空目录
rmdir empty-folder/
```

::: danger 删除无法恢复
终端中 `rm` 删除的文件不会进入回收站，无法恢复。建议先用 `ls` 确认目标，或使用 `rm -i` 逐一确认。
:::

## 查看文件内容

### cat - 输出完整内容

```bash
# 查看文件
cat README.md

# 显示行号
cat -n app.js

# 合并多个文件
cat header.html body.html footer.html > page.html
```

### less - 分页浏览

适合查看长文件，支持上下滚动和搜索：

```bash
less server.log
```

| 快捷键 | 操作 |
|--------|------|
| `空格` | 向下翻一页 |
| `b` | 向上翻一页 |
| `g` | 跳到文件开头 |
| `G` | 跳到文件末尾 |
| `/关键词` | 向下搜索 |
| `?关键词` | 向上搜索 |
| `n` | 下一个搜索结果 |
| `q` | 退出 |

### head / tail - 查看头部或尾部

```bash
# 查看前 20 行
head -20 data.csv

# 查看后 50 行
tail -50 error.log

# 实时跟踪文件末尾的新内容（查看实时日志）
tail -f /var/log/system.log

# 同时跟踪多个日志
tail -f app.log error.log
```

### wc - 统计

```bash
# 统计行数、单词数、字节数
wc README.md
# 输出：  42  186 1234 README.md
#        行数 单词 字节

# 只统计行数
wc -l package.json

# 统计目录下有多少个文件
ls | wc -l
```

## 搜索和查找

### grep - 在文件内容中搜索

```bash
# 基本搜索
grep "error" app.log

# 忽略大小写
grep -i "warning" app.log

# 显示行号
grep -n "TODO" src/app.js

# 递归搜索整个目录
grep -r "api_key" .

# 反向搜索（排除匹配行）
grep -v "debug" app.log

# 只显示文件名
grep -rl "import React" src/

# 搜索并显示上下文（前后 3 行）
grep -C 3 "error" app.log

# 正则表达式搜索
grep -E "^(import|export)" src/index.ts
```

### find - 查找文件

```bash
# 按文件名查找
find . -name "*.js"

# 忽略大小写
find . -iname "readme*"

# 按类型查找（f=文件, d=目录）
find . -type f -name "*.log"
find . -type d -name "node_modules"

# 按大小查找
find . -size +100M          # 大于 100MB 的文件
find . -size -1k            # 小于 1KB 的文件

# 按修改时间查找
find . -mtime -7            # 最近 7 天内修改的文件
find . -mtime +30           # 30 天前修改的文件

# 查找并执行操作
find . -name "*.log" -delete                          # 删除所有 .log 文件
find . -name "*.js" -exec grep -l "console.log" {} \; # 找包含 console.log 的 .js 文件
```

## 文件权限

### 理解权限表示

```bash
ls -la
# -rw-r--r--  1 steven  staff  1234 Mar 20 10:00 file.txt
# drwxr-xr-x  5 steven  staff   160 Mar 20 10:00 folder/
# │├─┤├─┤├─┤
# │ │   │  └── 其他用户权限
# │ │   └───── 用户组权限
# │ └───────── 所有者权限
# └──────────── 类型（d=目录, -=文件, l=链接）
```

| 符号 | 数字 | 含义 |
|------|------|------|
| `r` | 4 | 读取 |
| `w` | 2 | 写入 |
| `x` | 1 | 执行 |
| `-` | 0 | 无权限 |

### 修改权限

```bash
# 符号方式
chmod +x script.sh          # 添加执行权限
chmod u+w file.txt           # 给所有者添加写权限
chmod go-w file.txt          # 移除组和其他用户的写权限

# 数字方式（常用组合）
chmod 755 script.sh          # rwxr-xr-x（所有者全部权限，其他人只读+执行）
chmod 644 config.json        # rw-r--r--（所有者读写，其他人只读）
chmod 600 .env               # rw-------（仅所有者可读写，适合敏感文件）
```

### 修改所有者

```bash
# 修改文件所有者
sudo chown steven file.txt

# 修改目录及其内容的所有者
sudo chown -R steven:staff project/
```

## 压缩与解压

### tar

```bash
# 压缩目录为 .tar.gz
tar -czf archive.tar.gz my-project/

# 解压 .tar.gz
tar -xzf archive.tar.gz

# 解压到指定目录
tar -xzf archive.tar.gz -C /path/to/dest/

# 查看压缩包内容（不解压）
tar -tzf archive.tar.gz
```

参数含义：`c`=创建，`x`=解压，`z`=gzip压缩，`f`=指定文件名，`t`=查看，`v`=显示过程。

### zip / unzip

```bash
# 压缩
zip -r project.zip my-project/

# 解压
unzip project.zip

# 解压到指定目录
unzip project.zip -d /path/to/dest/

# 查看内容
unzip -l project.zip
```

## 软链接

软链接类似 Windows 的快捷方式，常用于管理不同版本的工具或简化长路径：

```bash
# 创建软链接
ln -s /path/to/original /path/to/link

# 实际例子：为 Node.js 版本创建别名
ln -s /opt/homebrew/bin/node18 /usr/local/bin/node

# 查看链接指向
ls -la /usr/local/bin/node

# 删除软链接（不影响原文件）
rm /path/to/link
```

## 实用组合操作

### 批量重命名

```bash
# 把所有 .txt 改为 .md
for f in *.txt; do mv "$f" "${f%.txt}.md"; done

# 给文件名添加前缀
for f in *.jpg; do mv "$f" "photo_$f"; done
```

### 统计代码行数

```bash
# 统计项目中所有 TypeScript 文件的代码行数
find . -name "*.ts" -not -path "*/node_modules/*" | xargs wc -l

# 按文件行数排序
find . -name "*.ts" -not -path "*/node_modules/*" | xargs wc -l | sort -n
```

### 清理项目

```bash
# 删除所有 node_modules（清理磁盘空间）
find ~/Projects -name "node_modules" -type d -prune -exec rm -rf {} +

# 删除 macOS 的 .DS_Store 文件
find . -name ".DS_Store" -delete

# 查找大文件
find . -type f -size +50M | head -20
```
