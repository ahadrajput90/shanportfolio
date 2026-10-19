// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
menuBtn.addEventListener('click', () => navList.classList.toggle('open'));
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

// Scroll reveal + animated skill bars
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    e.target.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.w + '%');
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form -> opens visitor's email app (change the address below)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent('Project inquiry: ' + f.service.value);
  const body = encodeURIComponent('Name: ' + f.name.value + '\nEmail: ' + f.email.value + '\n\n' + f.message.value);
  window.location.href = 'mailto:shanahmedrajput@gmail.com?subject=' + subject + '&body=' + body;
});

document.getElementById('year').textContent = new Date().getFullYear();
