// Dark Mode
const btn = document.getElementById('darkBtn');
btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  btn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// Smooth Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-slide').forEach(el => {
  observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

// Contact Form
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', function() {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const msg = document.getElementById('msgInput').value;

  if (name === '' || email === '' || msg === '') {
    alert('⚠️ anni fields fill cheyyi!');
    return;
  }

  document.getElementById('successMsg').style.display = 'block';
  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('msgInput').value = '';
});