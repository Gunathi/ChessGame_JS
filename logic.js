document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('img');

images.forEach(image => {
    image.classList.add('draggable')
});

$( ".draggable" ).draggable();
});

// $(".loader").css('display', "none"); //disappear element using JS
// $(".loader").fadeOut(1000);

//logic of the loader. loader run until page finish it's loading
$(window).on('load', function (){
    $(".loader").fadeOut(1000)
});



