# AGENTS.md - 无名杀项目上下文指南

## 项目概述

**无名杀（noname）** 是一款基于 JavaScript、CSS 和 HTML 开发的开源卡牌游戏，灵感来源于《三国杀》。项目遵循 GPLv3 协议，完全免费且不做任何商业用途。

- **开发者**: 水乎（2013年底发布）
- **现更新者**: 诗笺
- **仓库地址**: https://github.com/libccy/noname
- **懒人包地址**: https://github.com/lieren2023/noname-for-dummies
- **支持平台**: Windows、Mac、Linux、Android、iOS、鸿蒙OS、澎湃OS 及支持 WebKit 内核的浏览器

### 核心特性

- 内置多种游戏模式（身份、国战、斗地主等）
- 智能AI系统，支持单机、联机和局域网联机
- 扩展系统支持 DIY 设计（武将技能、卡牌、游戏模式、UI美化等）
- 多语言支持和自定义主题

## 技术栈

| 技术 | 用途 |
|------|------|
| JavaScript (ES Module) | 主要开发语言 |
| TypeScript | 类型定义和类型检查 |
| CSS | 样式设计 |
| HTML5 | 页面结构 |
| Service Worker | 离线缓存和资源管理 |
| IndexedDB | 本地数据存储 |
| Cordova/Electron | 跨平台客户端封装 |

## 项目结构

