var menuList = document.getElementById("navbar-main");

menuList.style.maxHeight = "0px";
function Nav() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "200px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
var navbar = document.querySelector('nav')

