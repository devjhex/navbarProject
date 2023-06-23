/* Elements */
let burger = document.getElementById("burger");
let list = document.getElementById("list");

burger.addEventListener("click", function(){
    list.classList.toggle("h-36");
});