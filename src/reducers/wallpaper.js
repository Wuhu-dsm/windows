import customization, {
  getWallpaper,
  wallpaperList,
  wallpaperThemes,
} from "../config/customization";

var customVersion = localStorage.getItem("customizationVersion");
if (customVersion !== customization.version) {
  localStorage.setItem("customizationVersion", customization.version);
  localStorage.setItem("wps", customization.wallpaper.defaultIndex);
}

var wps = parseInt(
  localStorage.getItem("wps") || customization.wallpaper.defaultIndex,
);
var locked = localStorage.getItem("locked");

const walls = wallpaperList;
const themes = wallpaperThemes;
const selectedWallpaper = getWallpaper(parseInt(wps));

const defState = {
  items: customization.wallpaper.items,
  themes: themes,
  wps: wps,
  src: selectedWallpaper.src,
  media: selectedWallpaper,
  lock: customization.wallpaper.lock,
  locked: !(locked == "false"),
  booted: false || import.meta.env.MODE == "development",
  act: "",
  dir: 0,
};

const wallReducer = (state = defState, action) => {
  switch (action.type) {
    case "WALLUNLOCK":
      localStorage.setItem("locked", false);
      return {
        ...state,
        locked: false,
        dir: 0,
      };
    case "WALLNEXT":
      var twps = (state.wps + 1) % walls.length;
      localStorage.setItem("wps", twps);
      return {
        ...state,
        wps: twps,
        src: walls[twps],
        media: getWallpaper(twps),
      };
    case "WALLALOCK":
      return {
        ...state,
        locked: true,
        dir: -1,
      };
    case "WALLBOOTED":
      return {
        ...state,
        booted: true,
        dir: 0,
        act: "",
      };
    case "WALLRESTART":
      return {
        ...state,
        booted: false,
        dir: -1,
        locked: true,
        act: "restart",
      };
    case "WALLSHUTDN":
      return {
        ...state,
        booted: false,
        dir: -1,
        locked: true,
        act: "shutdn",
      };
    case "WALLSET":
      var isIndex = !Number.isNaN(parseInt(action.payload)),
        wps = 0,
        src = "";

      if (isIndex) {
        wps = parseInt(action.payload);
        localStorage.setItem("wps", wps);
        src = walls[wps] ? walls[wps] : walls[0];
      } else {
        const idx = walls.findIndex((item) => item === action.payload);
        wps = idx >= 0 ? idx : customization.wallpaper.defaultIndex;
        localStorage.setItem("wps", wps);
        src = action.payload;
      }

      return {
        ...state,
        wps: wps,
        src: src,
        media: getWallpaper(src),
      };
    default:
      return state;
  }
};

export default wallReducer;
