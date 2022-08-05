function wrong1() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. لطفا با هزینه وندور تعویض شود. با تشکر" +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. لطفا با هزینه وندور تعویض شود. با تشکر" +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong2() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. وندور اعلام کردند پیک چند سفارش از مجموعه دریافت کردند. لطفا بررسی شود با تشکر" +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. وندور اعلام کردند پیک چند سفارش از مجموعه دریافت کردند. لطفا بررسی شود با تشکر" +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong3() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است. دوربین موجود نیست. لطفا بررسی شود باتشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است. دوربین موجود نیست. لطفا بررسی شود باتشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong4() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است. تصویر ارسالی وندور در گروه ارسال شده است. لطفا بررسی شود باتشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست تعویض دارند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است. تصویر ارسالی وندور در گروه ارسال شده است. لطفا بررسی شود باتشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong5() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری استفاده کردند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است و اختلاف قیمت را نمیپذیرند. دوربین موجود نیست. لطفا بررسی شود باتشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری استفاده کردند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است و اختلاف قیمت را نمی پذیرند. دوربین موجود نیست. لطفا بررسی شود باتشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong6() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری استفاده کردند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است و اختلاف قیمت را نمیپذیرند. تصویر ارسالی وندور در گروه ارسال شد. لطفا بررسی شود باتشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری استفاده کردند. وندور اعلام کردند پیک اشتباها سفارش دیگری را برداشته است و اختلاف قیمت را نمی پذیرند. تصویر ارسالی وندور در گروه ارسال شد. لطفا بررسی شود باتشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong7() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست مرجوعی کل سفارش را دارند. لطفا با هزینه وندور مرجوع شود. با تشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست مرجوعی کل سفارش را دارند. لطفا با هزینه وندور مرجوع شود. با تشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong8() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست مرجوعی کل سفارش را دارند. وندور اعلام کردند پیک اشتباه برداشتند و دوربینی موجود نیست. لطفا بررسی شود. با تشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست مرجوعی کل سفارش را دارند. وندور اعلام کردند پیک اشتباه برداشتند و دوربینی موجود نیست. لطفا بررسی شود. با تشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}

function wrong9() {
  let cust = document.getElementById("wrongIn").value;
  let out = "";
  if (cust === "") {
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست مرجوعی کل سفارش را دارند. وندور اعلام کردند پیک اشتباه برداشتند و تصویر ارسالی وندور در گروه ارسال شد. لطفا بررسی شود. با تشکر." +
      "\nمشخص نیست سفارش متعلق چه شخصی است.";
  } else {
    cust = document.getElementById("wrongIn");
    out =
      "سفارش کاملا جابجا ارسال شده. مشتری درخواست مرجوعی کل سفارش را دارند. وندور اعلام کردند پیک اشتباه برداشتند و تصویر ارسالی وندور در گروه ارسال شد. لطفا بررسی شود. با تشکر." +
      "\nنام مشتری درج شده روی فاکتور: " +
      cust.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("wrongIn").value = "";
}
