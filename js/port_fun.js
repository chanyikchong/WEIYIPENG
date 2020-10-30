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
    if (check_browser() === 'Firefox' || check_browser() === 'Safari'){
        document.getElementById('logo').className = "headerLogo_fire";
    }
    // else if (check_browser() === 'Chrome' || check_browser() === "Edge")
    else {
        document.getElementById('logo').className = "headerLogo_chrom";
    }
}