```
noname_original/
├── .github/                    # GitHub配置
│   ├── ISSUE_TEMPLATE.md       # Issue模板
│   ├── PULL_REQUEST_TEMPLATE.md # PR模板
│   └── ISSUE_TEMPLATE/         # Issue模板目录
├── noname/                     # 核心源代码（ES Module）
│   ├── ai/                     # AI决策逻辑
│   │   ├── index.js            # AI主模块
│   │   └── basic.js            # 基础AI行为
│   ├── game/                   # 游戏核心API
│   │   ├── index.js            # 游戏主模块
│   │   ├── check.js            # 检查函数
│   │   ├── promises.js         # Promise封装
│   │   └── dynamic-style/      # 动态样式
│   ├── get/                    # 工具函数库
│   │   ├── index.js            # 主入口
│   │   ├── is.js               # 类型判断函数
│   │   └── promises.js         # Promise工具
│   ├── gnc/                    # Generator函数支持
│   │   ├── index.js            # 主入口
│   │   └── is.js               # Generator判断
│   ├── init/                   # 初始化和启动逻辑
│   │   ├── index.js            # 主入口，包含boot()
│   │   ├── import.js           # 动态导入模块
│   │   ├── onload.js           # 加载完成处理
│   │   ├── polyfill.js         # Polyfill兼容
│   │   ├── node.js             # Node.js环境
│   │   └── cordova.js          # Cordova环境
│   ├── library/                # 核心库
│   │   ├── index.js            # 库主入口
│   │   ├── path.js             # 路径处理
│   │   ├── update.js           # 更新逻辑
│   │   ├── update-urls.js      # 更新地址配置
│   │   ├── element/            # 游戏元素定义（10个核心类）
│   │   │   ├── player.js       # Player 玩家对象
│   │   │   ├── card.js         # Card 卡牌对象
│   │   │   ├── vcard.js        # VCard 虚拟卡牌
│   │   │   ├── gameEvent.js    # GameEvent 游戏事件
│   │   │   ├── gameEventPromise.js  # GameEventPromise
│   │   │   ├── dialog.js       # Dialog 对话框
│   │   │   ├── button.js       # Button 按钮
│   │   │   ├── control.js      # Control 控制组件
│   │   │   ├── client.js       # Client 客户端对象
│   │   │   └── nodeWS.js       # NodeWS WebSocket节点
│   │   ├── announce/           # 发布订阅系统
│   │   ├── assembly/           # 组装模块
│   │   │   ├── index.js
│   │   │   ├── buildin.js      # 内置组装
│   │   │   └── interface.d.ts  # 类型接口
│   │   ├── cache/              # 缓存系统
│   │   │   ├── cacheContext.js # CacheContext 缓存上下文
│   │   │   └── childNodesWatcher.js  # 子节点监听
│   │   ├── channel/            # 通道模块
│   │   │   └── index.js
│   │   ├── crypt/              # 加密模块
│   │   │   └── md5.js          # MD5加密
│   │   ├── experimental/       # 实验性功能
│   │   │   ├── index.js
│   │   │   └── symbol.js       # Symbol定义
│   │   ├── hooks/              # 钩子系统
│   │   │   ├── index.js
│   │   │   ├── hook.js         # NonameHook 类
│   │   │   ├── buildin.js      # 内置钩子
│   │   │   └── interface.d.ts  # 类型接口
│   │   └── init/               # 库初始化
│   ├── status/                 # 游戏状态管理
│   │   └── index.js            # 状态对象(_status)
│   ├── ui/                     # 用户界面组件
│   │   ├── index.js            # UI主模块
│   │   ├── click/              # 点击事件处理
│   │   │   ├── index.js
│   │   │   ├── touchfix.js     # 触摸修复
│   │   │   └── window.js       # 窗口事件
│   │   └── create/             # UI元素创建
│   │       ├── index.js
│   │       └── menu/           # 菜单创建
│   └── util/                   # 通用工具函数
│       ├── index.js            # 主入口
│       ├── browser.js          # 浏览器工具
│       ├── config.js           # 配置工具
│       ├── mutex.js            # 互斥锁
│       └── struct/             # 数据结构
│           └── promise-error-handler/  # Promise错误处理
├── game/                       # 游戏启动入口
│   ├── game.js                 # 主启动脚本
│   ├── entry.js                # 模块入口
│   ├── config.js               # 配置管理
│   ├── package.js              # 包管理
│   ├── http.js                 # HTTP请求
│   ├── server.js               # 服务器模块
│   ├── source.js               # 源码加载
│   ├── importmap.js            # Import映射
│   ├── canUse.ts               # TypeScript检测
│   └── update.js               # 更新逻辑
├── mode/                       # 游戏模式定义（11种）
│   ├── identity.js             # 身份模式
│   ├── guozhan.js              # 国战模式
│   ├── doudizhu.js             # 斗地主模式
│   ├── boss.js                 # Boss模式
│   ├── versus.js               # 对战模式
│   ├── connect.js              # 联机模式
│   ├── single.js               # 单人模式
│   ├── chess.js                # 棋类模式
│   ├── stone.js                # 石头模式
│   ├── tafang.js               # 塔防模式
│   └── brawl.js                # 乱斗模式
├── character/                  # 武将角色包（39个）
│   ├── standard.js             # 标准武将
│   ├── sp.js, sp2.js           # SP武将
│   ├── mobile.js               # 手杀武将
│   ├── shenhua.js              # 神话武将
│   ├── yingbian.js             # 应变武将
│   ├── offline.js              # 离线武将
│   ├── onlyOL.js               # OL专属
│   ├── sb.js                   # 谋武将
│   ├── key.js                  # Key武将
│   ├── clan.js                 # 宗族武将
│   ├── diy.js                  # DIY武将
│   └── ...
├── card/                       # 卡牌包定义（16个）
│   ├── standard.js             # 标准卡牌
│   ├── guozhan.js              # 国战卡牌
│   ├── extra.js                # 额外卡牌
│   ├── gujian.js               # 古剑卡牌
│   ├── sp.js                   # SP卡牌
│   ├── mtg.js                  # MTG卡牌
│   ├── hearth.js               # 炉石卡牌
│   ├── gwent.js                # 巫师卡牌
│   └── ...
├── extension/                  # 扩展模块
│   ├── 搬运自用/               # 搬运扩展
│   ├── 十周年UI/               # 十周年界面
│   ├── 手杀ui/                 # 手杀界面
│   ├── boss/                   # Boss扩展
│   ├── cardpile/               # 牌堆扩展
│   ├── coin/                   # 硬币扩展
│   └── wuxing/                 # 五行扩展
├── audio/                      # 音频资源
│   ├── background/             # 背景音乐
│   ├── card/                   # 卡牌音效
│   ├── die/                    # 死亡语音
│   ├── effect/                 # 特效音效
│   ├── skill/                  # 技能语音
│   └── voice/                  # 角色语音
├── image/                      # 图片资源
│   ├── background/             # 背景图
│   ├── card/                   # 卡牌图片
│   ├── character/              # 角色立绘
│   ├── emotion/                # 表情图片
│   ├── mode/                   # 模式图片
│   ├── skin/                   # 皮肤图片
│   └── splash/                 # 启动画面
├── theme/                      # 主题样式（4种）
│   ├── music/                  # 音乐主题
│   ├── simple/                 # 简约主题
│   ├── style/                  # 样式主题
│   └── woodden/                # 木质主题
├── layout/                     # 布局模板（7种）
│   ├── default/                # 默认布局
│   ├── mobile/                 # 移动端布局
│   ├── long/, long2/           # 长布局
│   ├── nova/                   # Nova布局
│   ├── newlayout/              # 新布局
│   └── mode/                   # 模式专用布局
├── font/                       # 字体文件
├── docs/                       # 开发文档
│   ├── async-guide.md          # Async教程
│   └── skin-guide.md           # 皮肤教程
├── index.html                  # 游戏入口页面
├── noname.js                   # 核心模块导出
├── service-worker.js           # Service Worker
├── tsconfig.json               # TypeScript配置
├── eslint.config.mjs           # ESLint配置（新版）
├── .eslintrc.json              # ESLint配置（旧版兼容）
├── prettier.config.mjs         # Prettier配置
└── .editorconfig               # 编辑器配置
```

