var url = 'http://localhost:8000/';

var user = {
    denglu: function(userName, userPassword, fanhui) {
        $.post(url + 'admin/login', {
            user_name: userName,
            password: userPassword
        }, function(res) {
            fanhui(res);
        });
    },
    tuichu: function(fanhui) {
        $.post(url + 'admin/logout', function(res) {
            fanhui(res);
        });
    },
    yhxinxi: function(fanhui) {
        $.get(url + 'admin/getuser', function(res) {
            fanhui(res)
        });
    },
    articleCount: function(fanhui) {
        $.get(url + 'admin/article_count', function(res) {
            fanhui(res)
        })
    },
    commentCount: function(fanhui) {
        $.get(url + 'admin/comment_count', function(res) {
            fanhui(res);
        });
    },
}