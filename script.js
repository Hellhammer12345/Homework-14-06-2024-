document.addEventListener("DOMContentLoaded", function () {
    const nav = [
        "<a href='https://www.example.com'>About us</a>",
        "<a href='https://www.example.com'>Contact</a>",
        "<a href='https://www.example.com'>Sign Up</a>",
        "<a href='https://www.example.com'>Sign in</a>",
    ];



 const div = document.getElementById("div");
 const navigation = document.getElementById ("navigation");


nav.forEach(function (linkHTML) {
    const h1 = document.createElement("h1");
    h1.innerHTML = linkHTML;


    navigation.appendChild(h1)

    
});



    
 });






