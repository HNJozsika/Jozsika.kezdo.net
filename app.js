function fbicon(){
    window.open("https://www.facebook.com/")
}
function igicon(){
    window.open("https://www.instagram.com/")
}
function yticon(){
    window.open("https://www.youtube.com/")
}
const gomb = document.getElementById('gomb')
const nav = document.getElementById('nav')

gomb.addEventListener('click',function(event){
    nav.classList.toggle('menu-active')
})