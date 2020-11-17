var artwork_btn = document.getElementById("artwork");
var graphic_btn = document.getElementById("graphics");

function openNav() {
    document.getElementById("mySidenav").style.height = "140px";
    document.getElementById("menu_bar").style.display = "none"
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("menu_bar").style.display = "block"
}
function set_moon(){
    var d = new Date();
    var date = d.getDate();
    var waningCrescent = document.getElementById('moon0');
    var thirdQuarter = document.getElementById('moon1');
    var waningGibbous = document.getElementById('moon2');
    var fullMoon = document.getElementById('moon3');
    var waxingGibbous = document.getElementById('moon4');
    var firstQuarter = document.getElementById('moon5');
    var waxingCrescent = document.getElementById('moon6');
    var newMoon = document.getElementById('moon7');
    var lis = [waningCrescent, thirdQuarter, waningGibbous, fullMoon, waxingGibbous, firstQuarter, waxingCrescent, newMoon]
    function set_active(num){
        lis[num].className['baseVal'] += 'active';
    }
    if (date >= 1 && date < 8){
        set_active(2);
    }
    else if (date === 8){
        set_active(1);
    }
    else if (date >= 9 && date < 15){
        set_active(0);
    }
    else if(date === 15){
        set_active(7);
    }
    else if(date >= 16 && date < 21){
        set_active(6);
    }
    else if(date === 21){
        set_active(5);
    }
    else if(date >= 22 && date < 30){
        set_active(4);
    }
    else{
        set_active(3);
    }
}
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


function check_browser(){
    var explorer = window.navigator.userAgent;
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