function burgerMenuClick() {
    const menu = document.getElementById("myLinks");
    const parentBlock = document.getElementById("myLinksParent");
    if(menu.style.display === "block") {
        menu.style.display = "none";
        parentBlock.style.backgroundColor = "transparent";
    } else {
        menu.style.display = "block";
        menu.style.backgroundColor = "rgb(0,0,0)"
        parentBlock.style.backgroundColor =  "rgb(99,99,99)";
    }
}
function burgerMenuOver() {
    const menu = document.getElementById("myLinks");
    const parentBlock = document.getElementById("myLinksParent");
    menu.style.display = "block";
    menu.style.backgroundColor = "rgb(0,0,0)"
    parentBlock.style.backgroundColor =  "rgb(99,99,99)";
}
function burgerMenuOut() {
    const menu = document.getElementById("myLinks");
    const parentBlock = document.getElementById("myLinksParent");
    menu.style.display = "block";
    menu.style.display = "none";
    parentBlock.style.backgroundColor = "transparent";
}