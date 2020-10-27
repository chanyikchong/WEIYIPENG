// $(function () {
//   // 实现自动播放
//   var p=document.getElementsByClassName('img-g')[0];
//   var img=p.getElementsByTagName("img")
//   // var button=document.querySelectorAll('.button-g span')
//   // 设置3秒播放
//   window.timer=setInterval(move,5000);
//   // 轮播设置
//   function move(){
//       // bannerimage的宽度乘以图片的个数
//       if(parseInt(p.style.left)>-100*(img.length-1)){
//           // 和bannerimage的宽度保持一致即可：700
//           p.style.left=parseInt(p.style.left)-100+'%'//move_x+'px'
//           p.style.transition='left 1s';
//           var index = -Math.round(parseInt(p.style.left)/100)
//           // tog(index)
//           if (index>img.length-2){
//               setTimeout(function(){
//                   // tog(0)
//                   p.style.left='0px'
//                   p.style.transition='left 0s';
//               },1000)
//           }
//       }else{
//           p.style.left='0px'
//           p.style.transition='left 0s';
//       }
//   }

//   // 设置小圆点
//   // for(var i=0;i<button.length;i++){
//   //     // button[i].style.backgroundColor='#eee';
//   //     button[i].onclick=function(){
//   //         p.style.left=-100*this.getAttribute('data-index')+'%'
//   //         tog(this.getAttribute('data-index'))
//   //         clearInterval(window.timer)
//   //         window.timer=setInterval(move,5000);
//   //     }
//   // }
//   // 设置小圆点
//   function tog(index){
//       console.log(img[0].offsetWidth)
//       if(index>5){
//           tog(0);
//           return;
//       }
//       for(var i=0;i<button.length;i++){
//           button[i].style.backgroundColor='rgba(255, 255, 255, 0.5)';
//       }
//       button[index].style.backgroundColor='rgb(255, 255, 255)';
//   }

//   // 鼠标移上事件
//   p.onmouseover=function(){
//       clearInterval(window.timer)
//   }
//   // 鼠标移除事件
//   p.onmouseout=function(){
//       window.timer=setInterval(move,5000);
//   }
// });

window.onload=function slideshow() {
  var block=document.getElementById("image_gallery")
  var imgs=block.getElementsByTagName("img")
  
  current=0; //current为当前活跃的图片编号
  
  function slideOff() {
      imgs[current].className=""; //图片淡出
  
  }
  function slideOn() {
      imgs[current].className="active"; //图片淡入
  
  }
  
  function changeSlide() { //切换图片的函数
      slideOff();
      current++; //自增1
      if(current>=imgs.length) current=0;
      slideOn();
  }
  
  //每2s调用changeSlide函数进行图片轮播
  var slideon=setInterval(changeSlide,6000);
  
  block.onmouseover=function () {
      clearInterval(slideon); //当鼠标移入时清除轮播事件
  }
  block.onmouseout=function () {
      slideon=setInterval(changeSlide,6000); //当鼠标移出时重新开始轮播事件
  }
}
console.log(document.getElementsByClassName('bannerimage'))