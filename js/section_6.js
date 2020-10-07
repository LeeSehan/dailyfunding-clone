const BTN_1 = $("#section_6 .graphBox__right .question_wrap .wrap .btn_1");
const BTN_2 = $("#section_6 .graphBox__right .question_wrap .wrap .btn_2");
const BTN_3 = $("#section_6 .graphBox__right .question_wrap .wrap .btn_3");
const TXT_1 = $("#section_6 .question_wrap .wrap .question_txt_1");
const TXT_2 = $("#section_6 .question_wrap .wrap .question_txt_2");
const TXT_3 = $("#section_6 .question_wrap .wrap .question_txt_3");
const FONT_1 = $("#section_6 .question_wrap .wrap .qw .qf_1");
const FONT_2 = $("#section_6 .question_wrap .wrap .qw .qf_2");
const FONT_3 = $("#section_6 .question_wrap .wrap .qw .qf_3");

let clicks = 0;

$(TXT_1).hide();
$(TXT_2).hide();
$(TXT_3).hide();

$(BTN_1).on("click", function () {
  if (clicks === 0) {
    $(this).css("background", "url(img/bt_arrow_up_black.svg)");
    $(BTN_2).css("background", "url(img/bt_arrow_down_black.svg)");
    $(BTN_3).css("background", "url(img/bt_arrow_down_black.svg)");
    $(FONT_1).css("font-weight", "900");
    $(FONT_2).css("font-weight", "400");
    $(FONT_3).css("font-weight", "400");
    $(TXT_1).slideDown(500);
    $(TXT_2).slideUp(500);
    $(TXT_3).slideUp(500);
    clicks++;
  } else {
    $(this).css("background", "url(img/bt_arrow_down_black.svg)");
    $(FONT_1).css("font-weight", "400");
    $(TXT_1).slideUp(500);
    clicks--;
  }
});

$(BTN_2).on("click", function () {
  if (clicks === 0) {
    $(this).css("background", "url(img/bt_arrow_up_black.svg)");
    $(BTN_1).css("background", "url(img/bt_arrow_down_black.svg)");
    $(BTN_3).css("background", "url(img/bt_arrow_down_black.svg)");
    $(FONT_2).css("font-weight", "900");
    $(FONT_1).css("font-weight", "400");
    $(FONT_3).css("font-weight", "400");
    $(TXT_2).slideDown(500);
    $(TXT_1).slideUp(500);
    $(TXT_3).slideUp(500);
    clicks++;
  } else {
    $(this).css("background", "url(img/bt_arrow_down_black.svg)");
    $(FONT_2).css("font-weight", "400");
    $(TXT_2).slideUp(500);
    clicks--;
  }
});

$(BTN_3).on("click", function () {
  if (clicks === 0) {
    $(this).css("background", "url(img/bt_arrow_up_black.svg)");
    $(BTN_1).css("background", "url(img/bt_arrow_down_black.svg)");
    $(BTN_2).css("background", "url(img/bt_arrow_down_black.svg)");
    $(FONT_3).css("font-weight", "900");
    $(FONT_1).css("font-weight", "400");
    $(FONT_2).css("font-weight", "400");
    $(TXT_3).slideDown(500);
    $(TXT_1).slideUp(500);
    $(TXT_2).slideUp(500);
    clicks++;
  } else {
    $(this).css("background", "url(img/bt_arrow_down_black.svg)");
    $(FONT_3).css("font-weight", "400");
    $(TXT_3).slideUp(500);
    clicks--;
  }
});
