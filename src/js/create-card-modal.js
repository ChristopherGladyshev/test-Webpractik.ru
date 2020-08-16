



const body = document.getElementById('body'); 

body.addEventListener('click', ()=>{
    if(event.target.getAttribute('data-calculate') == "minus"){
        console.log(event.target);
    }
})


function minus(event){
    event.target
}

function plus(){}