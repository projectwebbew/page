    let stars=document.querySelector('.rating ');
stars.addEventListener('click',function (e) {
    let el = e.target,
        current;

    current = e.target;
    do{
        if(current.tagName == 'svg') break;

        if(current.tagName == 'BODY') return;

        current = current.parentElement;

    }while(1);


    current.classList.toggle('rattinStar');


});


