// 1. if 語句

var a = 9;
if (a > 10 && a < 20) {
  console.log('a 大於 10 且小於 20');
}

// 2. if else 語句
var age = 70;
if (age >= 80) {
  console.log('你已經滿 80 歲了');
} else {
  console.log('你還沒滿 80 歲');
}

// 3. if ... else if ... else
var age = 20;
var ageOld = 65;
var ageChild = 6;
var ticketPrice = 400;
var discount = .5;

if (age >= ageOld) {
  console.log('你的票價是 ' + ticketPrice * discount + ' 元');
} else if (age <= ageChild) {
  console.log('你的票價是 ' + ticketPrice * discount + ' 元');
} else {
  console.log('你的票價是 ' + ticketPrice + ' 元');
}

if (age >= ageOld || age <= ageChild) {
  console.log('你的票價是 ' + ticketPrice * discount + ' 元');
} else {
  console.log('你的票價是 ' + ticketPrice + ' 元');
}


// [ 練習題 1 ]

var grade = prompt('請輸入期末成績：');

if (grade > 100 || grade < 0 || isNaN(grade)) {
  alert('請好好輸入！');
} else {
  if (grade == 100) {
    alert('獎勵一輛 BMW');
  } else if (grade >= 80) {
    alert('獎勵一台 iphone');
  } else if (grade >= 60) {
    alert('獎勵一本參考書');
  } else {
    alert('你什麼也沒得到');
  }
}


// [ 練習題 2 ]
var height = prompt('輸入你的身高：');
var money = prompt('輸入你的年收入：');
var handsome = prompt('輸入你的顏值\(1-10\)：');

if (height >= 180 && money >= 200 && handsome >= 8) {
  alert('我一定要跟你結婚');
} else if (height >= 180 || money >= 200 || handsome >= 8) {
  alert('要結婚也是可以的');
} else {
  alert('不嫁');
}

// [ 練習題 3 ]：輸入三個數字，從大到小排序。
var a = +prompt('輸入第一個數字');
var b = +prompt('輸入第二個數字');
var c = +prompt('輸入第三個數字');

if (a > b && a > c) {
  if (b > c) {
    alert(a + ',' + b + ',' + c);
  } else {
    alert(a + ',' + c + ',' + b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    alert(b + ',' + a + ',' + c);
  } else {
    alert(b + ',' + c + ',' + a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    alert(c + ',' + a + ',' + b);
  } else {
    alert(c + ',' + b + ',' + a);
  }
}

//沒辦法用 a > b > c，因為前兩者若為 true，會自動轉為 number，來跟下一個值比較。

if (a > b > c) {
  console.log(a + ',' + b + ',' + c);
} else if (a > c > b) {
  console.log(a + ',' + c + ',' + b);
} else if (b > a > c) {
  console.log(b + ',' + a + ',' + c);
} else if (b > c > a) {
  console.log(b + ',' + c + ',' + a);
} else if (c > a > b) {
  console.log(c + ',' + a + ',' + b);
} else if (c > b > a) {
  console.log(c + ',' + b + ',' + a);
}
