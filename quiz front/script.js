document.addEventListener('DOMContentLoaded', function() {

  const startBtn = document.getElementById("startBtn");
  const startOverlay = document.getElementById("startOverlay");
  const finishBtn = document.getElementById("finishBtn");
  const timerElement = document.getElementById("timer");
  const form = document.getElementById("testForm");
  const colors = document.querySelectorAll('.color');
  const slots = document.querySelectorAll('.slot');
  const retryBtn = document.getElementById('retryBtn');

  let time = 60;
  let interval;

  // Disable test before start
  if (form) form.querySelectorAll('input').forEach(input => input.disabled = true);
  colors.forEach(color => color.setAttribute('draggable', false));
  if (finishBtn) finishBtn.disabled = true;

  // Старт теста
  startBtn.addEventListener('click', () => {
    // Активируем тест
    if (form) form.querySelectorAll('input').forEach(input => input.disabled = false);
    colors.forEach(color => color.setAttribute('draggable', true));
    finishBtn.disabled = false;
    startBtn.disabled = true;
    if (startOverlay) startOverlay.style.display = 'none';

    // Запуск таймера
    interval = setInterval(() => {
      time--;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      timerElement.textContent = `Time: ${minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
      if (time <= 0) {
        clearInterval(interval);
        finishTest();
      }
    }, 1000);
  });

  // Drag & Drop
  colors.forEach(color => {
    color.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', color.dataset.color);
    });
  });

  slots.forEach(slot => {
    slot.addEventListener('dragover', e => e.preventDefault());
    slot.addEventListener('drop', e => {
      e.preventDefault();
      const color = e.dataTransfer.getData('text');
      slot.style.backgroundColor = color;
      slot.dataset.filled = color;
    });
  });

  // Finish button
  finishBtn.addEventListener('click', () => {
    clearInterval(interval);
    finishTest();
  });

  // Подсчёт баллов
  function finishTest() {
    let score = 0;
    const answers = { q1: "b", q2: "a", q3: "b", q4: "c" };

    for (let q in answers) {
      const radios = form[q];
      let chosen = null;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          chosen = radios[i].value;
          break;
        }
      }
      if (chosen === answers[q]) score++;
    }

    // Вопрос 5 — флаг
    const flagCorrect = ["blue", "red", "green"];
    const allCorrect = Array.from(slots).every((slot, i) => slot.dataset.filled === flagCorrect[i]);
    if (allCorrect) score++;

    
    // Показать модальное окно
    const modal = document.getElementById("scoreModal");
    const scoreText = document.getElementById("scoreText");
    modal.style.display = "block";
    scoreText.textContent = `Your score: ${score} / 5`;
  }
  // Закрытие модального окна
document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("scoreModal").style.display = "none";
});

// Закрытие при клике вне окна
window.addEventListener("click", (e) => {
    const modal = document.getElementById("scoreModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Retry button reloads the page
if (retryBtn) {
  retryBtn.addEventListener('click', () => {
    window.location.reload();
  });
}
});
