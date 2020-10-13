const LOGO_1 = $(".logo_1");
const LOGO_2 = $(".logo_2");
const BTN_DOWN_1 = $("#section_1_mobile .bg_text .btn_wrap a .btn_download_1");
const BTN_DOWN_2 = $("#section_1_mobile .bg_text .btn_wrap a .btn_download_2");
const BTN_COLOR = $("#section_1_mobile .bg_text .btn_wrap a");

let didScroll;
let lastScrollTop = 0;
let delta = 0.1;
let headerWrap = $(".header_wrap").outerHeight();
// 스크롤한 것을 알림
$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop(); // 현재 스크롤 위치

  if (st == 0) {
    $(LOGO_1).show();
    $(LOGO_2).hide();
    $(".header_wrap").css("background-color", "transparent");
    $(BTN_DOWN_1).removeClass("btnHide").addClass("btnShow");
    $(BTN_DOWN_2).removeClass("btnShow").addClass("btnHide");
    $(BTN_COLOR).css("background-color", "transparent").css("box-shadow", "0 0 0")
  } else{
    $(BTN_DOWN_1).removeClass("btnShow").addClass("btnHide");
    $(BTN_DOWN_2).removeClass("btnHide").addClass("btnShow");
    $(BTN_COLOR).css("background-color", "white").css("box-shadow", "0px 0px 15px rgba(0, 0, 0, 0.15)")
  }

  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  if (st > lastScrollTop && st > headerWrap) {
    $(".header_wrap").removeClass("header-down").addClass("header-up");
    $(LOGO_1).hide();
    $(LOGO_2).show();
    $(".header_wrap").css("background-color", "#22272e");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $(".header_wrap").removeClass("header-up").addClass("header-down");
    }
  }

  lastScrollTop = st;
}
