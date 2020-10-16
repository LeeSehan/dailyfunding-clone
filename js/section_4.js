const IMG_IC = $("#section_4 .graphBox__left .img_ic");
const IMG_IC_HELP = $("#section_4 .graphBox__left .img_help");

const GRAPH_BOX = $("#section_4 .inner .graphBox");
const BAR_1 = $("#section_4 .inner .graphBox__left .column_2 li .bar_1");
const BAR_2 = $("#section_4 .inner .graphBox__left .column_2 li .bar_2");
const BAR_3 = $("#section_4 .inner .graphBox__left .column_2 li .bar_3");
const VAL = $("#section_4 .inner .graphBox__left .column_2 li .val");

$(IMG_IC_HELP).hide();

$(IMG_IC).hover(
  function () {
    $(IMG_IC_HELP).show();
  },
  function () {
    $(IMG_IC_HELP).hide();
  }
);

$(window).scroll(function () {
  let windowH = $(window).height(); // window 높이를 가져온다.
  let st = $(this).scrollTop(); // 현재 스크롤 위치

  $(GRAPH_BOX).each(function () {
    let boxPosition = $(this).offset().top; // 선택한 graphBox_right의 위쪽 좌표를 가져온다.
    // if- RIGHT_BOX의 윗부분이 나타나면 실행
    if (st > boxPosition - windowH) {
      $(BAR_1).addClass("bar-effect_1").css("background-color", "#30a3f4");
      $(BAR_2).addClass("bar-effect_2").css("background-color", "#E8EAEF");
      $(BAR_3).addClass("bar-effect_3").css("background-color", "#E8EAEF");
      $(VAL).addClass("val-effect");
    }
  });
});
