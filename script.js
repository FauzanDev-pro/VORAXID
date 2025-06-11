
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (loading) loading.style.display = 'none';
});
