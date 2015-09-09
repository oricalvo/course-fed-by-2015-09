(function () {

    angular.module("ticTacToeApp").controller("GameCtrl",
        [
            "$scope",
            "gameService",
            GameCtrl
        ]);

    function GameCtrl($scope, gameService) {
        var me = this;

        this.gameService = gameService;

        $scope.$on("step", function (e, args) {
            me.onStep(args);
        });

        $scope.$on("start", function (e, args) {
            me.onStart(args);
        });

        $scope.$on("eog", function (e, args) {
            me.onEOG(args);
        });

        //this.gameService.events.step.add(this, this.onStep);
        //this.gameService.events.start.add(this, this.onStart);
        //this.gameService.events.eog.add(this, this.onEOG);

        this.reset();
    }

    GameCtrl.prototype.reset = function () {
        this.rows = [];

        for (var y = 0; y < this.gameService.getSize() ; y++) {

            var cells = [];
            this.rows.push(cells);

            for (var x = 0; x < this.gameService.getSize() ; x++) {
                var cell = new Cell(x, y, this.gameService.getCell(x, y));
                cells.push(cell);
            }
        }
    }

    GameCtrl.prototype.onStart = function () {
        this.reset();
    }

    GameCtrl.prototype.onEOG = function (cell) {
        setTimeout(function () {
            alert("We have a winner: " + cell + " !!!");
        }, 0);
    }

    GameCtrl.prototype.cellClicked = function (cell) {
        this.gameService.step(cell.x, cell.y);
    }

    GameCtrl.prototype.onStep = function (args) {
        this.rows[args.y][args.x].value = args.value;
    }

    GameCtrl.prototype.newGame = function () {
        this.gameService.reset();
    }

    function Cell(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
})();
