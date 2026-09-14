# EZ RecX 產品介紹頁（繁體中文初版）

製作日期：2026-09-14。狀態：本機完成，尚未上傳或發布到 GitHub。

## 內容

- 響應式深灰／青綠產品首頁，電腦與手機皆可閱讀。
- 三種錄影模式、四張可切換產品圖、音訊／攝影機介紹、操作步驟、常見問題。
- App Store 入口：`https://apps.apple.com/app/id6809180442?mt=12`。
- 既有開發者網站與隱私權政策連結；未修改既有網站或 Xcode。
- 標示 macOS 26.0 以上、一次購買無訂閱；未固定售價、未加入追蹤工具、外部字型或登入表單。
- 使用現有產品素材，沒有使用 EaseUS 的文字、圖像或程式碼。

## 本機預覽

可以直接用瀏覽器開啟 `index.html`。所有資源使用相對路徑，不需要安裝套件或建置。

## 建議發布方式：現有個人網站中的獨立產品頁

先確認 GitHub 專案 `cylcode886/cylcode886.github.io` 的實際 Pages 發布來源，不要覆蓋首頁的 `index.html`。

在該發布來源中新增 `ez-recx/` 資料夾，把這份網站的 `index.html`、`styles.css`、`page.js` 和 `assets/` 放進去。若現有網站直接由根目錄發布，預期產品網址會是：

`https://cylcode886.github.io/ez-recx/`

這是建議路徑，**目前尚未建立公開網址**。也可改用獨立網站 repository，這份網站不綁定特定根路徑。

若使用全新獨立 repository，可在 Settings → Pages 選擇 Deploy from a branch，指定實際存放網站檔案的分支與根目錄。請只上傳這份網站資料，不要公開 Xcode 原始碼、錄影測試影片、憑證、備份或促銷碼。

官方說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 發布前待確認

1. 使用者選擇現有網站子頁或獨立網站。
2. 確認視覺與文案後發布；取得正式 URL 再加入 canonical、og:url 及絕對 og:image 分享圖網址。
3. 確認 App Store 按鈕在目標地區可開啟。這次只驗證網址與 App ID，未驗證購買交易。
4. 個人網站目前 EZ RecX 專案卡仍顯示 Coming soon；可於發布產品頁時另行更新卡片與連結，這次未修改。
5. 如需英文、簡中、日文網站，可延伸本版；目前只有 App 支援四語，網站文案為繁體中文。

## 本次檢查

- 已用瀏覽器檢視桌面及 390px 手機版。
- 320px、390px 與桌面版沒有水平溢出。
- 四個圖庫按鈕可切換圖片與說明、更新選取狀態。
- 常見問題可展開，內容包含 macOS 26.0 系統需求。
- 開發者網站已實際開啟，確認存在聯絡與隱私連結。
- 保留鍵盤焦點、跳至主內容入口、替代文字、減少動態效果偏好；不是完整無障礙稽核。

## 素材來源

- 圖示：EZ RecX 專案 `Logo/EZ RecX_IC_3-iOS-Default-1024x1024@1x_New.png`。
- 主畫面：工作區 `EZ_RecX_AppStore/source/captures/zh-Hant_main.png`。
- 介紹圖：EZ RecX 專案 `產品介紹縮圖/TC/` 的四張既有圖片。

素材均為直接複製，未改動原圖。
