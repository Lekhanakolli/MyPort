// Dark mode toggle
const btn = document.getElementById('darkBtn');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Light Mode';
  } else {
    btn.textContent = '🌙 Dark Mode';
  }
});
