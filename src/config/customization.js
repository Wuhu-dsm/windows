const customization = {
  version: "orangemoon-2026-05-24-personal-home-zh-v10",
  user: {
    name: "我的电脑",
    aliases: ["zuoling"],
    avatar: "img/asset/kobe-avatar.png",
    accountAvatar: "img/asset/kobe-avatar.png",
    profileUrl: "https://github.com/Wuhu-dsm",
    email: "orangeMoon@example.com",
  },
  brand: {
    appName: "orangeMoon Windows",
    authorName: "orangeMoon",
    authorHandle: "orangeMoon",
    repositoryUrl: "https://github.com/",
    websiteUrl: "https://github.com/Wuhu-dsm",
    supportUrl: "https://github.com/Wuhu-dsm/windows/issues",
  },
  wallpaper: {
    defaultIndex: 0,
    lock: "orangemoon.svg",
    items: [
      { src: "orangemoon.svg", theme: "dark", label: "orangeMoon" },
      { src: "lucy.mp4", theme: "dark", label: "露西" },
      { src: "22.mp4", theme: "dark", label: "22" },
      { src: "custom-video.mp4", theme: "dark", label: "自定义视频" },
      { src: "custom-img1.png", theme: "dark", label: "自定义图片 1" },
      { src: "custom-img2.png", theme: "dark", label: "自定义图片 2" },
      { src: "custom-img3.png", theme: "dark", label: "自定义图片 3" },
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
      "我的电脑",
      "个人主页",
      "我的笔记",
      "我的简历",
      "VSCode",
      "备忘录",
      "回收站",
      "文件资源管理器",
      "浏览器",
      "应用商店",
      "Github",
      "Steam",
    ],
    pinned: [
      "浏览器",
      "入门",
      "任务管理器",
      "邮件",
      "设置",
      "应用商店",
      "记事本",
      "白板",
      "计算器",
      "文件资源管理器",
      "终端",
      "Github",
      "Discord",
      "相机",
    ],
    recent: ["邮件", "终端", "Github", "文件资源管理器", "浏览器", "Steam"],
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
          "我的笔记": {
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
          content: "欢迎来到我的桌面。\n\n今日待办:\n1. 整理项目文件\n2. 学习新技术\n3. 备份重要数据\n\n随机备忘:\n- Steam 夏季促销别忘了看看\n- 记得给植物浇水\n- 下周会议准备PPT",
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
    name: "我的笔记",
    icon: "ima.svg",
    url: "https://ima.qq.com/wiki/?shareId=969c3a0ab41c8b009bc6d461f27a074f16cf89041ebac1c92a41e57c6b70db4e",
  },
  personalHome: {
    name: "个人主页",
    icon: "buyme",
    url: "https://ling-cyberpunk-portfolio.vercel.app/",
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
