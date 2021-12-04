var date = moment().format('dddd, MMMM Do');
    $('#currentDay').text(date);

function timechange(){
    var hour = moment().hour();
        console.log(hour);

    $(".time-block").each(function() {
        var blocktime = parseInt($(this).attr('id'));
                console.log(blocktime);

            if(blocktime < hour){
                $(this).addClass('past');
            }
            else if (blocktime === hour){
                $(this).addClass('present');
            }
            else{
                $(this).addClass('future');
            }

    })
};
timechange();



