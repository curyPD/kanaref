const nav = document.getElementById('nav');
const h1 = document.querySelector('h1');

const options = {
  root: null,
  threshold: 1,
};

const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting)
      nav.classList.add(
        'sticky',
        'top-0',
        'z-30',
        'bg-slate-50/90',
        'dark:bg-slate-900/80',
        'backdrop-blur-sm'
      );
    nav.classList.remove('bg-slate-50', 'dark:bg-slate-900');
    if (entry.isIntersecting)
      nav.classList.remove(
        'sticky',
        'top-0',
        'z-30',
        'bg-slate-50/90',
        'dark:bg-slate-900/80',
        'backdrop-blur-sm'
      );
    nav.classList.add('bg-slate-50', 'dark:bg-slate-900');
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(h1);
