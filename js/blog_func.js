function openNav() {
    document.getElementById("mySidenav").style.height = "140px";
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

// $.ajaxPrefilter( function (options) {
//         if (options.crossDomain && jQuery.support.cors) {
//             var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
//             options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
//             };
//         });
//     var showSrc = "https://mp.weixin.qq.com/s/RPVlp9cbMS_dL30SParNfQ"
//     $.get( showSrc, function (response){
//         var html = response;
//         html = html.replace(/data-src/g, "src").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '').replace(/https/g,'http');
//         var html_src = 'data:text/html;charset=utf-8,' + html;
//         iframe.attr("src" , html_src);
//         //var bodyInner = thisV.getBody(html,REG_BODY);
//         //bodyInner = '<div class="bodyHtml">'+bodyInner +'</div>'
//         //$('.casesCon').append(bodyInner);
//     });

getUrl(URL)
    //url 为微信公众号文章链接
    let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    let realurl = http + '//cors-anywhere.herokuapp.com/' + URL;
    axios.get(realurl).then((response)=>{
    console.log(response)
    let html = response.data;
    html = html.replace(/data-src/g, "src")
                .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
                .replace(/https/g,'http');
    let html_src = 'data:text/html;charset=utf-8,' + html;
    let iframe = document.getElementById('iFrame');
    iframe.src = html_src;
    },(err)=>{console.log(err);});

window.onload=function slideshow() {
    if (check_browser() === 'Firefox' || check_browser() === 'Safari'){
        document.getElementById('logo').className = "headerLogo_fire";
    }
    // else if (check_browser() === 'Chrome' || check_browser() === "Edge")
    else {
        document.getElementById('logo').className = "headerLogo_chrom";
    } 
}