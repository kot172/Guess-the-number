
// Функция для установки нового диапазона чисел
function setRange() {
    minRange = document.getElementById('minRange').value; // Получение минимального значения диапазона из поля ввода
    maxRange = document.getElementById('maxRange').value; // Получение максимального значения диапазона из поля ввода
    resetGame(); // Сброс игры
  
}

// Функция для сброса игры
function resetGame() {
    randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange; // Генерация нового случайного числа
    attempts = 0; // Сброс количества попыток
    failedAttempts = 0; // Сброс количества неудачных попыток
    document.getElementById('hint').innerHTML = ""; // Очистка подсказки
    document.getElementById('attempts').innerHTML = ""; // Очистка количества попыток
    let checkbox = document.getElementById('checkbox'); // Получение элемента чекбокса
    let checkboxText = document.getElementById('checkboxText'); // Получение элемента текста чекбокса
    checkbox.checked = false; // Сброс состояния чекбокса
    checkboxText.innerHTML = "Градусник"; // Сброс текста чекбокса
}

// Добавляем слушатели
btnGuess.addEventListener('click', () => guessNumber())
btnRange.addEventListener('click', () => setRange())
btnReset.addEventListener('click', () => resetGame())