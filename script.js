window.addEventListener("scroll", function(){
    var header = this.ducument.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})

var Navbar = ducument.getElementById("Navbar")

function showMenu() {
    NavBar.style.left = "-15px";
}

function hideMenu() {
    NavBar.style.left = "-300px";
}