function fib(num) {
    if (num == 0 || num == 1) {
        return 1;
    }

    var res = fib(num - 1) + fib(num - 2);

    return res;
}

addEventListener("message", function (e) {
    var index = e.data;

    var res = fib(index);

    postMessage(res);
});
