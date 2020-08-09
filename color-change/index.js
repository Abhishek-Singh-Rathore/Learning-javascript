let a,b,c,elem,bgclr;
function fun() {
    a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);
    console.log(a);
    console.log(b);
    console.log(c);
    bgclr = "rgb(" + a + "," + b + "," + c + ")";
    document.querySelector(".container").style.backgroundColor = bgclr;

}

fun();
