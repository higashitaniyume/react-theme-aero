import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

function generateChangelog() {
  try {
    // 1. 获取当前日期并格式化为 YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const pubDate = `${year}-${month}-${day}`;

    // 2. 拼接你要求的 Markdown 头部 (Frontmatter)
    const frontmatter = `---
title: 'CHANGELOG'
description: '提交历史'
pubDate: '${pubDate}'
heroImage: '/image/izumi_1.webp'
tags: '提交历史'
---`;

    // 3. 执行 Git 命令获取提交历史
    // 这里使用了自定义格式：
    // %h: 简短的 commit hash
    // %ad: 提交日期
    // %an: 作者名字
    // %s: 提交信息的主题 (Subject)
    // 如果你需要更详细的信息（比如详细正文 %b），可以修改这里的 format
    const gitCommand = `git log --pretty=format:"- **[%h]** \`%ad\` *%an* : %s" --date=short`;
    
    console.log('正在获取 Git 提交历史...');
    const gitHistory = execSync(gitCommand, { encoding: 'utf-8' });

    // 4. 组装最终的 Markdown 内容
    const markdownContent = `${frontmatter}\n\n## 完整提交历史\n\n${gitHistory}\n`;

    // 5. 写入 changelog.md 文件到当前执行目录
    const outputPath = join(process.cwd(), './src/content/posts/CHANGELOG.md');
    writeFileSync(outputPath, markdownContent, 'utf-8');

    console.log(`✅ 成功生成 CHANGELOG 文件！路径: ${outputPath}`);
  } catch (error: any) {
    console.error('❌ 生成 CHANGELOG 失败！请确保当前目录是一个 Git 仓库。');
    console.error(error.message);
    process.exit(1);
  }
}

// 运行函数
generateChangelog();