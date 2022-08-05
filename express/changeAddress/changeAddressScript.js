function changeAdd1() {
  let add = document.getElementById("addIn").value;
  let out = "";
  if (add === "") {
    out =
      "مشتری درخواست تغییر آدرس خود را دارند. تغییرات از بکند اعمال شد. لطفا بررسی شود با تشکر";
  } else {
    add = document.getElementById("addIn");
    out =
      "مشتری درخواست تغییر آدرس خود را دارند. تغییرات از بکند اعمال شد. لطفا بررسی شود با تشکر" +
      "\nآدرس جدید مشتری: " +
      add.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("addIn").value = "";
}

function changeAdd2() {
  let add = document.getElementById("addIn").value;
  let out = "";
  if (add === "") {
    out =
      "مشتری درخواست تغییر آدرس خود را دارند. امکان تغییر آدرس از بکند وجود ندارد. لطفا بررسی شود با تشکر";
  } else {
    add = document.getElementById("addIn");
    out =
      "مشتری درخواست تغییر آدرس خود را دارند. امکان تغییر آدرس از بکند وجود ندارد. لطفا بررسی شود با تشکر" +
      "\nآدرس جدید مشتری: " +
      add.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("addIn").value = "";
}

function changeAdd3() {
  let add = document.getElementById("addIn").value;
  let out = "";
  if (add === "") {
    out =
      "مشتری درخواست اصلاح جزئیات آدرس  خود را دارند. امکان اصلاح آدرس از بکند وجود ندارد. لطفا بررسی شود با تشکر";
  } else {
    add = document.getElementById("addIn");
    out =
      "مشتری درخواست تغییر آدرس سفارش خود را دارند. امکان اصلاح آدرس از بکند وجود ندارد. لطفا بررسی شود با تشکر" +
      "\nآدرس اصلاح شده مشتری: " +
      add.value;
  }
  navigator.clipboard.writeText(out);
  alert("پیش نویس شما کپی شد!");
  document.getElementById("addIn").value = "";
}
