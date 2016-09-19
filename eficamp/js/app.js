$(document).on('ready', function() {

    var button = $("#go");
    var avatar = $('.circleBox');

    avatar.on('click', function(event) {
        event.preventDefault();
        alert(avatar.css('background-image'));
    });

    function sendAjax(password) {

        $.ajax({
            type: "post",
            data: {
                login: "efi",
                password: password
            },
            url: "https://efigence-camp.herokuapp.com/api/login",
            error: function(response) {
                console.log(response.responseText);
                console.log("Błędne hasło");
                $('#wrongPass').show();
                $('#triangle').show();
                $('#wrongPass').fadeOut(4000);
                $('#triangle').fadeOut(4000);
            },
            success: function(response) {
                console.log(response);
                window.location.href = 'http://google.com';

            }
        });

    };

    button.on('click', function(event) {
        event.preventDefault();
        var pass = $('input').val();
        // alert(pass);
        sendAjax(pass);
    });
});