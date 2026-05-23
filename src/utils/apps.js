import customization from "../config/customization";

export const gene_name = () =>
  Math.random().toString(36).substring(2, 10).toUpperCase();

let installed = JSON.parse(localStorage.getItem("installed") || "[]");

const apps = [
  {
    name: "开始",
    icon: "home",
    type: "action",
    action: "STARTMENU",
  },
  {
    name: "搜索",
    icon: "search",
    type: "action",
    action: "SEARCHMENU",
  },
  {
    name: "小组件",
    icon: "widget",
    type: "action",
    action: "WIDGETS",
  },
  {
    name: "设置",
    icon: "settings",
    type: "app",
    action: "SETTINGS",
  },
  {
    name: "任务管理器",
    icon: "taskmanager",
    type: "app",
    action: "TASKMANAGER",
  },
  {
    name: "文件资源管理器",
    icon: "explorer",
    type: "app",
    action: "EXPLORER",
  },
  {
    name: "浏览器",
    icon: "edge",
    type: "app",
    action: "MSEDGE",
  },
  {
    name: customization.personalHome.name,
    icon: customization.personalHome.icon,
    type: "app",
    action: "PERSONALHOME",
  },
  {
    name: customization.ima.name,
    icon: customization.ima.icon,
    type: "app",
    action: "IMA",
  },
  {
    name: "应用商店",
    icon: "store",
    type: "app",
    action: "WNSTORE",
  },
  {
    name: "回收站",
    icon: "bin0",
    type: "app",
  },
  {
    name: customization.user.name,
    icon: "win/user",
    type: "app",
    action: "EXPLORER",
    payload: "%user%",
  },
  {
    name: "项目",
    icon: "win/folder",
    type: "app",
    action: "EXPLORER",
    payload: "%desktop%\\Projects",
  },
  {
    name: "备忘录",
    icon: "notepad",
    type: "app",
    action: "NOTEPAD",
  },
  {
    name: "闹钟",
    icon: "alarm",
    type: "app",
  },
  {
    name: "计算器",
    icon: "calculator",
    type: "app",
    action: "CALCUAPP",
  },
  {
    name: "日历",
    icon: "calendar",
    type: "app",
  },
  {
    name: "相机",
    icon: "camera",
    type: "app",
    action: "CAMERA",
  },
  {
    name: "你的手机",
    icon: "yphone",
    type: "app",
  },
  {
    name: "反馈",
    icon: "feedback",
    type: "app",
  },
  {
    name: "入门",
    icon: "getstarted",
    type: "app",
    action: "OOBE",
  },
  {
    name: "Groove 音乐",
    icon: "groove",
    type: "app",
  },
  {
    name: "帮助",
    icon: "help",
    type: "app",
    action: "EXTERNAL",
    payload: customization.brand.supportUrl,
  },
  {
    name: "Yammer",
    icon: "yammer",
    type: "app",
  },
  {
    name: "邮件",
    icon: "mail",
    type: "app",
    action: "EXTERNAL",
    payload: `mailto:${customization.user.email}`,
  },
  {
    name: "电影",
    icon: "movies",
    type: "app",
  },
  {
    name: "Xbox",
    icon: "xbox",
    type: "app",
  },
  {
    name: "Office",
    icon: "msoffice",
    type: "app",
  },
  {
    name: "讲述人",
    icon: "narrator",
    type: "app",
  },
  {
    name: "新闻",
    icon: "news",
    type: "app",
  },
  {
    name: "记事本",
    icon: "notepad",
    type: "app",
    action: "NOTEPAD",
  },
  {
    name: "便笺",
    icon: "notes",
    type: "app",
  },
  {
    name: "OneDrive",
    icon: "oneDrive",
    type: "app",
  },
  {
    name: "OneNote",
    icon: "onenote",
    type: "app",
  },
  {
    name: "Outlook",
    icon: "outlook",
    type: "app",
  },
  {
    name: "人脉",
    icon: "people",
    type: "app",
  },
  {
    name: "照片",
    icon: "photos",
    type: "app",
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    type: "app",
    action: "EXTERNAL",
    payload: customization.brand.websiteUrl,
  },
  {
    name: "安全中心",
    icon: "security",
    type: "app",
  },
  {
    name: "Spotify",
    icon: "spotify",
    type: "app",
    action: "SPOTIFY",
  },
  {
    name: "SharePoint",
    icon: "share",
    type: "app",
  },
  {
    name: "Skype",
    icon: "skype",
    type: "app",
  },
  {
    name: "截图工具",
    icon: "snip",
    type: "app",
  },
  {
    name: "Twitter",
    icon: "twitter",
    type: "app",
    action: "EXTERNAL",
    payload: customization.brand.websiteUrl,
  },
  {
    name: "Teams",
    icon: "teams",
    type: "app",
  },
  {
    name: "终端",
    icon: "terminal",
    type: "app",
    action: "TERMINAL",
  },
  {
    name: "提示",
    icon: "tips",
    type: "app",
  },
  {
    name: "待办事项",
    icon: "todo",
    type: "app",
  },
  {
    name: "地图",
    icon: "maps",
    type: "app",
  },
  {
    name: "录音机",
    icon: "voice",
    type: "app",
  },
  {
    name: "天气",
    icon: "weather",
    type: "app",
  },
  {
    name: "白板",
    icon: "board",
    type: "app",
    action: "WHITEBOARD",
  },
  {
    name: "Cortana",
    icon: "cortana",
    type: "app",
  },
  {
    name: "Github",
    icon: "github",
    type: "app",
    action: "EXTERNAL",
    payload: customization.brand.repositoryUrl,
  },
  {
    name: "Unescape",
    icon: "unescape",
    type: "action",
    action: "EXTERNAL",
    payload: customization.brand.websiteUrl,
  },
  {
    name: "Discord",
    icon: "discord",
    type: "app",
    action: "DISCORD",
  },
  {
    name: "Steam",
    icon: "steam.ico",
    type: "app",
    action: "EXTERNAL",
    payload: "https://store.steampowered.com/",
  },
  {
    name: "我的简历",
    icon: "pdf.jpeg",
    type: "app",
    action: "RESUME",
  },
  {
    name: "VSCode",
    icon: "vscode.ico",
    type: "app",
    action: "EXTERNAL",
    payload: "https://vscode.dev/",
  },
];

for (let i = 0; i < installed.length; i++) {
  installed[i].action = gene_name();
  apps.push(installed[i]);
}

export default apps;
