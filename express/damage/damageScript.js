function damage1() {
  let item = document.getElementById("damage");
  out =
    "آیتم\n" +
    item.value +
    "\nحین حمل آسیب دیده است. مشتری درخواست تعویض آیتم دارند. تصویر در گروه ارسال شد. لطفا بررسی شود با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("damage").value = "";
}

function damage2() {
  let item = document.getElementById("damage");
  out =
    "آیتم\n" +
    item.value +
    "\nحین حمل آسیب دیده است. مشتری درخواست عودت وجه آیتم دارند. تصویر در گروه ارسال شد. لطفا بررسی شود با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("damage").value = "";
}

function damage3() {
  let item = document.getElementById("damage");
  out =
    "آیتم\n" +
    item.value +
    "\nحین حمل آسیب دیده است. مشتری درخواست تعویض آیتم را دارند. ایشان سفارش را از پیک تحویل نگرفتند و تصویری موجود ندارند. لطفا بررسی شود با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("damage").value = "";
}

function damage4() {
  let item = document.getElementById("damage");
  out =
    "آیتم\n" +
    item.value +
    "\nحین حمل آسیب دیده است. مشتری درخواست عودت وجه آیتم را دارند. ایشان سفارش را از پیک تحویل نگرفتند و تصویری موجود ندارند. لطفا بررسی شود با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("damage").value = "";
}
