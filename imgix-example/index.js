const ImgixClient = require('@imgix/js-core');
const client = new ImgixClient({ domain: "codegrid.imgix.net" });

const getOgImgUrl = ({ seriesTitle, color }) => {
  const title = client.buildURL("~text", {
    w: 1000,
    txt: seriesTitle,
    "txt-fit": "max",
    "txt-size": 57,
    "txt-font": "Hiragino Sans W5",
    "txt-color": "fff",
  });
  const url = client.buildURL("image.png", {
    // 画像サイズ
    w: 1200,
    h: 630,
    fit: "crop",
    // 複数行のタイトルの設定
    mark: title,
    "mark-x": 90,
    "mark-y": 195,
    // 画像に重ねる色
    blend: color,
    "blend-mode": "overlay",
    // 左上のテキスト
    txt: "シリーズ",
    "txt-align": "top,left",
    "txt-font": "Hiragino Sans W5",
    "txt-size": "30",
    "txt-pad": "100",
    "txt-color": "fff",
  });

  return url;
};

const url = getOgImgUrl({
  seriesTitle: "Preactで始める軽量コンポーネント指向開発",
  color: "#3F2CA4",
});

console.log(url);