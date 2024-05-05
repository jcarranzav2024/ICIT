/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").classList.add("expanded"); // Añade una clase para marcar que la barra está expandida
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("nav-main").style.marginLeft = "250px";
    document.getElementById("nav-menu").classList.add("nav-menuClass"); 
    document.getElementById("nav-menu").onclick = function () {
        myFunction(this);
        closeNav();
    };

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").classList.remove("expanded"); // Remueve la clase que marca que la barra está expandida
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav-main").style.marginLeft = "0";
    document.getElementById("nav-menu").classList.remove("nav-menuClass");
    document.getElementById("nav-menu").onclick = function () {
        myFunction(this);
        openNav();
    };
 
    document.body.style.backgroundColor = "white";

}



function myFunction(x) {
    x.classList.toggle("change");
}


