//객체
var links={
  setColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //     alist[i].style.color = color;
    //     i += 1;
    // }

    $('a').css('color', color); //jquery 사용
  }
}
var Body={
  setColor:function (color){
    //document.querySelector('body').style.color=color;
    $('body').css('color', color);
  },  //객체 구분할 때 ,로 구분
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  }
}
//함수
function nightDayBtn(self){
  var target = document.querySelector('body');
    if(self.value==='day'){
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    links.setColor('blue');
  }else{
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    links.setColor('powderblue');
  }
}
