$(document).ready(function(){

  // 메인이미지 슬라이드
  const slides = $('.slide');
  let timer;
  let indexNum = 0;
  const indi = $('#indi');
  let inHtml = '';

  slides.each(function(i){
    inHtml = inHtml + `<a href="#">${i+1}</a>`;
  });
  indi.html(inHtml);
  
  slides.hide();
  slides.eq(indexNum).fadeIn(800);

  indi.children('a').on('click',function(e){
    e.preventDefault();
    showSlide($(this).index());
  });

  function startSlide(){
    timer = setInterval(function(){
      let nextSlide = (indexNum+1) % 3;
      showSlide(nextSlide);
    },5000);
  };
  function showSlide(slideIndex){
    slides.fadeOut(500);
    slides.eq(slideIndex).fadeIn(500);
    indexNum = slideIndex;
    indi.children('a').removeClass('on');
    indi.children('a').eq(slideIndex).addClass('on');
  };
  startSlide();
  
  $('#nav a').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){
      if(indexNum==0) {
        showslide(2);
      }
      else {
        showSlide(indexNum-1);
      }
    }
    else {
      if(indexNum==2) {
        showSlide(0);
      }
      else {
        showSlide(indexNum+1);
      }
    }
  });

  //스크롤 내리면 헤더에 클래스 on
  $(window).on('scroll',function(){
    let sct = $(this).scrollTop();
    let headH = $('header').height();
    if(sct>=headH) {
      $('header').addClass('on');
    }
    else {
      $('header').removeClass('on');
    }
  });

  //헤더에 마우스 올리면 클래스 on
  $('header').on('mouseenter',function(){
    $(this).addClass('on');
  });
  $('header').on('mouseleave',function(){
    $(this).removeClass('on');
  });


  //.menu1 li ul에 마우스 올리면 컬러 변경
  $('.menu1>ul>li').on('mouseenter',function(){
    $('.bg').addClass('on');
    $(this).addClass('on');
  });
  $('.menu1>ul>li').on('mouseleave',function(){
    $('.bg').removeClass('on');
    $(this).removeClass('on');
  });
  $('.menu1 li ul').on('mouseenter',function(){
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
  });
  $('.menu1 li ul').on('mouseleave',function(){
    $(this).removeClass('on');
  });


  // 스크롤 내리면 각 섹션에 클래스 on
  $(window).on('scroll',function(){
    let sct = $(this).scrollTop();
    let sec3Top = $('#vendome').offset().top;
    let sec4Top = $('#history').offset().top;
    let sec5Top = $('#ring').offset().top;
    // console.log(sec3Top);
    // console.log($(this).scrollTop());
    if(sct>sec3Top-750) {
      $('#vendome').addClass('on');
    }
    // console.log(sec4Top);
    // console.log($(this).scrollTop());
    if(sct>sec4Top-750) {
      $('#history').addClass('on');
    }
    // console.log(sectionTop);
    // console.log($(this).scrollTop());
    if(sct>sec5Top-750) {
      $('#ring').addClass('on');
    }
  });


  //section-product의 대메뉴 클릭하면 서브메뉴 나타나도록
  $('.product_menu').click(function(e){
    e.preventDefault();
    let tar = e.target.innerHTML;
    if(tar == '주얼리' ||  tar == '시계' ||  tar == '브라이덜' ||  tar == '하이 주얼리'){
      $(this).siblings('.product_menu').children('ul').slideUp(500);
      $(this).children('ul').slideToggle(500);
    }
  });

  //footer language span 클릭하면 drop menu slidedown
  $('.language span').click(function(){
    $('.drop').toggle();
  });

  //.togglebar클릭하면 .mobile_submenu 나타나도록
  $('.togglebar').click(function(){
    $('.mobile_submenu').toggleClass('on');
    $(this).toggleClass('on');
  });

  //mobile_submenu의 대메뉴 클릭하면 서브메뉴 나타나도록
  $('.mobile_submenu>ul>li').click(function(e){
    e.preventDefault();
    $(this).siblings('.mobile_submenu>ul>li').children('ul').slideUp(500);
    $(this).children('ul').slideDown(500);
  });

});