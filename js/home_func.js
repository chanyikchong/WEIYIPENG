function openNav() {
    document.getElementById("mySidenav").style.height = "100%"; //140px
    document.getElementById("menu_bar").style.display = "none"
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("menu_bar").style.display = "block"
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
    
}