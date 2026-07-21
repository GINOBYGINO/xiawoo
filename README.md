# 小窩盃｜首屆公開賽 官網

React + Vite + Tailwind CSS + Framer Motion 單頁賽事官網。

## 快速開始

```bash
npm install
npm run dev
```

## 放入宣傳圖片

將你的 6 張宣傳圖放到 `public/` 資料夾，並命名為：

| 檔名 | 用途 |
|------|------|
| `bg-1.png` | 首頁主視覺 |
| `bg-2.png` | 比賽內容區 |
| `bg-3.png` | 獎金區 |
| `bg-4.png` | （備用） |
| `bg-5.png` | 時程表區 |
| `bg-6.png` | 頁尾報名區 |

若圖片尚未放入，頁面會自動改用深色漸層背景。

## 設定報名與 Discord

編輯 `src/components/FooterSection.jsx`：

- `REGISTER_FORM_URL`：換成 Google 表單網址
- `DISCORD_URL`：換成 Discord 邀請連結（有值後按鈕會自動啟用）

## 部署（免費）

可推到 GitHub 後用 [Vercel](https://vercel.com) 或 [Netlify](https://netlify.com) 一鍵部署。
