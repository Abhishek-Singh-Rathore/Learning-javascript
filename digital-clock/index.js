function showTime()
{
    var time = new Date();

    var hr = time.getHours();
    var mi = time.getMinutes();
    var se = time.getSeconds();

    hr = (hr<10) ? "0"+hr:hr;
    mi = (mi<10) ? "0"+mi:mi;
    se = (se<10) ? "0"+se:se;


    var currentHr = hr;
    var currentMi = mi;
    var currentSe = se;

    document.getElementById("hours").innerHTML = currentHr;
    document.getElementById("min").innerHTML = currentMi;
    document.getElementById("sec").innerHTML = currentSe;

    setTimeout(showTime, 1000);
}
function showDate()
{
    var dat =new Date();

    var curDa = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curMo = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
    var Da = curDa[Number(dat.getDay())];
    console.log(Da);
    var Mo = curMo[Number(dat.getMonth())];
    console.log(Mo);
    var Datt = dat.getDate();
    var Ye = dat.getFullYear();

    var currentDa = Da;
    var currentMo = Mo;
    var currentDatt = Datt;
    var currentYe = Ye;

    document.getElementById("day").innerHTML = currentDa;
    document.getElementById("month").innerHTML = currentMo;
    document.getElementById("date").innerHTML = currentDatt;
    document.getElementById("year").innerHTML = currentYe;  

    setTimeout(showDate, 1000);
}
showTime();
showDate();
