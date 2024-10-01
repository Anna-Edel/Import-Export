// game.js

class Game {
    start() {
        console.log('game started');
    }
}

class GameSavingData {
    // реализация класса
}

function readGameSaving() {
    // реализация функции
}

function writeGameSaving() {
    // реализация функции
}

// Экспортируем класс Game как default и другие функции/классы
export default Game; // Экспортируем Game как default
export { GameSavingData, readGameSaving, writeGameSaving }; // Экспортируем остальные
