(() => {
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('visible');
  });

  const publications = [...document.querySelectorAll('.publication')];
  const count = document.getElementById('publication-count');
  const previousButton = document.getElementById('previous-publication');
  const nextButton = document.getElementById('next-publication');
  let currentPublication = 0;

  const showPublication = (index) => {
    if (!publications.length) return;
    currentPublication = (index + publications.length) % publications.length;
    publications.forEach((publication, i) => {
      publication.classList.toggle('active', i === currentPublication);
    });
    if (count) {
      count.textContent = `${String(currentPublication + 1).padStart(2, '0')} / ${String(publications.length).padStart(2, '0')}`;
    }
  };

  if (previousButton) {
    previousButton.addEventListener('click', () => showPublication(currentPublication - 1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => showPublication(currentPublication + 1));
  }

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.primary-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    document.querySelectorAll('.primary-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
