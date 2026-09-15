# EZ RecX 四語產品介紹網站

更新日期：2026-09-14。本次四語更新已在本機完成並測試，尚未上傳 GitHub。

## 語言選單修正版（2026-09-14 晚間）

已補上 CSS／JavaScript 的內容版本號，以及隨 HTML 一起載入的選單關鍵樣式。下拉選單明確採單欄垂直排列，不依賴瀏覽器預設樣式。

已在本機 Google Chrome 與 Safari 確認繁中選單正常；Chrome 另確認英文、簡中、日文選單。也以原本單語版的舊 CSS、移除 JavaScript 的測試頁確認選單仍能垂直開合。

既有網站只需將 `EZ-RecX-Menu-Fix.zip` 解壓縮後的 6 個檔案，上傳到 GitHub 原本的 `ez-recx` 資料夾內覆蓋同名檔案。不要上傳到個人網站根目錄；不需要刪除任何資料夾或重傳圖片。修正尚未代為部署。

## 上傳到既有 GitHub Pages

1. 解壓縮 `EZ-RecX-Website-4-Languages.zip`，取得 `ez-recx` 資料夾。
2. 開啟 https://github.com/cylcode886/cylcode886.github.io ，停在儲存庫根目錄。
3. 使用 Add file → Upload files，把整個 `ez-recx` 資料夾拖入。確認路徑為 `ez-recx/index.html`、`ez-recx/en.html`、`ez-recx/assets/en/...` 等。
4. 提交訊息可填 `Add four-language EZ RecX website`，按 Commit changes。
5. 等 GitHub Pages 部署完成，再重新整理產品頁，確認右上角出現語言選單。

不要將產品頁的 index.html 單獨上傳到儲存庫根目錄，否則會覆蓋個人網站首頁。也不要先進入既有 ez-recx 資料夾再拖入同名資料夾，以免形成 ez-recx/ez-recx。ZIP 本身不用上傳。

## 更新後的公開網址

- 繁體中文（預設）：https://cylcode886.github.io/ez-recx/
- English：https://cylcode886.github.io/ez-recx/en.html
- 简体中文：https://cylcode886.github.io/ez-recx/zh-Hans.html
- 日本語：https://cylcode886.github.io/ez-recx/ja.html

各語言都有完整獨立頁面，可直接分享；切換語言會開啟對應頁面。根網址保留繁體中文，不會自動依瀏覽器語言跳轉，也不儲存語言偏好。停用 JavaScript 時仍可切換語言及閱讀全文。

## 包含內容

- 四語文案、常見問題、主畫面截圖、產品介紹圖、替代文字及頁面標題。
- 右上角語言選單，電腦及手機皆可使用；隱私政策入口保留。
- 繁中、簡中及英文頁開啟各自的既有政策連結。日文頁暫開啟英文政策，連結清楚標示「英語」。
- App Store 按鈕沿用 App ID 6809180442；系統需求維持 macOS 26.0 以上。
- 加入各語言網址標記，方便搜尋引擎辨識及連結分享。
- 不含追蹤工具、Cookie、第三方字型或登入功能。

這是純靜態網站，無需安裝套件。四個 HTML 頁面共用 styles.css 和 page.js。assets 根目錄存放繁中圖片及共用圖示，en、zh-Hans、ja 子目錄存放對應語言圖片。圖片沿用既有 EZ RecX 素材，沒有修改 Xcode。

## 已完成驗收

- 四語選單逐一切換，頁面語言、圖片及政策目的地正確。
- 四語共 16 組圖庫按鈕的圖片、替代文字、說明與選取狀態正確。
- 320px、768px、1280px 四語頁面均無水平溢出；另實際檢視 390px 英文與日文首頁和選單。
- 未測試 App Store 購買交易；未對公開網站進行任何上傳或部署。
