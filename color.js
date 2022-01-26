//a태그의 색을 변경해주는 함수를 포함하는 객체
var Link={
    setColor:function(color){
        var alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
            alist[i].style.color=color;
            i++;
        }
    }
}

//body 태그의 속성 변경
var Body={
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    },
    setColor:function(color){
        document.querySelector('body').style.color=color;
    }
}

//메인 함수 (버튼에 따른 속성 변화)
function Change(self){
    if(self.value==='night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Link.setColor('skyblue');
        self.value='day';
    }else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Link.setColor('blue');;
        self.value='night';
    }
}