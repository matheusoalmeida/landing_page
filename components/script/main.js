/*-------------------SCRIPT MENU NAVBAR-------------------- */
const navbar = document.querySelector(".navbar")
const menu = document.getElementById("menu")


menu.addEventListener("click", function puxaNav(elemento) {
        navbar.classList.toggle("ativo")
})

/*-------------------SCRIPT NAVBAR FIXED-------------------- */
const header = document.getElementById("header")


window.addEventListener("scroll" , function rolagem (){
        if(window.scrollY>100){
        header.classList.add("header-ativo")
        }else{
        header.classList.remove("header-ativo")
        }
})

