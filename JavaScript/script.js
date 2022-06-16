var menuList = document.getElementById("menu");

menuList.style.maxHeight = "0px";
function Nav() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
