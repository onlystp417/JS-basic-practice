//[ switch 練習題 1 ] 60 分以上及格，不滿 60 分不及格。

var score = prompt('輸入你的分數：');
var record;

if (score >= 60 && score <= 100) {
  record = 1;
} else if (score > 100 || isNaN(score)) {
  record = 3;
} else {
  record = 2;
}

switch (record) {
  case (1):
    alert('合格');
    break;
  case (2):
    alert('不合格');
    break;
  default:
    alert('請重新輸入');
    break;
}

switch (true) {
  case (score >= 60 && score <= 100):
    alert('合格');
    break;
  case (score >= 0 && score < 60):
    alert('不合格');
  default:
    alert('輸入錯誤');
}


// [ switch 練習題 2 ] 輸入 1-7 會印出相對印的星期數。
var day = +prompt('請輸入 1-7 任一數字：');

switch (day) {
  case (1):
    alert('星期一');
    break;
  case (2):
    alert('星期二');
    break;
  case (3):
    alert('星期三');
    break;
  case (4):
    alert('星期四');
    break;
  case (5):
    alert('星期五');
    break;
  case (6):
    alert('星期六');
    break;
  case (7):
    alert('星期日');
    break;
  default:
    alert('你輸入錯誤');
}
