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
                    $('#go').click(function() {
                    window.location.href = 'http://google.com';
                    return false;
                    });
                }
            });    
        }
                
        else {
            console.log("Błędne hasło");
            $('#wrongPass').show();
            $('#triangle').show();
            $('#wrongPass').fadeOut(4000);
            $('#triangle').fadeOut(4000);
        }
    };
            
   
    button.on('click', function(event) {
       event.preventDefault();
        var pass = $('input').val();
        // alert(pass);
        sendAjax(pass);
}); 
    });
    