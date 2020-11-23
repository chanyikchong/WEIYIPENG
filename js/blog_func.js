function openNav() {
    document.getElementById("mySidenav").style.height = "140px";
    document.getElementById("menu_bar").style.display = "none"
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("menu_bar").style.display = "block"
}

var artwork_btn = document.getElementById("artwork");
var graphic_btn = document.getElementById("graphics");

function open_artwork(){
    var artwork_btn = document.getElementById("artwork");
    var graphic_btn = document.getElementById("graphics");
    var art_window = document.getElementById("ArtWindow");
    var grapgic_window = document.getElementById("GraphicsWindow")
    artwork_btn.className = "active";
    graphic_btn.className = "";
    art_window.style.opacity = 1;
    art_window.style.zIndex = 2;
    grapgic_window.style.opacity = 0;
    grapgic_window.style.zIndex = 1;
    art_window.style.display = "block";
    grapgic_window.style.display = "none";
    var blog0 = document.getElementById("blog_init");
    blog0.style.zIndex = 2;
    blog0.style.display = "block"
    var blog1 = document.getElementById("blog_1");
    blog1.style.zIndex = 1;
    blog1.style.display = "none";
    var blog2 = document.getElementById("blog_2");
    blog2.style.zIndex = 1;
    blog2.style.display = "none"
    var blog3 = document.getElementById("blog_3");
    blog3.style.zIndex = 1;
    blog3.style.display = "none"
}

function open_graphics(){
    var artwork_btn = document.getElementById("artwork");
    var graphic_btn = document.getElementById("graphics");
    var art_window = document.getElementById("ArtWindow");
    var grapgic_window = document.getElementById("GraphicsWindow")
    artwork_btn.className = "";
    graphic_btn.className = "active";
    art_window.style.opacity = 0;
    art_window.style.zIndex = 0;
    grapgic_window.style.opacity = 1;
    grapgic_window.style.zIndex = 1;
    art_window.style.display = "none";
    grapgic_window.style.display = "block"
}

function blog_1_switch(){
    var blog0 = document.getElementById("blog_init");
    blog0.style.zIndex = 1;
    blog0.style.display = "none"
    var blog1 = document.getElementById("blog_1");
    blog1.style.zIndex = 2;
    blog1.style.display = "block";
    var blog2 = document.getElementById("blog_2");
    blog2.style.zIndex = 1;
    blog2.style.display = "none"
    var blog3 = document.getElementById("blog_3");
    blog3.style.zIndex = 1;
    blog3.style.display = "none"
}
function blog_2_switch(){
    var blog0 = document.getElementById("blog_init");
    blog0.style.zIndex = 1;
    blog0.style.display = "none"
    var blog1 = document.getElementById("blog_1");
    blog1.style.zIndex = 1;
    blog1.style.display = "none"
    var blog2 = document.getElementById("blog_2");
    blog2.style.zIndex = 2;
    blog2.style.display = "block";
    var blog3 = document.getElementById("blog_3");
    blog3.style.zIndex = 1;
    blog3.style.display = "none"
}
function blog_3_switch(){
    var blog0 = document.getElementById("blog_init");
    blog0.style.zIndex = 1;
    blog0.style.display = "none"
    var blog1 = document.getElementById("blog_1");
    blog1.style.zIndex = 1;
    blog1.style.display = "none"
    var blog2 = document.getElementById("blog_2");
    blog2.style.zIndex = 1;
    blog2.style.display = "none";
    var blog3 = document.getElementById("blog_3");
    blog3.style.zIndex = 2;
    blog3.style.display = "block"
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

window.onload=function slideshow() {
    set_moon();
    if (check_browser() === 'Firefox' || check_browser() === 'Safari'){
        document.getElementById('logo').className = "headerLogo_fire";
    }
    // else if (check_browser() === 'Chrome' || check_browser() === "Edge")
    else {
        document.getElementById('logo').className = "headerLogo_chrom";
    } 
}