# IELTS Writing Studio

一个独立的雅思写作训练网页，专门负责大小作文训练，不再和词汇/口语站混在一起。

## 迁移方向

当前项目已经额外补上了一套 Cloudflare 迁移骨架，适合后续改成：

- GitHub 托管代码
- Cloudflare Pages 托管前端
- Cloudflare Functions 提供 AI 精批接口
- Cloudflare D1 保存异步精批任务、作文档案和错题复盘数据
- Cloudflare KV 或外部共享同步后端承接和阅读复盘共用的账号体系

相关文件：

- Cloudflare 路由：`functions/api/...`
- 共享逻辑：`functions/_lib/...`
- 共享账号同步：`functions/api/cloud-sync/...`
- D1 表结构：`cloudflare/schema.sql`
- Cloudflare 配置：`wrangler.toml`
- 站点配置：`site-config.js`

## 怎么用

1. 只用本地版时，直接打开 [index.html](/Users/shyn/Documents/Playground/writing-studio/index.html)。
2. 如果要启用 AI 精批，需要在根目录启动 [server.py](/Users/shyn/Documents/Playground/server.py)：

```bash
cd /Users/shyn/Documents/Playground
export OPENAI_API_KEY="你的 OpenAI Key"
export OPENROUTER_API_KEY="你的 OpenRouter Key"
python3 server.py
```

3. 然后访问 `http://127.0.0.1:8000/writing-studio/`。

## Cloudflare 本地调试

如果你准备从 Netlify 迁到 Cloudflare，可以在 [package.json](/Users/shyn/Documents/Playground/writing-studio/package.json) 里直接用这些命令：

```bash
cd /Users/shyn/Documents/Playground/writing-studio
npm run cf:d1:apply
npm run cf:dev
```

首次迁移时，需要把 [cloudflare/schema.sql](/Users/shyn/Documents/Playground/writing-studio/cloudflare/schema.sql) 执行到 D1，再在 `wrangler.toml` 里填好真实的 `database_id`。

如果你还想让写作站和阅读复盘站共用同一个同步账号，有两种接法：

1. 给当前写作站绑定和阅读复盘相同的 `REVIEW_ATLAS_SYNC` KV Namespace
2. 或者在 [site-config.js](/Users/shyn/Documents/Playground/writing-studio/site-config.js) 里把 `cloudSyncBaseUrl` 指向阅读复盘已经部署好的 `/api/cloud-sync/*` 后端

## 已包含功能

- Task 1 / Task 2 常用句式库
- 句式填空练习
- 段落训练
- Cambridge-style 改写题库
- 自定义题目粘贴入口
- 本地计时器
- 本地估分与修改建议
- OpenAI / OpenRouter 双后端 AI 写作精批
- 本地语法 / 词汇 / 英文习惯表达检查
- 润色版对照与改动高亮
- 个人语料库与句型积累
- 训练历史记录和本地统计
- Cloudflare 版异步精批接口骨架
- Cloudflare D1 数据快照与错题复盘数据表
- 导出 / 导入 JSON 数据，方便旧站迁移
- 和阅读复盘共用的云端同步账号接口

## 说明

- 内置题目为 Cambridge-style 改写版，便于练结构与表达。
- AI 精批走根目录 `server.py` 的本地代理，API Key 不会暴露到浏览器里。
- 在线版如果已经部署了 `functions/api/ai/*`，可以直接在线使用 AI 精批；本地调试时仍可继续走根目录 `server.py`。
- 写作页可以切换 `OpenAI` 和 `OpenRouter（免费）` 两个后端；写作站后端默认会优先尝试 Google 免费模型，再尝试 OpenAI 免费模型，最后才回退到 `openrouter/free`，避免误切到付费模型。
- 如果只配了一个 Key，也能正常使用；页面会自动优先切到已连接的后端。
- 在线版已经额外准备了独立的 Netlify 配置文件 [netlify.toml](/Users/shyn/Documents/Playground/writing-studio/netlify.toml) 和函数目录 [netlify/functions](/Users/shyn/Documents/Playground/writing-studio/netlify/functions)。
- 可选环境变量：
  - `OPENAI_WRITING_REVIEW_MODEL`
  - `OPENROUTER_WRITING_REVIEW_MODEL`
  - `OPENROUTER_HTTP_REFERER`
  - `OPENROUTER_TITLE`
- 如果部署到 Netlify，至少需要在站点环境变量里设置：
  - `OPENAI_API_KEY` 或 `OPENROUTER_API_KEY`
  - 可选：`AI_PROVIDER`
  - 可选：`OPENAI_WRITING_REVIEW_MODEL`
  - 可选：`OPENROUTER_WRITING_REVIEW_MODEL`
- 旧版数据默认保存在浏览器本地 `localStorage` 中，刷新页面不会丢；迁到新域名时，可以先导出 JSON，再在新站点导入。
- Cloudflare 版前端除了站点自己的 `/api/state/*` 备份，还支持 `/api/cloud-sync/*` 共享账号同步；登录后会自动把当前浏览器里的写作记录迁入共享账号。