## 核心模块

### 入口点

项目通过 `noname.js` 导出核心模块：

```javascript
export { GNC, gnc, setGNC } from "./noname/gnc/index.js";
export { AI, ai, setAI } from "./noname/ai/index.js";
export { Game, game, setGame } from "./noname/game/index.js";
export { Get, get, setGet } from "./noname/get/index.js";
export { Library, lib, setLibrary } from "./noname/library/index.js";
export { status, _status, setStatus } from "./noname/status/index.js";
export { UI, ui, setUI } from "./noname/ui/index.js";
export { boot } from "./noname/init/index.js";
```

### 关键全局对象

| 对象 | 用途 |
|------|------|
| `game` | 游戏核心API（存档、事件触发、玩家操作等） |
| `lib` | 游戏库（配置、翻译、技能定义、卡牌定义等） |
| `ui` | 用户界面操作（创建元素、对话框、按钮等） |
| `ai` | AI决策系统 |
| `get` | 工具函数集合 |
| `_status` | 当前游戏状态 |

### 核心类（library/element/）

| 类 | 继承 | 用途 |
|----|------|------|
| `Player` | HTMLDivElement | 玩家对象，包含手牌、技能、状态等 |
| `Card` | HTMLDivElement | 卡牌对象，包含花色、点数、效果等 |
| `VCard` | - | 虚拟卡牌 |
| `GameEvent` | - | 游戏事件，管理事件流 |
| `GameEventPromise` | Promise | 事件Promise封装，支持await |
| `Dialog` | HTMLDivElement | 对话框组件 |
| `Button` | HTMLDivElement | 按钮组件 |
| `Control` | HTMLDivElement | 控制组件 |
| `Client` | - | 客户端对象 |
| `NodeWS` | - | WebSocket节点 |

### 缓存系统（library/cache/）

```javascript
// CacheContext 用于缓存函数调用结果
// 在缓存环境下，相同参数的函数调用只计算一次
const cache = new CacheContext();
CacheContext.setInCacheEnvironment(true);
```

### 钩子系统（library/hooks/）

```javascript
// NonameHook 是一个特殊的数组，用于存储钩子函数
// 内置钩子定义在 buildin.js 中

// 使用示例
lib.hooks.someHook.push(callback);
```

## 构建与运行

### 开发环境

1. **本地服务器运行**（推荐）：
   ```bash
   # 使用 Python 内置服务器
   python -m http.server 8080
   
   # 或使用 Node.js 的 http-server
   npx http-server -p 8080
   ```

2. **直接打开**（受限）：
   - 直接打开 `index.html` 可能受浏览器安全策略限制
   - 推荐使用 Live Server 或 noname-server.exe

### TypeScript 类型检查

```bash
# 生成类型声明文件
npx tsc
```

类型声明输出到 `node_modules/@types/noname-typings/nonameModules/`

### 代码检查与格式化

```bash
# ESLint 检查
npx eslint .

# Prettier 格式化
npx prettier --write .
```

## 开发规范

### 代码风格

项目使用 ESLint 和 Prettier 进行代码规范管理：

**ESLint 配置要点**：
- ECMAScript 版本：ES2022 (ES13)
- 模块类型：ES Module
- 禁用 `no-undef`、`no-unused-vars`、`no-redeclare` 规则（适配动态变量）
- 允许 `console` 语句

