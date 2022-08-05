function call() {
  let num = document.getElementById("call").value;
  let out;
  if (num === "") {
    out = "لطفا پیک در هنگام تحویل سفارش با مشتری تماس بگیرند. با تشکر";
  } else {
    num = document.getElementById("call");
    out =
      "لطفا پیک در هنگام تحویل سفارش با مشتری تماس بگیرند. با تشکر" +
      "\nشماره ی پاسخگوی مشتری: " +
      num.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("call").value = "";
}
