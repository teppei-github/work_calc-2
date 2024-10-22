let box = "0";
let boxarray = [];
let sign = ""; // 符号を保存

//  numberbuttonclick関数　数字を押すと数字が羅列してwindowに表示される
const numberbuttonclick = (num) => {
  if (box.length > 12) {
    return;
  }

  // 今表示されているものが 0 であれば、入力された値をそのまま表示
  if (box == "0") {
    box = num;
  } else {
    box = box + num;
  }
  $(".window").text(box);
};

$("#clear").on("click", function () {
  box = "0";
  boxarray = [];
  sign = ""; // 符号を保存
  $(".window").text(box);
});

// お尻の1桁を削除したものを、box に格納し、表示
$("#delete").on("click", function () {
  console.log(box.length);
  box.substring();
  if (box.length == 1) {
    box = "0";
  } else {
    box = box.substring(0, box.length - 1);
  }
  $(".window").text(box);
});

/* 数字を押した時にnumberbuttonclick関数を実行 */
$("#one").on("click", function () {
  numberbuttonclick("1");
});
$("#two").on("click", function () {
  numberbuttonclick("2");
});
$("#third").on("click", function () {
  numberbuttonclick("3");
});
$("#four").on("click", function () {
  numberbuttonclick("4");
});
$("#five").on("click", function () {
  numberbuttonclick("5");
});
$("#six").on("click", function () {
  numberbuttonclick("6");
});
$("#seven").on("click", function () {
  numberbuttonclick("7");
});
$("#eight").on("click", function () {
  numberbuttonclick("8");
});
$("#nine").on("click", function () {
  numberbuttonclick("9");
});
$("#zero").on("click", function () {
  numberbuttonclick("0");
});

/*　【符号を押した時の処理】
　boxarrayの配列にboxという変数を追加
　boxを空にする
  符号を変数signに保存
  boxの表示に空のテキストを追加
*/
$("#plus, #minus ,#times ,#divide").on("click", function () {
  boxarray.push(box);
  console.log(boxarray);
  box = "";

  // 評価すべき値が２つ以上あった場合、ここで計算をしてしまう。
  if (boxarray.length >= 2) {
    let total = signAction();
    boxarray = [];
    boxarray.push(total);
  }

  switch (this.id) {
    case "plus":
      sign = "+";
      break;
    case "minus":
      sign = "-";
      break;
    case "times":
      sign = "*";
      break;
    case "divide":
      sign = "/";
      break;
  }

  //$(".window").text(box);
});

/*【＝を押した時の処理】
入力された値（box)をboxarayに追加
totalを初期化
文字列を数値化してtotalに加算
四則演算
totalの結果を表示
*/
$("#equal").on("click", function () {
  boxarray.push(box);
  signAction();
});

function signAction() {
  let total = 0;

  let num1 = Number(boxarray[0]);
  let num2 = Number(boxarray[1]);

  switch (sign) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;
    case "*":
      total = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        alert("0を割り算の右辺に入れないで！");
        break;
      }
      total = num1 / num2;
      break;
  }

  $(".window").text(total);

  return total;
}
