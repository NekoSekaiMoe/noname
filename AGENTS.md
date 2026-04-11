# AGENTS.md - 无名杀懒人包 (Noname Kill)

## Project Overview
Chinese open-source card game (TCG) based on JavaScript/CSS/HTML. This is a "懒人包" (lazy package) distribution with pre-configured UI mods and extensions.

## Architecture

### Entry Points
- **Browser**: Open `index.html` directly (uses Service Worker for transpilation)
- **HTTP Server**: `python3 -m http.server` (recommended for full functionality)
- **Electron**: `noname.js` is the ES module entry point

### Module Structure (`noname/`)
- `init/` - Boot sequence and platform detection (browser/Electron/Cordova)
- `library/` - Core game library and data
- `game/` - Game logic and state management
- `ui/` - UI components and rendering
- `ai/` - AI implementation
- `get/` - Utility getters
- `gnc/` - Generator/async utilities
- `status/` - Global status tracking

### Key Directories
- `game/` - Core game scripts, Vue/TS compilers, entry points
- `extension/` - Built-in extensions (boss, cardpile, 十周年UI, 手杀ui, etc.)
- `character/`, `card/`, `mode/` - Game content packs
- `layout/`, `theme/` - UI styling
- `audio/`, `font/`, `image/` - Static assets

## Development Workflow

### Local Development Server
```bash
make serve  # python3 -m http.server
```

### Code Style
- **Indent**: Tabs (width: 4) - configured in `.editorconfig` and `prettier.config.mjs`
- **Lint**: ESLint flat config (`eslint.config.mjs`)
- **Format**: Prettier with custom config (`prettier.config.mjs`)

### Git Workflow
- Githooks configured: `git config core.hooksPath .githooks`
- Commit messages auto-generate Change-Id (Gerrit-style)
- PRs to this repo: target `update-Branch` branch
- PRs to upstream (libccy/noname): target `PR-Branch` branch

## Platform Support

### Browser Requirements
- Chrome 77+ or Safari 14.5+
- WebView kernel >= 77 for mobile apps
- Firefox NOT recommended (low version issues)

### Supported Platforms
- Web browsers (HTTP server mode)
- Windows (Electron-based client, `noname-server.exe`)
- Android (Cordova-based APK)
- iOS/macOS (WebView)

## Service Worker Compilation
The `service-worker.js` handles on-the-fly transpilation:
- **`.ts` files** → Transpiled to ES2019 via bundled TypeScript
- **`.vue` files** → Compiled via `@vue/compiler-sfc` to JS
- **`.json` imports** → Wrapped as ES modules
- **Node built-in modules** → Proxied via `noname-builtinModules/`

No build step required - source files are transpiled at fetch time in browser.

## Extension System
Extensions are dynamic JS modules in `extension/`:
- Loaded at runtime via `importExtension()` in `noname/init/import.js`
- Extensions can add characters, cards, modes, UI modifications
- Extension metadata read from `window.noname_package`

Built-in extensions: `boss/`, `cardpile/`, `coin/`, `wuxing/`, `十周年UI/`, `手杀ui/`, `搬运自用/`

## Storage
- **localStorage**: Config, keys, small data
- **IndexedDB**: Game data (config, video, images, audio) - `lib.db`
- **Migration**: Auto-migrates from localStorage to IndexedDB on first run

## Key Configuration
- `game/config.js` - Default game configuration
- `game/package.js` - Package metadata (characters, cards, modes, themes)
- `tsconfig.json` - TypeScript declarations only (no emit, just `.d.ts` generation)

## Testing/Verification
No automated test suite. Verify by:
1. Running local server: `make serve`
2. Opening `http://localhost:8000` in browser
3. Testing core game loop (start game, play cards)
4. Checking browser console for errors

## Important Constraints
- Game files use Chinese identifiers and comments extensively
- GPL v3 licensed (user must accept on first run)
- `lib.configprefix` is auto-generated from `__dirname` - do not modify
- Global variables: `lib`, `game`, `ui`, `ai`, `get`, `_status`, `gnc`

## Related Repos
- Upstream: https://github.com/libccy/noname
- New upstream: https://github.com/libnoname/noname
- Windows client: https://github.com/lieren2023/noname-app-update
- Android client (诗笺): https://github.com/nonameShijian/noname-shijian-android
- noname-server: https://github.com/nonameShijian/noname-server
