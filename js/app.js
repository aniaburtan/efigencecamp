$(document).on('ready', function() {

    var button = $("#go");
    var avatar = $('.circleBox');

    avatar.on('click', function(event) {
        event.preventDefault();
        alert(avatar.css('background-image'));
    });

    function sendAjax(password) {
        if (password === "camp") {
            $.ajax({
                type: "post",
                data: {
                    login: "efi",
                    password: "camp"
                },
                url: "https://efigence-camp.herokuapp.com/api/login",
                error: function(response) {
                    console.log(response.responseText);
                },
                success: function(response) {
                    console.log(response);
                }
            });
        }
        else {
            console.log("Błędne hasło");
        }
    };
            
   
    button.on('click', function(event) {
        event.preventDefault();
        var pass = $('input').val();
        // alert(pass);
        sendAjax(pass);
    });
});