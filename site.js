const $hamburguer = document.getElementById("hamburguer");
const $nav = document.getElementById("main-nav");

$hamburguer.addEventListener('click', function()
{

    console.log("e aee ")
    $nav.classList.toggle("show")
    
})