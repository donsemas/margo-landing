document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const reveals = document.querySelectorAll('.reveal');
  const form = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const setMenuState = (isOpen) => {
    burger.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Меню');
    mobileMenu.inert = !isOpen;
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  setMenuState(false);

  burger.addEventListener('click', () => {
    const isOpen = !burger.classList.contains('active');
    setMenuState(isOpen);
    if (isOpen) {
      mobileMenu.querySelector('a').focus({ preventScroll: true });
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenuState(false);
      burger.focus({ preventScroll: true });
    }
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  reveals.forEach(el => revealObserver.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      let target = null;
      try {
        target = document.querySelector(href);
      } catch {
        return;
      }

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    formNote.hidden = false;
    btn.textContent = 'Отправлено';
    btn.disabled = true;

    setTimeout(() => {
      formNote.hidden = true;
      btn.textContent = 'Отправить заявку';
      btn.disabled = false;
    }, 4000);

    form.reset();
  });

  document.querySelectorAll('.work-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.08}s`;
  });
});
