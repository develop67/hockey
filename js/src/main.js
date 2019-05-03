jQuery(document).ready(function ($) {
  $(window).scroll(function() {
    if (90 < $(document).scrollTop()) {
      $(".animated-full").addClass("animated-full_active");
      $(".animated-small").addClass("animated-small_active");
      $(".header").addClass("header_scroll");
    } else {
      $(".animated-full").removeClass("animated-full_active");
      $(".animated-small").removeClass("animated-small_active");
      $(".header").removeClass("header_scroll");
    }
  });

  /*$(".main-video-tabs ul.tabs__caption").on("click", "li:not(.active)", function() {
    $(this).addClass("active").siblings().removeClass("active").closest("div.main-video-tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
  });*/

  $(".tabs__content").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
