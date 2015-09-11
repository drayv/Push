var params = getSearchParameters();
var msg = params['msg'];
if (msg === undefined) {
    msg = 'def';
}

function clickNode() {
    $.ajax({
        url: 'http://nodejs-idrayv.rhcloud.com/push',
        data: {
            "msg": msg
        },
        success: function(data) {
            alert(data.msg);
        },
        error: function() {
            alert('Error occured!');
        }
    });
}