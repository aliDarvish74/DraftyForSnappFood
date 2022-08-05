function otherPerson() {
  let other = document.getElementById("otherPerson1");
  let num = document.getElementById("otherPerson2").value;
  let out;
  if (num === "") {
    out = "لطفا سفارش مشتری در آدرس تحویل " + other.value + " گردد. باتشکر";
  } else {
    num = document.getElementById("otherPerson2");
    out =
      "لطفا سفارش مشتری در آدرس تحویل " +
      other.value +
      " گردد. باتشکر" +
      "\nشماره شخص دریافت کننده: " +
      num.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("otherPerson1").value = "";
  document.getElementById("otherPerson2").value = "";
}
