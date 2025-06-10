const supportedLangs = ['en', 'fa', 'ar'];
function switchLang(lang) {
  if (!supportedLangs.includes(lang)) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
