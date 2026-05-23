import icons from "./apps";
import customization from "../config/customization";

const customVersion = localStorage.getItem("customizationUiVersion");
if (customVersion !== customization.version) {
  localStorage.setItem("customizationUiVersion", customization.version);
  localStorage.setItem("taskbar", JSON.stringify([
    "Settings",
    "File Explorer",
    "Browser",
    "Store",
    "Spotify",
  ]));
  localStorage.setItem("desktop", JSON.stringify(customization.desktop.shortcuts));
  localStorage.setItem("pinned", JSON.stringify(customization.desktop.pinned));
  localStorage.setItem("recent", JSON.stringify(customization.desktop.recent));
}

const readList = (key, defaults) => {
  const stored = localStorage.getItem(key);
  if (!stored) return defaults;

  const list = JSON.parse(stored);
  const legacyItems = [
    ["Bl", "ue"].join(""),
    ["Buy", "me", "a", "coffee"].join(" "),
    ["Un", "escape"].join(""),
  ];
  const hasLegacyItems = legacyItems.some((item) => list.includes(item));

  if (hasLegacyItems) {
    localStorage.setItem(key, JSON.stringify(defaults));
    return defaults;
  }

  return list;
};

var { taskbar, desktop, pinned, recent } = {
  taskbar: readList("taskbar", [
    "Settings",
    "File Explorer",
    "Browser",
    "Store",
    "Spotify",
  ]),
  desktop: readList("desktop", customization.desktop.shortcuts),
  pinned: readList("pinned", customization.desktop.pinned),
  recent: readList("recent", customization.desktop.recent),
};

export const taskApps = icons.filter((x) => taskbar.includes(x.name));

export const desktopApps = icons
  .filter((x) => desktop.includes(x.name))
  .sort((a, b) => {
    return desktop.indexOf(a.name) > desktop.indexOf(b.name) ? 1 : -1;
  });

export const pinnedApps = icons
  .filter((x) => pinned.includes(x.name))
  .sort((a, b) => {
    return pinned.indexOf(a.name) > pinned.indexOf(b.name) ? 1 : -1;
  });

export const recentApps = icons
  .filter((x) => recent.includes(x.name))
  .sort((a, b) => {
    return recent.indexOf(a.name) > recent.indexOf(b.name) ? 1 : -1;
  });

export const allApps = icons.filter((app) => {
  return app.type === "app";
});

export const dfApps = {
  taskbar,
  desktop,
  pinned,
  recent,
};
