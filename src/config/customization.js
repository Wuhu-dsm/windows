const customization = {
  version: "orangemoon-2026-05-24-ima",
  user: {
    name: "orangeMoon",
    aliases: ["zuoling"],
    avatar: "img/asset/orangeMoon-avatar.svg",
    accountAvatar: "img/asset/orangeMoon-avatar.svg",
    profileUrl: "https://github.com/Wuhu-dsm",
    email: "orangeMoon@example.com",
  },
  brand: {
    appName: "orangeMoon Windows",
    authorName: "orangeMoon",
    authorHandle: "orangeMoon",
    repositoryUrl: "https://github.com/Wuhu-dsm/windows",
    websiteUrl: "https://github.com/Wuhu-dsm",
    supportUrl: "https://github.com/Wuhu-dsm/windows/issues",
  },
  wallpaper: {
    defaultIndex: 0,
    lock: "orangemoon.svg",
    items: [
      { src: "orangemoon.svg", theme: "dark", label: "orangeMoon" },
      { src: "default/img0.jpg", theme: "light", label: "Windows Light" },
      { src: "dark/img0.jpg", theme: "dark", label: "Windows Dark" },
      { src: "ThemeA/img0.jpg", theme: "dark", label: "Theme A" },
      { src: "ThemeA/img1.jpg", theme: "dark", label: "Theme A Alt 1" },
      { src: "ThemeA/img2.jpg", theme: "dark", label: "Theme A Alt 2" },
      { src: "ThemeA/img3.jpg", theme: "dark", label: "Theme A Alt 3" },
      { src: "ThemeB/img0.jpg", theme: "dark", label: "Theme B" },
      { src: "ThemeB/img1.jpg", theme: "dark", label: "Theme B Alt 1" },
      { src: "ThemeB/img2.jpg", theme: "dark", label: "Theme B Alt 2" },
      { src: "ThemeB/img3.jpg", theme: "dark", label: "Theme B Alt 3" },
      { src: "ThemeC/img0.jpg", theme: "light", label: "Theme C" },
      { src: "ThemeC/img1.jpg", theme: "light", label: "Theme C Alt 1" },
      { src: "ThemeC/img2.jpg", theme: "light", label: "Theme C Alt 2" },
      { src: "ThemeC/img3.jpg", theme: "light", label: "Theme C Alt 3" },
      { src: "ThemeD/img0.jpg", theme: "light", label: "Theme D" },
      { src: "ThemeD/img1.jpg", theme: "light", label: "Theme D Alt 1" },
      { src: "ThemeD/img2.jpg", theme: "light", label: "Theme D Alt 2" },
      { src: "ThemeD/img3.jpg", theme: "light", label: "Theme D Alt 3" },
    ],
  },
  desktop: {
    shortcuts: [
      "orangeMoon",
      "orangeMoon Home",
      "ima",
      "Projects",
      "Notes",
      "Recycle Bin",
      "File Explorer",
      "Browser",
      "Store",
      "Github",
      "Spotify",
    ],
    pinned: [
      "Browser",
      "Get Started",
      "Task Manager",
      "Mail",
      "Settings",
      "Store",
      "Notepad",
      "Whiteboard",
      "Calculator",
      "Spotify",
      "File Explorer",
      "Terminal",
      "Github",
      "Discord",
      "Camera",
    ],
    recent: ["Mail", "Terminal", "Github", "File Explorer", "Spotify", "Browser"],
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
          "orangeMoon-notes": {
            info: {
              icon: "docs",
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
  },
  browser: {
    bookmarks: {
      "https://github.com/Wuhu-dsm": "orangeMoon",
      "https://github.com/Wuhu-dsm/windows": "Windows fork",
      "https://www.google.com/webhp?igu=1": "Google",
      "https://bing.com": "Bing",
      "https://www.youtube.com/embed/m0EHSoZzHEA": "Youtube",
      "https://open.spotify.com/embed/user/jhfivkgdtg4s97pwbo1rbvr9v/playlist/6IdR78TOog83PV4XhLDvWN":
        "Spotify",
    },
    favicons: {
      "https://github.com/Wuhu-dsm": "https://github.githubassets.com/favicons/favicon.svg",
      "https://github.com/Wuhu-dsm/windows":
        "https://github.githubassets.com/favicons/favicon.svg",
    },
  },
  ima: {
    name: "ima",
    icon: "ima.svg",
    url: "https://ima.qq.com/wiki/?shareId=969c3a0ab41c8b009bc6d461f27a074f16cf89041ebac1c92a41e57c6b70db4e",
  },
};

export const mediaPath = (src, base = "img/wallpaper") => {
  if (!src) return "";
  if (/^(https?:|data:|blob:)/.test(src) || src.startsWith("/")) return src;
  return `${base}/${src}`;
};

export const isVideoWallpaper = (src = "") => /\.(mp4|webm|ogg)$/i.test(src);

export const wallpaperList = customization.wallpaper.items.map((item) => item.src);

export const wallpaperThemes = [
  ...new Set(customization.wallpaper.items.map((item) => item.src.split("/")[0])),
];

export const getWallpaper = (srcOrIndex) => {
  if (Number.isInteger(srcOrIndex)) {
    return customization.wallpaper.items[srcOrIndex] || customization.wallpaper.items[0];
  }

  return (
    customization.wallpaper.items.find((item) => item.src === srcOrIndex) ||
    customization.wallpaper.items[0]
  );
};

export default customization;
