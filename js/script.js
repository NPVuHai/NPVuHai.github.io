"use strict";
function handleSubmit() {
  // lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lấy element của thẻ p hiện có
  const errorEmail = document.getElementById("error-email");
  // điều kiện là 1 email
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // dùng match đẻ kiểm tra
  const check = emailValue.match(checkEmail);
  console.log("email", check);
  //  lấy phàn chứa thông tin user
  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);
  // lấy element để kiểm soat submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "❗Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "none";
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");

  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".section-content");

  if (viewMore.classList.contains("view-more")) {
    sectionContent.forEach((el) => {
      el.style.display = "block"; // Hiển thị nội dung
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less More"; // Cập nhật văn bản thành "Thu gọn"
  } else {
    sectionContent.forEach((el) => {
      el.style.display = "none"; // Ẩn nội dung
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View More"; // Cập nhật văn bản thành "Xem thêm"
  }
}
