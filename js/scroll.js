const LOGO_1 = $(".logo_1");
const LOGO_2 = $(".logo_2");
const BTN_DOWN_1 = $("#section_1_mobile .bg_text .btn_wrap a .btn_download_1");
const BTN_DOWN_2 = $("#section_1_mobile .bg_text .btn_wrap a .btn_download_2");
const BTN_COLOR = $("#section_1_mobile .bg_text .btn_wrap a");

let lastScroll = 0;
let headerHeight = $(".header_wrap").outerHeight(); // 영향을 받을 요소. header의 전체 높이 (margin, border, padding, height의 값을 모두 더한 값)

// 스크롤 했을 때 동작을 알림
$(window).scroll(function (event) {
  let st = $(this).scrollTop(); // 현재 스크롤 위치

  if (st == 0) {
    $(LOGO_1).show();
    $(LOGO_2).hide();
    $(".header_wrap").css("background-color", "transparent");
    $(BTN_DOWN_1).show();
    $(BTN_DOWN_2).removeClass("btnShow").addClass("btnHide");
    $(BTN_COLOR).css("background-color", "transparent").css("box-shadow", "0 0 0")
  } else{
    $(BTN_DOWN_1).hide();
    $(BTN_DOWN_2).removeClass("btnHide").addClass("btnShow");
    $(BTN_COLOR).css("background-color", "white").css("box-shadow", "0px 0px 15px rgba(0, 0, 0, 0.15)")
  }

   if (st > lastScroll && st > headerHeight) {
    $(".header_wrap").removeClass("header-down").addClass("header-up");
    $(LOGO_1).hide();
    $(LOGO_2).show();
    $(".header_wrap").css("background-color", "#22272e");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $(".header_wrap").removeClass("header-up").addClass("header-down");
    }
  }

  lastScroll = st;
});
