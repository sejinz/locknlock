var devWidth;
var limitsize = 768;

window.onload = function(){
// 주메뉴 
var gnbmenu = document.querySelectorAll('.gnb>ul>li');
var gnbmenu_under = document.querySelectorAll('.gnb>ul>li>div');
var headerwrap = document.querySelector(".header_wrap");

// 마우스 over 
for(var i=0; i<gnbmenu.length; i++){
    gnbmenu[i].addEventListener ('mouseover',function(){
        this.className += 'on';
        var ht = this.children[1].offsetHeight;
        headerwrap.style.height = 64 + ht + 'px';
        for(var i=0; i<gnbmenu.length; i++){
            gnbmenu[i].children[1].style.display = "none"
        }
        this.children[1].style.display = "block";
    });

    // 마우스 out 
    gnbmenu[i].addEventListener('mouseout', function(){
        this.classList.remove('on');
        headerwrap.style.height = '64px'
        this.children[1].style.display = "none";
    });
}
// 배너 변수 입력
var btnnext = document.querySelector('.slide_one'); 
var btnprev = document.querySelector('.slide_two');
var btnlast = document.querySelector('.slide_thr');
var slide = document.querySelectorAll('.slide');
var slideroll = document.querySelectorAll('.slide_roll li');

var bnnnum=0;
var lastnum = document.querySelectorAll('.slide_wrap > li').length -1;


// next 버튼 
btnnext.addEventListener('click', function(){
    bnnnum++;
    if(bnnnum>=1){bnnnum=0};

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideroll[bnnnum].classList.add('on');
});

//prev 버튼
btnprev.addEventListener("click", function(){
    bnnnum++;
    if(bnnnum >= 1) {bnnnum=1};


    slide.forEach(function(item){ 
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on')
    });
    slideroll[bnnnum].classList.add('on');
});


//last 버튼
btnlast.addEventListener("click", function(){
    bnnnum--;
    if(bnnnum <= 1) bnnnum = lastnum;

    slide.forEach(function(item){ 
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on')
    });
    slideroll[bnnnum].classList.add('on');
});


// 오토배너 
function autobanner(){
    bnnnum++;
    if(bnnnum>lastnum){bnnnum=0;}

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideroll[bnnnum].classList.add('on');
}
var autobnn = setInterval(autobanner,6000);



// 검색박스 
var srchbtn = document.querySelector('.btn_srch');
var srchclosebtn = document.querySelector('.btn_srch_close');
var srchwrap = document.querySelector('.srch_wrap');

// 검색박스 열기 
srchbtn.addEventListener("click" , function(){
    srchwrap.className += ' on';
});
// 검색박스 닫기 
srchclosebtn.addEventListener("click" , function(){
    srchwrap.classList.remove('on');
});

// TOP KOR 박스 
var kor = document.querySelector('.top_menu > li:nth-child(2)');
var eng = document.querySelector('.top_menu > li:nth-child(2) > ul');

kor.addEventListener('click', function(){
    this.classList.toggle("on");
});

//패밀리 사이트 
var famsite = document.querySelector(".familysite > ul > li");
var sitelist = document.querySelector(".familysite > ul > li > ul");

famsite.addEventListener('click', function(){
    this.classList.toggle("on");
});

///////lounge 변수

var slides = document.querySelector('.content3_inner ul'); //전체 슬라이드 컨테이너 
var slideImg = document.querySelectorAll('.lounge_slide'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
var slideCount = slideImg.length; // 슬라이드 개수
var bar = document.querySelector('bar_slide');

var lo_btnnext = document.querySelector(".next");
var lo_btnprev = document.querySelector(".prev");

var slideWidth = 10; //한개의 슬라이드 넓이 
var slideMargin = 10; //슬라이드간의 margin 값

// 넥스트 버튼 누르면 바가 길어짐 
// lo_btnnext.addEventListener('click', function(){
//     bnnnum++;
//     if(bnnnum>lastnum){bnnnum=0;}
//     slides.forEach(function(item){
//         item.classList.remove('active');
//     });
//     slides[bnnnum].classList.add('active');

//     slideImg.forEach(function(idx){
//         idx.classList.remove('on');
//     });
//     slideImg[bnnnum].classList.add('on');
// });


//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
     slides.style.left = -num * 1020 + 'px'; 
    //  위 숫자가 넘겨지는 너비를 나타냄 
     currentIdx = num; 
    }

lo_btnprev.addEventListener('click', function (e) { /*첫 번째 슬라이드로 표시 됐을때는 이전 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==0일때만 moveSlide 함수 불러옴 */ 
e.preventDefault();
if (currentIdx !== 0) moveSlide(currentIdx - 1); 

}); 

lo_btnnext.addEventListener('click', function (e) { /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */ 
e.preventDefault();
if (currentIdx !== slideCount - 1) { moveSlide(currentIdx + 1); } 

});

// 락앤락몰 
var btntop = document.querySelector('.btn_top');

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('html').scrollTop;
    console.log(scroll);

    if(scroll <= 0){
        btntop.classList.remove("on","ab");
    }else if(scroll > 0 && scroll < 2700){
        btntop.classList.remove("ab");
        btntop.classList.add("on");
    }else{
        btntop.classList.add("ab");
    }

    // 마우스 값 대로 올라가기 
    var lnl = document.querySelector(".btn_mall");
    lnl.style.top =760+scroll*0.01+ "px";
});

// 탑버튼 
var btntop = document.querySelector('.btn_top');
btntop.addEventListener('click', function(e){
    e.preventDefault();
    window.scroll({
        top:0,
        left: 0,
        behavior: 'smooth'
        });
    });

        //햄버거 버튼 클릭
        var mobbtn = document.querySelector('.mobbtn'); //햄버거 버튼 
        var mobclose = document.querySelector('.mobbtn_close'); // 닫기 버튼
        var mob = document.querySelector(".gnb") // 주메뉴 
        var body = document.querySelector("body"); // 바디 
        var srchopen = document.querySelector(".btn_srch")
        var formsrch = document.querySelector(".srch_wrap")

        mobbtn.addEventListener("click", function () {
            mob.classList.add("on");
            mobclose.classList.add("on");
            body.classList.add("on");
            bg.classList.add("on");
            mobbtn.style.display = "none";
            mobclose.style.display = "none";
        });
 // 메뉴 닫기 
 mobclose.addEventListener("click", function () {
    mob.classList.remove("on");
    mobclose.classList.remove("on");
    body.classList.remove("on");
    bg.classList.remove("on");
    mobbtn.style.display = "block";
});        

//검색버튼
srchopen.addEventListener("click", function(){
    this.classList.toggle("on");
})

// footer 메뉴 





}













