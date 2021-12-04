var date = moment().format('dddd, MMMM Do YYYY, h:mm a');
    $('#currentDay').text(date);

$(document).ready(function(){

$('.saveBtn').on('click',function(){
    console.log('it was clicked');
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')

    localStorage.setItem(time,text)

  
});

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



$('#9am .description').val(localStorage.getItem('9am'))
$('#10am .description').val(localStorage.getItem('10am'))
$('#11am .description').val(localStorage.getItem('11am'))
$('#12pm .description').val(localStorage.getItem('12pm'))
$('#13pm .description').val(localStorage.getItem('13pm'))
$('#14pm .description').val(localStorage.getItem('14pm'))
$('#15pm .description').val(localStorage.getItem('15pm'))
$('#16pm .description').val(localStorage.getItem('16pm'))
$('#17pm .description').val(localStorage.getItem('17pm'))
$('#18pm .description').val(localStorage.getItem('18pm'))
$('#19pm .description').val(localStorage.getItem('19pm'))
$('#20pm .description').val(localStorage.getItem('20pm'))
$('#21pm .description').val(localStorage.getItem('21pm'))




timechange();
});

// localStorage.clear();