// Объявление переменных и инициализация начальных значений
let minRange = 1; // Минимальное значение диапазона
let maxRange = 100; // Максимальное значение диапазона
let randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange; // Генерация случайного числа в заданном диапазоне
let attempts = 0; // Количество попыток
let failedAttempts = 0; // Количество неудачных попыток
const btnGuess = document.getElementById('btnGuess') // Кнопка "Угадать"
const btnRange = document.getElementById('btnRange') // Кнопка "Установить диапазон"
const btnReset = document.getElementById('btnReset') // Кнопка "Начать заново"