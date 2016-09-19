$(document).on('ready', function() {


function getData( endpoint , callback) {
        $.ajax({
              type: 'GET',
              url: "https://efigence-camp.herokuapp.com/api/"+endpoint,
              dataType: 'json'
        }).done(function(answer){
            
            callback(answer);
             
    	 }).fail(function(error) {
           console.log("Błąd!");
       })  
}

    getData( "data/summary" , function( data ) {
        
        console.log("Callback mówi hello!");
        console.log(data);
        $('#balance').prepend(data.content[0].balance);
        $('#funds').prepend(data.content[0].funds);   
        $('#payments').prepend(data.content[0].payments);      
        
        
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

$(function () {
    
    var history = [];
    
    getData( "data/history" , function( data ) {
        
        console.log("Callback mówi hello!");
        console.log(data);
        
        var elements = data.content.length;
        
        for (var i = 0; i < elements; i++) {
          history.push (data.content[i].amount );
        }
        
        // odpalamy_wykres( history );
                
    });
    
    $('.chart').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Average fruit consumption during one week'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '(Highcharts.theme && Highcharts.theme.legendBackgroundColor)' || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: '#13bdd2'
            }]
        },
        yAxis: {
            title: {
                text: 'Fruit units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: history
        }]
    });
});


});