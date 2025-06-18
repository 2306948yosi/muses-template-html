document.addEventListener('DOMContentLoaded', () => {
  function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formatted = `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').textContent = formatted;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});

