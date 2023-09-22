// Функция для угадывания числа
function guessNumber() {
    let userInput = document.getElementById('userInput').value; // Получение числа, введенного пользователем
    // Проверка, что введенное число находится в заданном диапазоне
    if (userInput < minRange || userInput > maxRange) {
        document.getElementById('hint').innerHTML = "Введите число в диапазоне от " + minRange + " до " + maxRange;
        return;
    }
    attempts++; // Увеличение количества попыток
    // Проверка, является ли введенное число меньше загаданного
    if (userInput < randomNumber) {
        document.getElementById('hint').innerHTML = "Загаданное число больше";
        failedAttempts++; // Увеличение количества неудачных попыток
    } else if (userInput > randomNumber) {
        document.getElementById('hint').innerHTML = "Загаданное число меньше";
        failedAttempts++; // Увеличение количества неудачных попыток
    } else {
        document.getElementById('hint').innerHTML = "Поздравляем! Вы угадали число!";
        failedAttempts = 0; // Сброс количества неудачных попыток
    }
    // Проверка, было ли три неудачных попытки и вывод подсказки
    if (failedAttempts === 3) {
        document.getElementById('hint').innerHTML += "<br>Подсказка: число " + (randomNumber % 2 === 0 ? "четное" : "нечетное");
        failedAttempts = 0; // Сброс количества неудачных попыток
    }
    document.getElementById('attempts').innerHTML = "Попыток: " + attempts; // Вывод количества попыток
    let checkbox = document.getElementById('checkbox'); // Получение элемента чекбокса
    let checkboxText = document.getElementById('checkboxText'); // Получение элемента текста чекбокса
    // Проверка состояния чекбокса и вывод соответствующего сообщения
    if (checkbox.checked) {
        let difference = Math.abs(userInput - randomNumber); // Вычисление разницы между введенным числом и загаданным
        if (difference <= 10) {
            checkboxText.innerHTML = "Горячо";
            checkboxText.style.color = "red";
        } else if (difference <= 20) {
            checkboxText.innerHTML = "Тепло";
            checkboxText.style.color = "orange";
        } else {
            checkboxText.innerHTML = "Холодно";
            checkboxText.style.color = "blue";
        }
    } else {
        checkboxText.innerHTML = "Градусник";
    }
}