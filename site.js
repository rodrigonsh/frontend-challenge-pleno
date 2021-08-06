const $hamburguer = document.getElementById("hamburguer");
const $nav = document.getElementById("main-nav");

$hamburguer.addEventListener('click', function()
{

    console.log("e aee ")
    $nav.classList.toggle("show")
    
})

document.addEventListener("DOMContentLoaded", function()
{

    fetch('http://localhost:3000/clients')
    .then(response => response.json())
    .then(function(data)
    {

        $clientes = document.querySelector("#clients .container")
        $clientes.innerHTML = ""

        for( var i=0; i < data.length; i++ )
        {

            $link = document.createElement("a")
            $link.href = data[i].link
            $link.title = data[i].title
            $link.target = "_blank"

            $img = document.createElement("img")
            $img.src = "/img/"+data[i].image

            $link.appendChild($img)

            $clientes.appendChild($link)

        }
    });


})