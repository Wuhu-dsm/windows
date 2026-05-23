import * as history from "./history.json";
import * as news from "./news.json";

var hisTemp = history.default;

var date = new Date(),
  event = hisTemp[Math.floor(Math.random() * hisTemp.length)];
date.setYear(event.year);

var newsList = [];
for (var i = 0; i < news.default.articles.length; i++) {
  var item = {
    ...news.default.articles[i],
  };
  item.title = item.title
    .split("-")
    .reverse()
    .splice(1)
    .reverse()
    .join("-")
    .trim();
  newsList.push(item);
}

var abbr = ["sn", "sl", "h", "t", "hr", "lr", "s", "hc", "lc", "c"],
  wstates = [
    "雪",
    "雨夹雪",
    "冰雹",
    "雷暴",
    "大雨",
    "小雨",
    "阵雨",
    "多云",
    "少云",
    "晴朗",
  ];

var rem = null;

const getRandom = (x = 10, rm = 0) => {
  if (rem != null) {
    var tmp = rem;
    rem = null;
    return tmp;
  } else if (rm) {
    rem = Math.floor(Math.random() * x);
    return rem;
  }

  return Math.floor(Math.random() * x);
};

const defState = {
  data: {
    weather: {
      city: "北京",
      country: "中国",
      wstate: wstates[getRandom(10, 1)],
      icon: abbr[getRandom()],
      temp: 30 + getRandom(20),
      rain: 10 + getRandom(80),
      wind: 4 + getRandom(5),
      days: [0, 1, 2, 3].map((i) => {
        return {
          day: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
            (new Date().getDay() + i) % 7
          ],
          icon: abbr[getRandom(10)],
          min: 30 + getRandom(10),
          max: 40 + getRandom(10),
        };
      }),
    },
    stock: [
      [
        Number(
          parseFloat(2300 + Math.random() * 200).toFixed(2),
        ).toLocaleString(),
        parseFloat(Math.random() * 2).toFixed(2),
        Math.round(Math.random()),
      ],
      [
        Number(
          parseFloat(600 + Math.random() * 200).toFixed(2),
        ).toLocaleString(),
        parseFloat(Math.random() * 2).toFixed(2),
        Math.round(Math.random()),
      ],
    ],
    date: date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    event: event,
    news: newsList,
  },
  hide: true,
};

const widReducer = (state = defState, action) => {
  switch (action.type) {
    case "WIDGHIDE":
      return {
        ...state,
        hide: true,
      };
    case "WIDGTOGG":
      return {
        ...state,
        hide: !state.hide,
      };
    case "WIDGREST":
      return action.payload;
    default:
      return state;
  }
};

export default widReducer;
