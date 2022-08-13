function order1() {
  let in1 = document.getElementById("order1");
  let out =
    "همکار محترم " + in1.value + " مشتری منتظر نتیجه بررسی شما هستند با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("order1").value = "";
}

function order2() {
  let in1 = document.getElementById("order2");
  let in2 = document.getElementById("order21");
  let out =
    "همکار محترم " +
    in1.value +
    " مشتری درخواست " +
    in2.value +
    " بابت سفارش را دارند. باتشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("order2").value = "";
  document.getElementById("order21").value = "";
}

function order3() {
  let in1 = document.getElementById("order3");
  let in2 = document.getElementById("order31");
  let out =
    "همکار محترم " +
    in1.value +
    " شماره پاسخگوی مشتری " +
    in2.value +
    " می‌باشد. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("order3").value = "";
  document.getElementById("order31").value = "";
}

function order4() {
  let in1 = document.getElementById("order4");
  let out =
    "همکار محترم " + in1.value + " لطفا مجدد با مشتری تماس بگیرید. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("order4").value = "";
}
