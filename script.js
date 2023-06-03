window.onload = function () {
    const text = "안녕하세요 :)";
    const text2 = "빅데이터 전문가를 꿈꾸고 있는 김주현입니다.";
    let index = 0;
  
    function typeText() {
      const typingTextElement = document.getElementById("typing-text");
      let currentText = "";
  
      if (index < text.length) {
        currentText = text.slice(0, index + 1);
      } else {
        currentText = text + "<br>" + text2.slice(0, index - text.length + 1);
      }
  
      typingTextElement.innerHTML = currentText;
      index++;
  
      if (index < text.length + text2.length + 1) {
        setTimeout(typeText, 100);
      }
    }
  
    typeText();
  };
   
  $(document).ready(function() {
    $('.section').hide(); // 모든 섹션 숨김 처리
    $('#home').show(); // #home 섹션만 보이도록 설정
  
    $('.nav li a').click(function() {
      var sectionId = $(this).data('section');
      $('.section').hide();
      $('#' + sectionId).show();
    });
  });
  