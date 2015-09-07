$("button.get").click(function () {
    getData();
});

$("button.send").click(function () {
    sendData();
});

function getData() {

    //$("head").append("<script src='http://localhost:54915/contacts.html?callback=g'></script>");


    //$("head").append("<script src='http://facebook.com/resetPassword?passowrd=123'></script>");

    $.ajax({
        type: "GET",
        url: "http://localhost:54915/contacts.html",
        dataType: "json",
        success: function (json) {
            console.log(json);
        },
        error: function (err) {
            console.log("ERROR");
        },
    });
}

//function readData(data) {
//    console.log(data);
//}

function retrieveXmlAndParse() {
    $.ajax({
        type: "GET",
        url: "contacts.xml",
        success: function (res) {
            //console.log(res);
            var element = $(res);
            element.find("Name").each(function () {
                console.log($(this).text());
            });
        },
        error: function (err) {
            console.log("ERROR");
        }
    });
}
