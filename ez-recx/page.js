const shots = {
  screen: ['assets/feature-screen.png', 'EZ RecX 產品介紹：整個螢幕、工作區域與自訂範圍', '01 — 選好範圍，錄影，儲存。'],
  area: ['assets/feature-area.png', 'EZ RecX 產品介紹：拖曳與輸入尺寸設定錄影範圍', '02 — 精準選取，只錄下你需要的範圍。'],
  audio: ['assets/feature-audio.png', 'EZ RecX 產品介紹：系統音訊、麥克風與攝影機設定', '03 — 錄下畫面，也錄下你的聲音。'],
  quality: ['assets/feature-quality.png', 'EZ RecX 產品介紹：錄製畫質與 MP4、MOV 格式', '04 — 依照用途，選擇合適畫質。']
};
const image = document.querySelector('#feature-image');
const caption = document.querySelector('#feature-caption');
const buttons = [...document.querySelectorAll('[data-shot]')];
for (const button of buttons) {
  button.addEventListener('click', () => {
    const [src, alt, text] = shots[button.dataset.shot];
    image.src = src;
    image.alt = alt;
    caption.textContent = text;
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  });
}
