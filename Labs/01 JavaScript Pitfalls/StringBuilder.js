function StringBuilder() {

    var data = [];

    function append(str) {
        for (var i = 0; i < str.length; i++) {
            data.push(str[i]);
        }
    }

    function get() {
        var str = data.join('');
        return str;
    }

    return {
        append: append,
        get: get,
    };
}
