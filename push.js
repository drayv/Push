var params = getSearchParameters();
var msg = params['msg'];
if (msg === undefined) {
    msg = 'def';
}

Parse.initialize("UE7n5Nm1jxnpTqlicSLW7020AUB0TYNCx1XuoUp7", "QnPAOSd1ZYBkgTHBj6IZclSl2vmofTXLzQeaQN8l");

function pushClick() {
    var PushObject = Parse.Object.extend("push");
    var query = new Parse.Query(PushObject);
    query.get("amqwpVzsji", {
        success: function(pushObject) {
            var foo = pushObject.get(msg);
            alert(foo);
        },
        error: function(object, error) {}
    })
}