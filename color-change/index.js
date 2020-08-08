let a,b,c,elem;
function fun() {
    a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);
    console.log(a);
    console.log(b);
    console.log(c);
    elem = document.querySelector(".container").style.backgroundColor = "AA0000";
    console.log(elem);
}

fun();
