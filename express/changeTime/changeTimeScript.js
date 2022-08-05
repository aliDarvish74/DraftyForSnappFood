function changeTime1() {
  let in1 = document.getElementById("changeTime1");
  let out =
    "لطفا سفارش مشتری در ساعت " +
    in1.value +
    " برای ایشان ارسال شود. با تشکر\nهماهنگی های لازم انجام شده است.";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("changeTime1").value = "";
}

function changeTime2() {
  let in1 = document.getElementById("changeTime2");
  let out =
    "لطفا سفارش مشتری " +
    in1.value +
    " برای ایشان ارسال شود. با تشکر\nهماهنگی های لازم انجام شده است.";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("changeTime2").value = "";
}
