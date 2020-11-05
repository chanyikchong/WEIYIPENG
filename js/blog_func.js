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


window.onload=function slideshow() {
    if (check_browser() === 'Firefox' || check_browser() === 'Safari'){
        document.getElementById('logo').className = "headerLogo_fire";
    }
    // else if (check_browser() === 'Chrome' || check_browser() === "Edge")
    else {
        document.getElementById('logo').className = "headerLogo_chrom";
    } 
}