$(function(){
  //カルーセル
  $('.carousel').slick({
    autoplay:true,
    dots: true,
    speed:1000,
    autoplaySpeed:4000,
    fade: true,
  });

  //ホバー時の不透明度アニメーション
  $('a').on('mouseover' , function(){
    $(this).animate({
      opacity:0.5,
    }, 100);
  });

  $('a').on('mouseout' , function(){
    $(this).animate({
      opacity:1.0,
    }, 100);
  });

  //TOPボタン
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('#pagetop').fadeIn();
    } else {
      $('#pagetop').fadeOut();
    }
  });

  //リンクをクリックしたときなめらかにスクロール
  $('a[href^="#"]').click(function(){
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#'){
      $target = $(html);
    }
    else{
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({'scrollTop' : position}, speed, 'swing');
    return false;
  });

  //セクションをフェードイン
  $(window).scroll(function(){
    $('section').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if(scroll > position - windowHeight + 200){
        $(this).addClass('fade-in');
      }
    });
  });

  //モーダル
  $('.works-img').click(function(){
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false;
  });

  $('.close-btn').click(function(){
    $('.modal').fadeOut();
  });

});