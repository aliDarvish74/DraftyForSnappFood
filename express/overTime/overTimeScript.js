function overTime1() {
  let in1 = document.getElementById("overTime1");
  let in2 = document.getElementById("overTime11");
  let out =
    "سفارش به مدت " +
    in1.value +
    " دقیقه در وضعیت " +
    in2.value +
    " باقی مانده است. وندور اعلام کردند سفارش به پیک تحویل داده شده. لطفا بررسی شود با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("overTime1").value = "";
  document.getElementById("overTime11").value = "";
}

function overTime2() {
  let in1 = document.getElementById("overTime2");
  let in2 = document.getElementById("overTime21");
  let out =
    "سفارش به مدت " +
    in1.value +
    " دقیقه در وضعیت " +
    in2.value +
    " باقی مانده است. وندور اعلام کردند سفارش هنوز داخل مجموعه است. لطفا بررسی شود با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("overTime2").value = "";
  document.getElementById("overTime21").value = "";
}
