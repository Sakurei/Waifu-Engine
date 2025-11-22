const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const quickButtons = document.querySelectorAll('.quick-links button');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;
  const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  window.location.href = url;
});

quickButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prefix = btn.getAttribute('data-prefix') || '';
    if (!input.value.startsWith(prefix)) {
      input.value = prefix + input.value;
    }
    input.focus();
    input.selectionStart = input.selectionEnd = input.value.length;
  });
});
const btn   = document.getElementById('search-button');

btn.addEventListener('click', () => {
  const q = input.value.trim();
  if (!q) return;
});
