$('#btn').click(function () { 
    $('#fruitUL').append(
        '<li>' + $('#fruitID').val()+'</li>'
    );
});

// $('ul#fruitUL>li').click(function () { 
//     // $(this).text();
//     // console.log($(this).text());
//     $("#fruitID").val($(this).text());
    
// });

$(document).on('click','ul#fruitUL>li' ,function () {
    $("#fruitID").val($(this).text());
});
