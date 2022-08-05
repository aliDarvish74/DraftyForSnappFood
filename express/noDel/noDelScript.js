function overTime1() {
  let in1 = document.getElementById("noDel");
  let out =
    "سفارش به دلیل " +
    in1.value +
    " در وضعیت REQUESTED قرار گرفته است و نیازی به ارسال پیک نیست. لطفا درخواست پیک لغو شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("noDel").value = "";
}
