// [ while 練習題 ] 本金 1000 元，年利率 5%，總金額要能到 5000 元，需要幾年？

var principal = 1000;
var count = 0;

while (principal <= 5000) {
  principal *= 1.05;
  count++;
}

console.log(count);

// [ for 練習題 1 ] 1-100 奇數加總

var sum = 0;//該變數可以寫在 for 外面，或是作為 for 的第二個變數，但不可以寫在 statement 裡面，不然每次運作一次就都會歸零。
for (var i = 0; i < 101; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}

console.log('奇數總和為：' + sum);

// [ for 練習題 2 ] 1-100，7 的倍數打印並加總

var sum = 0;

for (var i = 1; i < 101; i++) {
  if (i % 7 == 0) {
    console.log(i);
    sum += i;
  }
}

console.log('奇數總和為：' + sum);

// [ for 練習題 3 ] 水仙花數

for (var i = 100; i < 1000; i++) {
  var hundreds = parseInt(i / 100);
  var tens = parseInt((i - hundreds * 100) / 10);
  var units = i % 10;
  //console.log('249測試：', i, unit);//寫 code 的行數，以及迴圈的圈數，可以幫助自己很多。
  if (Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3) == i) {
    console.log('水仙花數字有：', i);
  }
}

// [ for 練習題 4 ]讓使用者輸入數字，檢查是否為質數

var num = +prompt('請輸入大於 1 的整數檢查是否為質數：');
var record = true;

if (num < 1) {
  alert('你輸入的值不合規定');
} else {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      record = false;//不可以用 == ，要用 = ，因為賦值，才能真正改變 record 的值。
      alert('該數不為質數');
      break;
    }
  }
}

if (record) {
  alert('該數為質數！');
}

// [ for 練習題 5 ] 印出 * 字的直角三角形圖形

for (var i = 0; i < 5; i++) {
  for (var n = 0; n < i + 1; n++) {
    document.write('*');
  }
  document.write('<br/>');
}

for (var i = 0; i < 5; i++) {
  for (var n = 0; n < 5; n++) {
    document.write('*');
  }
  document.write('<br/>');
}

for (var i = 4; i > -1; i--) {
  for (var n = 0; n < i + 1; n++) {
    document.write('*');
  }
  document.write('<br/>');
}

// [ for 練習題 6 ] 九九乘法表，指定 3*5 等於多少，並 print 出來

for (var i = 1; i < 10; i++) {
  for (var n = 1; n < 10; n++) {
    console.log('九九乘法：' + i + ' x ' + n + ' = ', i * n);
  }
}

// [ for 練習題 7 ] 打印 1-100 的質數

for (var i = 2; i < 101; i++) {
  var isPrimNumber = true;
  for (var n = 2; n <= Math.sqrt(i); n++) {
    if (i % n == 0) {
      isPrimNumber = false;
      break;
    }
  }
  if (isPrimNumber) {
    console.log('該數為質數：', i);
  }
}
