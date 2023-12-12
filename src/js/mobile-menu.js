(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileNavMenu = document.querySelector(
    '.js-menu-container .mob-nav__memu--list'
  );
  const onMobileNavMenuClick = event => {
    const { target } = event;
    if (!target.hasAttribute('href')) {
      return;
    }
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'flex';
  };
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    if (!isMenuOpen) {
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'flex';
    } else {
      openMenuBtn.style.display = 'flex';
      closeMenuBtn.style.display = 'none';
    }
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobileNavMenu.addEventListener('click', onMobileNavMenuClick);
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();