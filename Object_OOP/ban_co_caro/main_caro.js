class Player {
    constructor(name, symbol) {
        this.nam = name;
        this.symbol = symbol;
    }
}

class Board {
    constructor(size) {
        this.size = size;
        this.cell = Array(size).fill().map(() => Array(size).fill(null));
    }

    render(boardElement, handleClick) {
        boardElement.innerHTML = '';
        boardElement.style.width = `${this.size * 20}px`;
        boardElement.style.height = `${this.size * 20}px`;

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.style.left = `${j * 20}px`;
                cell.style.top = `${j * 20}px`;
                cell.dataset.row=i;
                cell.dataset.col=j;
                cell.addEventListener('click', handleClick);
                boardElement.appendChild(cell);

            }
        }
    }
}
class Game {
    constructor(boardSize =20) {
        this.boardSize = boardSize;
        this.board=new Board(boardSize);
        this.boardElement=document.getElementById('board');
        this.currentPlayer=new Player('Player 1', 'X');
        this.initBoard();
    }
    initBoard(){
        this.board.render(this.boardElement, (event)=>this.handleClick(event));
    }
    handleClick(event){
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);



    }
}