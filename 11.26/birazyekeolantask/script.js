const squares = document.querySelectorAll('.squares');
const container = document.querySelector('.small-containers');

// Добавляем события для каждого квадрата
squares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragend', dragEnd);
});

// Добавляем события для контейнера
container.addEventListener('dragover', dragOver);
container.addEventListener('drop', dragDrop);

let draggedItem = null;

function dragStart(e) {
    draggedItem = this;
    setTimeout(() => this.classList.add('hidden'), 0); // Скрываем элемент во время перетаскивания
}

function dragEnd(e) {
    setTimeout(() => this.classList.remove('hidden'), 0); // Показываем элемент после перетаскивания
    draggedItem = null;
}

function dragOver(e) {
    e.preventDefault(); // Разрешаем сброс
}

function dragDrop(e) {
    e.preventDefault();
    if (draggedItem) {
        container.appendChild(draggedItem); // Добавляем квадрат в контейнер
    }
}