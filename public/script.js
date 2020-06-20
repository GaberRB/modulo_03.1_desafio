const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for ( let card of cards ){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src =`https://rocketseat.com.br/${videoId}`;
        
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src="";
})


function change_img(){
    document.querySelector("#imgId").src = document.querySelector("#imgId").innerHTML = "/go-home.gif";
    document.getElementById("error-body").style.transition = "all 3s";
    document.body.style.backgroundColor =   'black';

}


function change_img_error(){
    document.querySelector("#imgId").src = document.querySelector("#imgId").innerHTML = "/error.gif";
    document.body.style.backgroundColor = '#145c8a';
}

