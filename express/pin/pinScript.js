function pin() {
  let add = document.getElementById("pin").value;
  let out;
  if (add === "") {
    out =
      "آدرس مشتری با لوکیشن مغایرت دارد. در صورت امکان سفارش به آدرس نوشتاری مشتری ارسال شود. با تشکر";
  } else {
    add = document.getElementById("pin");
    out =
      "آدرس مشتری با لوکیشن مغایرت دارد. در صورت امکان سفارش به آدرس نوشتاری مشتری ارسال شود. با تشکر" +
      "\nآدرس نوشتاری دقیق مشتری: " +
      add.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("pin").value = "";
}
