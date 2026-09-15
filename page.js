const image = document.querySelector('#feature-image');
const caption = document.querySelector('#feature-caption');
const buttons = [...document.querySelectorAll('[data-shot]')];
for (const button of buttons) {
  button.addEventListener('click', () => {
    image.src = button.dataset.src;
    image.alt = button.dataset.alt;
    caption.textContent = button.dataset.caption;
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  });
}
const languageMenu = document.querySelector('.language-switch');
document.addEventListener('click', (event) => {
  if (languageMenu && !languageMenu.contains(event.target)) languageMenu.open = false;
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && languageMenu?.open) {
    languageMenu.open = false;
    languageMenu.querySelector('summary').focus();
  }
});
