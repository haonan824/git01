var user = {
    denglu: function(userName, userPassword, fanhui) {
        $.post('http://localhost:8000/admin/login', {
            user_name: userName,
            password: userPassword
        }, function(res) {
            fanhui(res);
        });
    },
    tuchu: function(fanhui) {
        $.post('http://localhost:8000/admin/logout', function(res) {
            fanhui(res);
        })
    }
}