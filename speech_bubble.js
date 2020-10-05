let dropdown_1 = $(".dropdown_1").val();
let dropdown_2 = $(".dropdown_2").val();

function speech_bubble() {
  if (dropdown_1 == "0" || dropdown_2 == "0") {
    $(".m_amount").text("0");
  } else {
    let result = ((dropdown_1 * 16) / 100 / 12) * dropdown_2;
    let result1 = ((dropdown_1 * 2.1) / 100 / 12) * dropdown_2;
    let result2 = ((dropdown_1 * 13.17) / 100 / 12) * dropdown_2;
    let result3 = ((dropdown_1 * 16) / 100 / 12) * dropdown_2;
    let result4 = ((dropdown_1 * 6.4) / 100 / 12) * dropdown_2;
    let result5 = ((dropdown_1 * 2.22) / 100 / 12) * dropdown_2;

    result = comma(result);
    $("#m_amount").text(result);

    result1 = price_cutting(1, result1);
    result2 = price_cutting(2, result2);
    result3 = price_cutting(3, result3);
    result4 = price_cutting(4, result4);
    result5 = price_cutting(5, result5);

    $("#price1").text(result1);
    $("#price2").text(result2);
    $("#price3").text(result3);
    $("#price4").text(result4);
    $("#price5").text(result5);

    move();
  }
}

function price_cutting(index, num) {
  if (num < 10000) {
    if (index == 3) {
      num = comma(Math.floor(num / 100) * 100) + "원";
    } else {
      num = comma(Math.round(num / 100) * 100) + "원";
    }
  } else {
    if (index == 3) {
      num = comma(Math.floor(num / 10000)) + "만원";
    } else {
      num = comma(Math.round(num / 10000)) + "만원";
    }
  }
  return num;
}

function comma(num) {
  var len, point, str;

  num = num + "";
  point = num.length % 3;
  len = num.length;

  str = num.substring(0, point);
  while (point < len) {
    if (str != "") str += ",";
    str += num.substring(point, point + 3);
    point += 3;
  }

  return str;
}

speech_bubble();