**Prettier 配置要点**：
- 缩进：Tab，宽度4
- 行尾：LF
- 引号：根据需要自动选择
- 尾逗号：ES5 标准

**编辑器配置**：
- 编码：UTF-8
- 行尾：LF
- 文件末尾插入空行

### 技能编写指南

项目支持两种技能编写方式：

#### 1. Async Content（推荐）

```javascript
let skill = {
    trigger: {
        player: "phaseBegin",
    },
    content: async function (event, trigger, player) {
        await player.draw(2);
        if (player.countCards("h") > 5) {
            await player.chooseToDiscard(2, true);
        }
    },
};
```

**优势**：
- 更贴近原生 JavaScript 语法
- 支持断点调试
- 支持闭包访问
- 错误信息更准确

#### 2. Step Content（传统）

```javascript
let skill = {
    content: function () {
        "step 0"
        player.draw(2);
        "step 1"
        if (player.countCards("h") > 5) {
            player.chooseToDiscard(2, true);
        }
    }
}
```

### 异步操作规范

- 使用 `await game.asyncDelay()` 替代 `game.delay()`
- 使用 `await game.asyncDelayx()` 替代 `game.delayx()`
- 在 Async Content 中，`event.finish()` 用 `return` 替代
- 使用 `event.card`、`event.target`、`event.num` 替代原 `card`、`target`、`num` 变量

### 文件命名规范

- 武将包文件：`character/*.js`
- 卡牌包文件：`card/*.js`
- 模式文件：`mode/*.js`
- 扩展目录：`extension/*/`

### Git 提交规范

- Pull Request 请推送到 `update-branch` 分支
- 遵循项目 PR 提交规范
- 确保代码通过 ESLint 检查

## 扩展开发

### 扩展目录结构

```
extension/your_extension/
├── extension.js    # 扩展入口
├── character/      # 自定义武将
├── card/           # 自定义卡牌
├── audio/          # 自定义音频
├── image/          # 自定义图片
└── typings/        # TypeScript类型定义（可选）
```

### 扩展 API

```javascript
game.import("extension", {
    name: "your_extension",
    content: function () {
        // 扩展初始化代码
    },
    precontent: function () {
        // 扩展预加载代码
    }
});
```

### 皮肤/原画系统

使用 `player.changeSkin(map, character)` 切换武将原画：

```javascript
// 为武将定义多原画
lib.characterSubstitute["pot_weiyan"] = [
    ["pot_weiyan_achieve", []],  // 使命成功
    ["pot_weiyan_fail", []],     // 使命失败
];

// 切换原画
player.changeSkin("potzhongao", "pot_weiyan_achieve");
```

### 发布订阅系统

使用 `lib.announce` 进行模块间通信：

```javascript
// 发布事件
lib.announce.publish("Noname.Init.Extension.onLoad", extensionName);

// 订阅事件
lib.announce.subscribe("Noname.Init.Extension.onLoad", (name) => {
    console.log(`扩展 ${name} 已加载`);
});
```

## 常见问题

### 如何添加新武将

1. 在 `character/` 目录下编辑或创建武将包文件
2. 使用 `lib.character` 定义武将信息
3. 使用 `lib.skill` 定义武将技能
4. 在 `lib.translate` 中添加翻译

### 如何添加新卡牌

1. 在 `card/` 目录下编辑或创建卡牌包文件
2. 使用 `lib.card` 定义卡牌信息
3. 在 `lib.translate` 中添加翻译

### 如何添加新游戏模式

1. 在 `mode/` 目录下创建模式文件
2. 定义模式初始化逻辑
3. 在 `lib.mode` 中注册模式

## 资源路径

- 图片资源：使用 `lib.assetURL + "image/..."` 获取正确路径
- 音频资源：使用 `lib.assetURL + "audio/..."` 获取正确路径
- 字体资源：使用 `lib.assetURL + "font/..."` 获取正确路径
- 扩展资源：使用 `"ext:扩展名/..."` 格式引用

## 参考文档

- [async-guide.md](./docs/async-guide.md) - Async Content 详细教程
- [skin-guide.md](./docs/skin-guide.md) - 皮肤开发指南
- [GitHub Wiki](https://github.com/libccy/noname/wiki) - 官方 Wiki

## 许可证

本项目采用 GPLv3 许可证。在使用、修改和分发时请遵守协议要求。
