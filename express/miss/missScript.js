function miss1() {
  let item = document.getElementById("missIn");
  out =
    "آیتم " +
    item.value +
    " به دست مشتری نرسیده است. لطفا با هزینه وندور برای مشتری ارسال شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("missIn").value = "";
}

function miss2() {
  let item = document.getElementById("missIn");
  out =
    "آیتم " +
    item.value +
    " به دست مشتری نرسیده است. مشتری درخواست ارسال دارند؛ اما وندور به هیچ وجه هزینه ارسال را نمی پذیرند و اعلام کردند دوربینی برای بررسی بیشتر وجود ندارد. لطفا بررسی شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("missIn").value = "";
}

function miss3() {
  let item = document.getElementById("missIn");
  out =
    "آیتم " +
    item.value +
    " به دست مشتری نرسیده است. مشتری درخواست ارسال دارند. وندور هزینه ارسال را نمی پذیرند. تصویر ارسالی وندور درون گروه ارسال شد. لطفا بررسی شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("missIn").value = "";
}

function miss4() {
  let item = document.getElementById("missIn");
  out =
    "آیتم " +
    item.value +
    " به دست مشتری نرسیده است. مشتری درخواست ارسال دارند. وندور هزینه ارسال را نمی پذیرن و اعلام کردند مورد قابل بررسی بوده و پیک چک نکردند. لطفا بررسی شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("missIn").value = "";
}

function miss5() {
  let item = document.getElementById("missIn");
  out =
    "آیتم " +
    item.value +
    " به دست مشتری نرسیده است. مشتری درخواست عودت وجه دارند. وندور  نمی پذیرن و اعلام کردند مورد قابل بررسی بوده و پیک چک کرده و سفارش رو کامل تحویل گرفتند. لطفا بررسی شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("missIn").value = "";
}

function miss6() {
  let item = document.getElementById("missIn");
  out =
    "آیتم " +
    item.value +
    " به دست مشتری نرسیده است. مشتری درخواست عودت وجه دارند. وندور اعلام کردند تحویل پیک شده. تصویر ارسالی وندور در گروه ارسال شد. لطفا بررسی شود. با تشکر";
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("missIn").value = "";
}
