// Code for mobileNav
const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
    let isMobileNavOpen = false;
  
    headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
      } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      }
    });
  
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      });
    });
  }
  
  // Code for styles import and initialization
  import '../styles/modern-normalize.css';
  import '../styles/style.css';
  import '../styles/components/header.css';
  import '../styles/components/hero.css';
  import '../styles/components/about.css';
  import '../styles/components/featured.css';
  import '../styles/components/work.css';
  import '../styles/components/contact.css';
  import '../styles/components/footer.css';
  import '../styles/components/mobile-nav.css';
  import '../styles/utils.css';
  
  // Initialization of mobileNav and darkMode
  mobileNav();
  darkMode();
  
  // Code for darkMode
  const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
  
    // State
    const theme = localStorage.getItem('theme');
  
    // On mount
    theme && document.body.classList.add(theme);
  
    // Handlers
    const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
      }
    };
  
    // Events
    themeToggleBtns.forEach(btn =>
      btn.addEventListener('click', handleThemeToggle)
    );
  }
  
  // Export both functions
  export { mobileNav, darkMode };  