var TicTacToe = TicTacToe || {};

TicTacToe.Event = (function () {

    function Event() {
        this.handlers = [];
    }

    Event.prototype.add = function (obj, method) {
        this.handlers.push({
            obj: obj,
            method: method
        });
    }

    Event.prototype.remove = function (obj, method) {

        for (var i = 0; i < this.handlers; i++) {
            var handler = this.handlers[i];

            if (handler.obj == obj && handler.method == method) {
                this.handlers.splice(i);
                return;
            }
        }
    }

    Event.prototype.raise = function (args) {

        for (var i = 0; i < this.handlers.length; i++) {
            var handler = this.handlers[i];

            handler.method.call(handler.obj, args);
        }
    }

    return Event;
})();
