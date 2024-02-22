document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('img');

images.forEach(image => {
    image.classList.add('draggable')
});

$( ".draggable" ).draggable();
});



