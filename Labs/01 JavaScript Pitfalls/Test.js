(function () {

    var sb = StringBuilder();

    for (var i = 0; i < 10; i++) {
        sb.append("Line " + i + "\n");
    }

    var str = sb.get();

    console.log(str);

    var sb2 = StringBuilder();

    console.log(sb.append == sb2.append);
})();
