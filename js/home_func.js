var check_menu_bar = false;
function openNav() {
    if (check_menu_bar){
        document.getElementById("mySidenav").style.height = "0"; //140px
        check_menu_bar = false;
    }
    else{
        document.getElementById("mySidenav").style.height = "100%";
        check_menu_bar = true;
    }
  }


function check_browser(){
    var explorer = window.navigator.userAgent ;
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    else if(explorer.indexOf("Chrome") >= 0){
        return 'Chrome';
    }
    else if(explorer.indexOf("Opera") >= 0){
        return 'Opera';
    }
    else if(explorer.indexOf("Safari") >= 0){
        return 'Safari';
    }
}

function getMoonPhase(year, month, day)
{
    var c = e = jd = b = 0;
    if (month < 3) {
        year--;
        month += 12;
    }
    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; //jd is total days elapsed
    jd /= 29.5305882; //divide by the moon cycle
    b = parseInt(jd); //int(jd) -> b, take integer part of jd
    jd -= b; //subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); //scale fraction from 0-8 and round
    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }
    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    return b;
}
function set_moon(){
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear()
    var num = getMoonPhase(year, month, date)
    var waningCrescent = document.getElementById('moon0');
    var thirdQuarter = document.getElementById('moon1');
    var waningGibbous = document.getElementById('moon2');
    var fullMoon = document.getElementById('moon3');
    var waxingGibbous = document.getElementById('moon4');
    var firstQuarter = document.getElementById('moon5');
    var waxingCrescent = document.getElementById('moon6');
    var newMoon = document.getElementById('moon7');
    var lis = [waningCrescent, thirdQuarter, waningGibbous, fullMoon, waxingGibbous, firstQuarter, waxingCrescent, newMoon];
    lis = lis.reverse();
    lis[num].className['baseVal'] += 'active';
}

function typer(){
    var turn = document.getElementById("turn");
    var your = document.getElementById("your");
    var magic = document.getElementById("magic");
    var on = document.getElementById("on");
    turn.className = "active";
    
    your.className = "active";
    
    magic.className = "active";
    
    on.className = "active";
    
}

window.onload=function slideshow() {
    var container=document.getElementById("image_gallery")
    var imgs=container.getElementsByTagName("img")
    set_moon()
    current=0;

    if (check_browser() === 'Firefox' || check_browser() === 'Safari'){
        document.getElementById('logo').className = "headerLogo_fire";
    }
    else {
        document.getElementById('logo').className = "headerLogo_chrom";
    }
  
    function slideOff() {
        imgs[current].className=""; 
    }

    function slideOn() {
        imgs[current].className="active";
    }
  
    function changeSlide() { 
        slideOff();
        current++;
        if(current>=imgs.length) current=0;
        slideOn();
    }

    var slideon=setInterval(changeSlide,6000);
  
    container.onmouseover=function () {
        clearInterval(slideon); 
    }
    container.onmouseout=function () {
        slideon=setInterval(changeSlide,6000); 
    }
    
    var word_space = document.getElementById("abstract");
    word_lis = word_space.getElementsByTagName("span");
    var word_count = 0;
    var is_show = false;
    function typer(){
        if (is_show){
            word_lis[word_count].className = "active";
        }
        else{
            word_lis[word_count].className = "";
        }
        word_count++;
        if (word_count>=word_lis.length){
            word_count = 0;
            is_show = (is_show===false)
        }
    }
    var show_typer = setInterval(typer, 100);
}