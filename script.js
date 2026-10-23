document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('categoryNav');
  const main = document.getElementById('menuMain');
  const searchInput = document.getElementById('searchInput');
  const vatNote = document.getElementById('vatNote');
  const noResults = document.getElementById('noResults');

  vatNote.textContent = MENU_DATA.vatNote;

  function slugify(str) {
    return 'cat-' + str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  const navButtons = [];

  MENU_DATA.categories.forEach(cat => {
    const id = slugify(cat.category);

    const navBtn = document.createElement('button');
    navBtn.type = 'button';
    navBtn.className = 'nav-pill';
    navBtn.textContent = cat.category;
    navBtn.dataset.target = id;
    navBtn.addEventListener('click', () => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    nav.appendChild(navBtn);
    navButtons.push(navBtn);

    const section = document.createElement('section');
    section.className = 'menu-section';
    section.id = id;

    const heading = document.createElement('h2');
    heading.textContent = cat.category;
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'item-grid';

    cat.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item';

      const info = document.createElement('div');
      info.className = 'item-info';

      const nameEl = document.createElement('span');
      nameEl.className = 'item-name';
      nameEl.textContent = item.name;
      info.appendChild(nameEl);

      if (item.amharic) {
        const amEl = document.createElement('span');
        amEl.className = 'item-amharic';
        amEl.textContent = item.amharic;
        info.appendChild(amEl);
      }

      const leader = document.createElement('span');
      leader.className = 'item-leader';

      const price = document.createElement('span');
      price.className = 'item-price';
      price.textContent = `${item.price} ${MENU_DATA.currency}`;

      row.appendChild(info);
      row.appendChild(leader);
      row.appendChild(price);

      row.dataset.search = (item.name + ' ' + (item.amharic || '')).toLowerCase();
      grid.appendChild(row);
    });

    section.appendChild(grid);
    main.appendChild(section);
  });

  const sections = document.querySelectorAll('.menu-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navButtons.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.target === entry.target.id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach(sec => observer.observe(sec));

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let anyVisible = false;

    document.querySelectorAll('.menu-section').forEach(sec => {
      let sectionHasMatch = false;
      sec.querySelectorAll('.menu-item').forEach(item => {
        const match = item.dataset.search.includes(q);
        item.style.display = match ? '' : 'none';
        if (match) sectionHasMatch = true;
      });
      sec.style.display = sectionHasMatch ? '' : 'none';
      if (sectionHasMatch) anyVisible = true;
    });

    noResults.style.display = anyVisible ? 'none' : '';
  });
});
