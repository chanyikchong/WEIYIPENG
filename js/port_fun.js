function openNav() {
    document.getElementById("mySidenav").style.height = "140px";
    document.getElementById("menu_bar").style.display = "none"
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("menu_bar").style.display = "block"
  }




         //判断是否为IE浏览器
function check_browser(){
    var explorer = window.navigator.userAgent;
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //判断是否为Firefox浏览器
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //判断是否为Chrome浏览器
    else if(explorer.indexOf("Chrome") >= 0){
        return 'Chrome';
    }
    //判断是否为Opera浏览器
    else if(explorer.indexOf("Opera") >= 0){
        return 'Opera';
    }
    //判断是否为Safari浏览器
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