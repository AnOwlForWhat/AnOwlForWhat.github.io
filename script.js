let count = localStorage.getItem('clickCount') || 0;
document.getElementById('count').textContent = count;

function increase() {
  count++;
  document.getElementById('count').textContent = count;
  localStorage.setItem('clickCount', count);
}

function reset() {
  count = 0;
  document.getElementById('count').textContent = count;
  localStorage.setItem('clickCount', count);
}
