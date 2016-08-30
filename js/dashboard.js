$(document).on('ready', function() {


function getData( endpoint , callback) {
        $.ajax({
              type: 'GET',
              url: "https://efigence-camp.herokuapp.com/api/"+endpoint,
              dataType: 'json'
        }).done(function(answer){
            
            callback(answer);
             
    	 }).fail(function(error) {
           console.log("Błąd!")
       })  
}

    getData( "data/summary" , function( data ) {
        
        console.log("Callback pozdrawia!");
        console.log(data);
        $('#balance').prepend(data.content[0].balance);
        $('#funds').prepend(data.content[0].funds);   
        $('#payments').prepend(data.content[0].payments);      
        
        
    });

});


/*
robic callbacki

function foo (bar, baz) {
    
    // ajax
    baz (data);
}

foo ('/api/data/summary'), function (data) {
    
    >> data
});

*/
