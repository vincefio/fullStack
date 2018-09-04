$(document).ready(function () {
    $('#subscribe').on('click', function (e) {
        e.preventDefault()

        var username = $('#username').val()
        var password = $('#password').val()
        //console.log(username + '  ' + password)

        $.ajax({
            method: 'POST',
            url: '/register',
            data: {
                username: username,
                password: password
            }
        })
            .done(function (data) {
                console.log('finito ' + data)
            })
    })


}); 