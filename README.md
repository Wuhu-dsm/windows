# orangeMoon Windows

This repository is a personalized Windows 11 style web desktop based on
[blueedgetechno/win11React](https://github.com/blueedgetechno/win11React).

The fork is customized for `orangeMoon` / `zuoling`, with centralized settings
for the lock screen identity, wallpaper, desktop shortcuts, browser bookmarks,
author links, and custom web apps.

## Quick Start

```bash
npm install
npm run start
```

The local dev server usually runs at:

```txt
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

The production output directory is `build`.

## Main Customization File

Most personal settings live in:

```txt
src/config/customization.js
```

When changing defaults that are stored in `localStorage`, bump this value:

```js
version: "orangemoon-2026-05-24-personal-home"
```

Changing `version` tells existing browsers to refresh the configured default
desktop shortcuts, pinned apps, recent apps, and wallpaper selection.

## User Name And Avatar

Edit the `user` block in `src/config/customization.js`:

```js
user: {
  name: "orangeMoon",
  aliases: ["zuoling"],
  avatar: "img/asset/kobe-avatar.png",
  accountAvatar: "img/asset/kobe-avatar.png",
  profileUrl: "https://github.com/Wuhu-dsm",
  email: "orangeMoon@example.com",
}
```

Avatar files should be placed under:

```txt
public/img/asset/
```

Use paths relative to `public`, for example:

```js
avatar: "img/asset/my-avatar.png"
```

`avatar` is used on the lock screen. `accountAvatar` is used in account and
settings surfaces.

## Wallpaper And Theme

Edit the `wallpaper` block:

```js
wallpaper: {
  defaultIndex: 0,
  lock: "orangemoon.svg",
  items: [
    { src: "orangemoon.svg", theme: "dark", label: "orangeMoon" },
    { src: "lucy.mp4", theme: "dark", label: "露西" },
    { src: "22.mp4", theme: "dark", label: "22" },
    { src: "default/img0.jpg", theme: "light", label: "Windows Light" },
  ],
}
```

Wallpaper files should be placed under:

```txt
public/img/wallpaper/
```

`lock` controls the lock screen wallpaper. `items` controls the desktop
wallpaper list. `defaultIndex` is the default selected item, starting from `0`.

Dynamic wallpapers are supported. Add `.mp4`, `.webm`, or `.ogg` files to
`public/img/wallpaper/`, then reference them in `items`:

```js
items: [
  {
    src: "my-live-wallpaper.webm",
    theme: "dark",
    label: "Live Moon",
  },
]
```

GIF files can also be used as normal image wallpapers.

## Desktop Shortcuts

The desktop icon list is configured here:

```js
desktop: {
  shortcuts: [
    "orangeMoon",
    "个人主页",
    "ima",
    "Projects",
    "Notes",
  ],
}
```

Each name in `desktop.shortcuts` must match an app `name` in:

```txt
src/utils/apps.js
```

`desktop.shortcuts` decides what appears on the desktop. `src/utils/apps.js`
decides each shortcut's icon, app type, action, and payload.

## Shortcut Behavior

App definitions in `src/utils/apps.js` use this shape:

```js
{
  name: "Projects",
  icon: "win/folder",
  type: "app",
  action: "EXPLORER",
  payload: "%desktop%\\Projects",
}
```

Common actions:

```js
// Open File Explorer at a virtual path
action: "EXPLORER",
payload: "%desktop%\\Projects"

// Open an external link in a new browser tab
action: "EXTERNAL",
payload: "https://github.com/Wuhu-dsm"

// Open built-in apps
action: "MSEDGE"
action: "SETTINGS"
action: "NOTEPAD"
action: "TERMINAL"
```

Icon files normally live under:

```txt
public/img/icon/
public/img/icon/win/
```

Examples:

```js
icon: "github"
icon: "notepad"
icon: "win/folder"
icon: "win/user"
icon: "ima.svg"
```

PNG, SVG, JPG, JPEG, WebP, and GIF icon filenames are supported.

## Explorer Desktop Files

Virtual Desktop folder contents are configured in `desktop.files`:

```js
desktop: {
  files: {
    Projects: {
      info: {
        icon: "folder",
      },
      data: {
        "windows-fork": {
          info: {
            icon: "folder",
          },
        },
      },
    },
    "README.txt": {
      type: "file",
      info: {
        icon: "docs",
      },
      data: {
        content: "Welcome to orangeMoon's desktop.",
      },
    },
  },
}
```

This controls what appears inside File Explorer's virtual Desktop path.

## ima App

The `ima` desktop app is configured in `src/config/customization.js`:

```js
ima: {
  name: "ima",
  icon: "ima.svg",
  url: "https://ima.qq.com/wiki/?shareId=969c3a0ab41c8b009bc6d461f27a074f16cf89041ebac1c92a41e57c6b70db4e",
}
```

The icon is stored at:

```txt
public/img/icon/ima.svg
```

The app window is implemented in:

```txt
src/containers/applications/apps/ima.jsx
```

It opens the configured `ima.url` inside a Windows-style iframe app window.

## Personal Home App

The `个人主页` desktop app is configured in `src/config/customization.js`:

```js
personalHome: {
  name: "个人主页",
  icon: "buyme",
  url: "https://ling-cyberpunk-portfolio.vercel.app/",
}
```

The app window is implemented in:

```txt
src/containers/applications/apps/personalHome.jsx
```

It opens the configured `personalHome.url` inside a Windows-style iframe app
window.

## Author And Brand Links

Author, support, repository, and website links are centralized here:

```js
brand: {
  appName: "orangeMoon Windows",
  authorName: "orangeMoon",
  authorHandle: "orangeMoon",
  repositoryUrl: "https://github.com/Wuhu-dsm/windows",
  websiteUrl: "https://github.com/Wuhu-dsm",
  supportUrl: "https://github.com/Wuhu-dsm/windows/issues",
}
```

Use `orangeMoon` for the display identity and `zuoling` wherever you want an
alternate handle.

## Vercel Deployment

This repo includes `vercel.json` for Vercel automatic deployments:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Import the GitHub repository into Vercel and keep the production branch as
`master`. After Git integration is enabled, pushes to `master` create production
deployments, while other branches and pull requests create preview deployments.

## Notes

- This is a web desktop simulation, not a real operating system.
- This fork is not affiliated with Microsoft.
- The original project is licensed under CC0-1.0; keep upstream credit when
  redistributing.
