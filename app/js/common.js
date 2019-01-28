$(function() {
  
// //---------------------------js-----------------------
// $('.tabs__wrap').hide();
// $('.tabs__wrap:first').show();
// $('.tabs ul a:first').addClass('active');
//  $('.tabs ul a').click(function(event){
//   event.preventDefault();
//   $('.tabs ul a').removeClass('active');
//   $(this).addClass('active');
//   $('.tabs__wrap').hide();
//    var selectTab = $(this).attr('href');
//   $(selectTab).fadeIn();
// });

//--------------------------------------scroll------------------------------
  $('.chat__content').jScrollPane();

//-------------------------------активна ссилка профіль---------------------------------------
  $('.profile--nav ul li a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('profile--nav__link');
      }
  });

//-------------------------------активна ссилкаю меню---------------------------------------
  $('.nav ul li a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('link--active');
      }
  });

//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  $(".active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".active .block__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .block__content").slideDown("slow");
    }
  });



//------------------------------slider-----------------------------
  var swiper = new Swiper('.step__slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
      el: '.step__pagination',
    },
    navigation: {
      nextEl: '.step__next',
      prevEl: '.step__prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      776: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 3,
      }
    }
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  });


});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

//--------------------------------------scroll------------------------------

  $(window).resize(function(event) {
    $('.chat__content').jScrollPane();
  });


  // $( function() {
  //   // назви відповідають логіці
  //   // перше слово назва блоку
  //   // date - кількість днів
  //   // price - кількість грошей
  //   // min- мінімальне значення
  //   // max- максимальне значення

  //   //------------------------------------------данні в переміних-------------------------

  //     //--------------------------------------calculator-beginner-----------------------------
  //       var beginner__date_min = 0;
  //       $( "#beginner__date_min" ).text(beginner__date_min);

  //       var beginner__date_max = 1;
  //       $( "#beginner__date_max" ).text(beginner__date_max + " дней");

  //       var beginner__price_min = 100;
  //       $( "#beginner__price_min" ).text(beginner__price_min);

  //       var beginner__price_max = 500;
  //       $( "#beginner__price_max" ).text(beginner__price_max + " тенге");

  //     //--------------------------------------calculator-basic-----------------------------
  //       var basic__date_min = 1;
  //       $( "#basic__date_min" ).text(basic__date_min);

  //       var basic__date_max = 31;
  //       $( "#basic__date_max" ).text(basic__date_max + " дней");

  //       var basic__price_min = 1000;
  //       $( "#basic__price_min" ).text(basic__price_min);

  //       var basic__price_max = 5000;
  //       $( "#basic__price_max" ).text(basic__price_max + " тенге");

  //     //--------------------------------------calculator-experience-----------------------------
  //       var experience__date_min = 1;
  //       $( "#experience__date_min" ).text(experience__date_min);

  //       var experience__date_max = 31;
  //       $( "#experience__date_max" ).text(experience__date_max + " дней");

  //       var experience__price_min = 10000;
  //       $( "#experience__price_min" ).text(experience__price_min);

  //       var experience__price_max = 25000;
  //       $( "#experience__price_max" ).text(experience__price_max + " тенге");

  //     //--------------------------------------calculator-partner-----------------------------
  //       var partner__date_min = 1;
  //       $( "#partner__date_min" ).text(partner__date_min);

  //       var partner__date_max = 31;
  //       $( "#partner__date_max" ).text(partner__date_max + " дней");

  //       var partner__price_min = 50000;
  //       $( "#partner__price_min" ).text(partner__price_min);

  //       var partner__price_max = 250000;
  //       $( "#partner__price_max" ).text(partner__price_max + " тенге");   

  //     //--------------------------------------calculator-owner-----------------------------
  //       var owner__date_min = 0;
  //       $( "#owner__date_min" ).text(owner__date_min);

  //       var owner__date_max = 1;
  //       $( "#owner__date_max" ).text(owner__date_max + " дней");

  //       var owner__price_min = 1000000;
  //       $( "#owner__price_min" ).text(owner__price_min);

  //       var owner__price_max = 10000000;
  //       $( "#owner__price_max" ).text(owner__price_max + " тенге");


  //   //------------------------------------------калькулятори беруть данні з переміних-------------------------

  //     //--------------------------------------calculator-beginner-----------------------------
  //       //   var beginner = $( "#beginner--date-custom" );

  //       //   $( "#beginner--date" ).slider({
  //         // range: "min",
  //         // value: 0,
  //         // min: beginner__date_min,
  //         // max: beginner__date_max,
  //       //     create: function() {
  //       //       beginner.text( $( this ).slider( "value" ) );
  //       //     },
  //       //     slide: function( event, ui ) {
  //       //       beginner.text( ui.value );
  //       //       $( "#beginner--percent" ).val( ui.value * 100 + "%");
  //       //     }
  //       //   });
  //       //   $( "#beginner--percent" ).val( 0 + "%"  );

  //       //------------------------------------
  //       var beginnerprice = $( "#beginner--price" );
  //         $( "#beginner--custom-price" ).slider({
  //         range: "min",
  //         value: 0,
  //         min: beginner__price_min,
  //         max: beginner__price_max,
  //         create: function() {
  //               beginnerprice.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //               beginnerprice.text( ui.value );
  //             }
  //         });


  //     //--------------------------------------calculator-basic-----------------------------
  //         var basic = $( "#basic--date-custom" );
  //         $( "#basic--date" ).slider({
  //         range: "min",
  //         value: 0,
  //         min: basic__date_min,
  //         max: basic__date_max,
  //           create: function() {
  //             basic.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //             basic.text( ui.value );
  //             $( "#basic--percent" ).val( ui.value * 3 + 7 + "%");
  //           }
  //         });
  //         $( "#basic--percent" ).val( 10 + "%"  );

  //       //------------------------------------
  //       var basicprice = $( "#basic--price" );
  //         $( "#basic--custom-price" ).slider({
  //         range: "min",
  //         value: 0,
  //         min: basic__price_min,
  //         max: basic__price_max,
  //         create: function() {
  //               basicprice.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //               basicprice.text( ui.value );
  //             }
  //         });


  //     //--------------------------------------calculator-experience-----------------------------
  //         var experience = $( "#experience--date-custom" );
  //         $( "#experience--date" ).slider({
  //         range: "min",
  //         value: 1,
  //         min: experience__date_min,
  //         max: experience__date_max,
  //           create: function() {
  //             experience.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //             experience.text( ui.value );
  //             $( "#experience--percent" ).val( ui.value * 3 + 7 + "%");
  //           }
  //         });
  //         $( "#experience--percent" ).val( 10 + "%" );

  //       //------------------------------------
  //       var experienceprice = $( "#experience--price" );
  //         $( "#experience--custom-price" ).slider({
  //         range: "min",
  //         value: 1,
  //         min: experience__price_min,
  //         max: experience__price_max,
  //         create: function() {
  //               experienceprice.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //               experienceprice.text( ui.value );
  //             }
  //         });


  //     //--------------------------------------calculator-partner-----------------------------
  //         var partner = $( "#partner--date-custom" );
  //         $( "#partner--date" ).slider({
  //         range: "min",
  //         value: 0,
  //         min: partner__date_min,
  //         max: partner__date_max,
  //           create: function() {
  //             partner.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //             partner.text( ui.value );
  //             $( "#partner--percent" ).val( ui.value * 3 + 7 + "%" );
  //           }
  //         });
  //         $( "#partner--percent" ).val( 10 + "%" );

  //       //------------------------------------
  //       var partnerprice = $( "#partner--price" );
  //         $( "#partner--custom-price" ).slider({
  //         range: "min",
  //         value: 0,
  //         min: partner__price_min,
  //         max: partner__price_max,
  //         create: function() {
  //               partnerprice.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //               partnerprice.text( ui.value );
  //             }
  //         });


  //     //--------------------------------------calculator-owner-----------------------------
  //         //     var owner = $( "#owner--date-custom" );
  //         //   $( "#owner--date" ).slider({
  //           // range: "min",
  //           // value: 0,
  //           // min: 0,
  //           // max: 1,
  //         //     create: function() {
  //         //       owner.text( $( this ).slider( "value" ) );
  //         //     },
  //         //     slide: function( event, ui ) {
  //         //       owner.text( ui.value );
  //         //       $( "#owner--percent" ).val( ui.value * 100 + "%");
  //         //     }
  //         //   });
  //         //   $( "#owner--percent" ).val( 0 + "%"  );

  //       var ownerprice = $( "#owner--price" );
  //         $( "#owner--custom-price" ).slider({
  //         range: "min",
  //         value: 0,
  //         min: 1000000,
  //         max: 10000000,
  //         create: function() {
  //               ownerprice.text( $( this ).slider( "value" ) );
  //           },
  //           slide: function( event, ui ) {
  //               ownerprice.text( ui.value );
  //             }
  //         });

  //   } );

  // 