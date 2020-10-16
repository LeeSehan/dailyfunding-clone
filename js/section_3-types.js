const BT_1 = $("#section_3 .inner .graphBox__right .graph_types .bt_1_stabletype");
const BT_2 = $("#section_3 .inner .graphBox__right .graph_types .bt_2_balancetype");
const BT_3 = $("#section_3 .inner .graphBox__right .graph_types .bt_3_profittype");

const MOBILE_BT_1 = $("#section_3 .inner .graphBox__right .mobile_graph_types .bt_1_stabletype");
const MOBILE_BT_2 = $("#section_3 .inner .graphBox__right .mobile_graph_types .bt_2_balancetype");
const MOBILE_BT_3 = $("#section_3 .inner .graphBox__right .mobile_graph_types .bt_3_profittype");

const IMG_STABLE = $(".img_graph_stable");
const IMG_BALANCE = $(".img_graph_balance");
const IMG_PROFIT = $(".img_graph_profit");

// 기본값
$(BT_1).css("background", "url(img/bt_1_stabletype_hover.png)");
$(IMG_STABLE).show();
$(IMG_BALANCE).hide();
$(IMG_PROFIT).hide();

$(BT_1).hover(function () {
  $(this).css("background", "url(img/bt_1_stabletype_hover.png)");
  $(BT_2).css("background", "url(img/bt_2_balancetype.png)");
  $(BT_3).css("background", "url(img/bt_3_profittype.png)");
  $(IMG_STABLE).show();
  $(IMG_BALANCE).hide();
  $(IMG_PROFIT).hide();
});

$(BT_2).hover(function () {
  $(this).css("background", "url(img/bt_2_balancetype_hover.png)");
  $(BT_1).css("background", "url(img/bt_1_stabletype.png)");
  $(BT_3).css("background", "url(img/bt_3_profittype.png)");
  $(IMG_STABLE).hide();
  $(IMG_BALANCE).show();
  $(IMG_PROFIT).hide();
});

$(BT_3).hover(function () {
  $(this).css("background", "url(img/bt_3_profittype_hover.png)");
  $(BT_1).css("background", "url(img/bt_1_stabletype.png)");
  $(BT_2).css("background", "url(img/bt_2_balancetype.png)");
  $(IMG_STABLE).hide();
  $(IMG_BALANCE).hide();
  $(IMG_PROFIT).show();
});

// mobile
$(MOBILE_BT_1).css("background-color", "#198bfb").css("color", "#fff");
$(MOBILE_BT_2).css("background-color", "#E8EAEF").css("color", "#000000");
$(MOBILE_BT_3).css("background-color", "#E8EAEF").css("color", "#000000");

$(MOBILE_BT_1).hover(function () {
  $(this).css("background-color", "#198bfb").css("color", "#fff");
  $(MOBILE_BT_2).css("background-color", "#E8EAEF").css("color", "#000000");
  $(MOBILE_BT_3).css("background-color", "#E8EAEF").css("color", "#000000");
  $(IMG_STABLE).show();
  $(IMG_BALANCE).hide();
  $(IMG_PROFIT).hide();
});

$(MOBILE_BT_2).hover(function () {
  $(this).css("background-color", "#198bfb").css("color", "#fff");
  $(MOBILE_BT_1).css("background-color", "#E8EAEF").css("color", "#000000");
  $(MOBILE_BT_3).css("background-color", "#E8EAEF").css("color", "#000000");
  $(IMG_STABLE).hide();
  $(IMG_BALANCE).show();
  $(IMG_PROFIT).hide();
});

$(MOBILE_BT_3).hover(function () {
  $(this).css("background-color", "#198bfb").css("color", "#fff");
  $(MOBILE_BT_1).css("background-color", "#E8EAEF").css("color", "#000000");
  $(MOBILE_BT_2).css("background-color", "#E8EAEF").css("color", "#000000");
  $(IMG_STABLE).hide();
  $(IMG_BALANCE).hide();
  $(IMG_PROFIT).show();
});