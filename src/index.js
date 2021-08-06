// import Swiper JS
import Swiper from 'swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Navigation]);

const swiper = new Swiper('#banners', {
    loop: true,
    //autoplay: { delay: 5000 }
});

const $hamburguer = document.getElementById("hamburguer");
const $header = document.querySelector("header");

$hamburguer.addEventListener('click', function()
{
    $header.classList.toggle("show")
})

const $ongaku = document.querySelector(".video button")
$ongaku.addEventListener('click', function()
{
    let video = document.querySelector(".video video")
    video.muted = false;
    video.play()
})

document.addEventListener("DOMContentLoaded", function()
{

    fetch('http://localhost:3000/clients')
    .then(response => response.json())
    .then(function(data)
    {

        let $clientes = document.querySelector("#clients .container")
        $clientes.innerHTML = ""

        for( var i=0; i < data.length; i++ )
        {

            let $link = document.createElement("a")
            $link.href = data[i].link
            $link.title = data[i].title
            $link.target = "_blank"

            let $img = document.createElement("img")
            $img.src = "/img/"+data[i].image

            $link.appendChild($img)

            $clientes.appendChild($link)

        }
    });

    fetch('http://localhost:3000/services')
    .then(response => response.json())
    .then(function(data)
    {

        let $services = document.querySelector("#services .container")
        $services.innerHTML = ""

        for( var i=0; i < data.length; i++ )
        {

            let $card = document.createElement("card")

            let $img = document.createElement("img")
            $img.src = "/img/"+data[i].image

            let $title = document.createElement("h3")
            $title.textContent = data[i].title 

            let $descr = document.createElement("p")
            $descr.textContent = data[i].description 

            $card.appendChild($img)
            $card.appendChild($title)
            $card.appendChild($descr)

            $services.appendChild($card)

        }
    });


})