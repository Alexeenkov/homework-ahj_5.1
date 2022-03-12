export default class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  init() {
    this.generateBoard();
    this.showRandomGoblins();
  }

  generateBoard() {
    // Создаём поле в виде таблицы
    this.board = document.createElement('table');
    this.board.classList.add('board');
    // Создаём таблицу
    for (let i = 0; i < this.boardSize; i += 1) {
      const boardRow = document.createElement('tr');
      boardRow.classList.add('board__row');
      for (let j = 0; j < this.boardSize; j += 1) {
        const boardCol = document.createElement('td');
        boardCol.classList.add('board__col');
        boardRow.appendChild(boardCol);
      }
      this.board.appendChild(boardRow);
    }
    document.getElementById('game-board').appendChild(this.board);
  }

  showRandomGoblins() {
    const cells = document.getElementsByClassName('board__col');
    setInterval(() => {
      const randomCell = this.generateRandomCell(this.boardSize);
      const activeCell = document.querySelector('._active');
      if (activeCell) {
        activeCell.classList.remove('_active');
      }
      cells[randomCell].classList.add('_active');
    }, 1000);
  }

  generateRandomCell(boardSize) {
    const min = 0;
    const max = Math.floor(boardSize ** 2);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
  }
}
