/// <reference path="Player.js" />

(function (Event) {

    var BOARD_SIZE = 3;

    var CELL = {
        None: "",
        X: "X",
        O: "O",
    };

    function GameService() {
        this.board = [];

        this.events = {
            step: new Event(),
            start: new Event(),
            eog: new Event(),
        };

        this.reset();
    }

    GameService.prototype.reset = function () {
        for (var i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
            this.board[i] = CELL.EMPTY;
        }

        this.currentPlayer = CELL.X;
        this.gameOver = false;

        this.events.start.raise();
    }

    GameService.prototype.getCell = function (x, y) {
        this.validateLocation(x, y);

        var cell = this.board[this.getIndex(x, y)];

        return cell;
    }

    GameService.prototype.validateLocation = function (x, y) {
        if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) {
            throw new Error("Invalid cell position: (" + x + ", " + y + ")");
        }
    }

    GameService.prototype.getIndex = function (x, y) {
        return y * 3 + x;
    }

    GameService.prototype.step = function (x, y) {
        if (this.gameOver) {
            return;
        }

        this.validateLocation(x, y);

        if (this.getCell(x, y) != CELL.EMPTY) {
            return;
        }

        var value = this.currentPlayer;
        this.board[this.getIndex(x, y)] = value;

        this.currentPlayer = (this.currentPlayer == CELL.X ? CELL.O : CELL.X);

        this.events.step.raise({
            x: x,
            y: y,
            value: value,
        });

        this.checkEOG();
    }

    GameService.prototype.checkEOG = function () {
        var me = this;

        var options = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (var i = 0; i < options.length; i++) {
            var option = options[i];

            var index = option[0];
            var cell = this.board[index];

            if (cell == CELL.EMPTY) {
                continue;
            }

            var allTheSameValue = true;

            for (var j = 1; j < option.length; j++) {
                if (cell != this.board[option[j]]) {
                    allTheSameValue = false;
                    break;
                }
            }

            if (allTheSameValue) {
                this.gameOver = true;
                this.events.eog.raise(cell);

                return;
            }
        }
    }

    GameService.prototype.getSize = function () {
        return BOARD_SIZE;
    }

    angular.module("ticTacToeApp").service("gameService", GameService);

})(TicTacToe.Event);