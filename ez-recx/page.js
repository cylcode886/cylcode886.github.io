const image = document.querySelector('#feature-image');
const caption = document.querySelector('#feature-caption');
const buttons = [...document.querySelectorAll('[data-shot]')];
// Share in-flight requests; keep the current picture visible until the next is ready.
const pendingImages = new Map();
let selection = 0;
function prepareImage(button, priority = 'low') {
  const key = `${button.dataset.src}|${window.innerWidth}|${window.devicePixelRatio}`;
  if (pendingImages.has(key)) return pendingImages.get(key);
  const next = new Image();
  next.decoding = 'async';
  next.fetchPriority = priority;
  const loaded = new Promise((resolve, reject) => {
    next.onload = resolve;
    next.onerror = reject;
  });
  next.sizes = image.sizes;
  next.srcset = button.dataset.srcset || '';
  next.src = button.dataset.src;
  const ready = loaded.then(() => next.decode()).then(() => next).catch((error) => {
    pendingImages.delete(key); // A failed request must be retryable.
    throw error;
  });
  pendingImages.set(key, ready);
  return ready;
}
if (image && caption) {
  for (const button of buttons) {
    const warm = () => prepareImage(button).catch(() => {});
    button.addEventListener('pointerenter', warm);
    button.addEventListener('focus', warm);
    button.addEventListener('click', async () => {
      const request = ++selection;
      image.setAttribute('aria-busy', 'true');
      try {
        await prepareImage(button, 'high');
        if (request !== selection) return;
        image.srcset = button.dataset.srcset || '';
        image.src = button.dataset.src;
        image.alt = button.dataset.alt;
        caption.textContent = button.dataset.caption;
        for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
      } catch {
        // Preserve the displayed image, caption and selected tab on network failure.
      } finally {
        if (request === selection) image.removeAttribute('aria-busy');
      }
    });
  }
  const preload = async () => {
    const connection = navigator.connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')) return;
    // One low-priority request at a time, only after the initial page has loaded.
    for (const button of buttons) {
      if (button.getAttribute('aria-pressed') !== 'true') {
        await prepareImage(button).catch(() => {});
      }
    }
  };
  const schedulePreload = () => {
    if ('requestIdleCallback' in window) window.requestIdleCallback(preload, { timeout: 3000 });
    else window.setTimeout(preload, 1200);
  };
  if (document.readyState === 'complete') schedulePreload();
  else window.addEventListener('load', schedulePreload, { once: true });
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
