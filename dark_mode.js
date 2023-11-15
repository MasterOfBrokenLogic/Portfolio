const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll('#theme-toggle');

  // On mount
  const theme = localStorage.getItem('theme');
  theme && document.body.classList.add(theme);

  // Handlers
  const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');

      // Update localStorage based on the current theme
      if (document.body.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light-mode');
      } else {
          localStorage.removeItem('theme');
      }
  };

  // Events
  themeToggleBtns.forEach(btn =>
      btn.addEventListener('click', handleThemeToggle)
  );
};

export default darkMode;