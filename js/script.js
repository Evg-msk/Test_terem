const btn = document.querySelectorAll('.btn'),
    headerBlock = document.querySelectorAll('.header'),
    contentBlocks = document.querySelectorAll('.col-md-4');

btn[0].addEventListener('click', function () {
    headerBlock[0].classList.toggle('header_hide')
});

btn[1].addEventListener('click', function () {
    contentBlocks[1].classList.toggle('swapped')
});

function showModal(){
    $("#exampleModal").modal('show');
}
setTimeout(showModal, 1000);
