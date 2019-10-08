let links = document.querySelectorAll('a[href="#"]');

for (const link of links) {
  link.addEventListener('click', e => {
    e.preventDefault();
  });
}
