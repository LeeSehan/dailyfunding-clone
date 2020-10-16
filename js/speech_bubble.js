let SPEECH_BOX = $(".graphBox__right");

$(window).scroll(function () {
  let windowH = $(window).height(); // window 높이를 가져온다.
  let st = $(this).scrollTop(); // 현재 스크롤 위치

  $(SPEECH_BOX).each(function () {
    let elPosition = $(this).offset().top; // 선택한 graphBox_right의 위쪽 좌표를 가져온다.
    // if- graphBox__right의 윗부분이 나타나면 실행
    if (st > elPosition - windowH) {
      $(this).addClass("box-effect");
    }
  });
});

$("#section_2 select").change( function bubbleVal() {
  let dropdown_1 = $(".graphBox__right .dropdown_1").val();
  let dropdown_2 = $(".graphBox__right .dropdown_2").val();
  
  if (dropdown_1 == "0" || dropdown_2 == "0") {
    $(".m_amount").text("0");
  } else {
    let result = ((dropdown_1 * 16) / 100 / 12) * dropdown_2;
    result = comma(result);
    $(".m_amount").text(result);
    console.log($(".m_amount"));
  }
});

$("#section_2_mobile select").change( function bubbleVal() {
  let dropdown_1 = $(".graphBox__right .mobile_drop_1").val();
  let dropdown_2 = $(".graphBox__right .mobile_drop_2").val();
  
  if (dropdown_1 == "0" || dropdown_2 == "0") {
    $(".mobile_amount").text("0");
  } else {
    let result = ((dropdown_1 * 16) / 100 / 12) * dropdown_2;
    result = comma(result);
    $(".mobile_amount").text(result);
    console.log($(".mobile_amount"));
  }
});

function comma(num){
  let len, point, str;
  
  num = String(num); // 숫자를 문자열로 변환
  len = num.length;
  point = len % 3;

  str = num.substring(0, point);
  while (point < len) {
      if (str != "") str += ",";
      str += num.substring(point, point + 3);
      point += 3;
  }
  return str;
}
