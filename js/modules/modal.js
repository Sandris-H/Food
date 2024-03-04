function showModal(modalSelector, modalTimerId) {
  //   const target = e.target;
  // modal.classList.toggle("show");
  //   modal.style.display = "block";
  const modal = document.querySelector(modalSelector);

  modal.classList.add("show", "fade");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  // modal.style.display = "none";
  // modal.classList.toggle("show");
  // document.body.style.overflow = "scroll";
  const modal = document.querySelector(modalSelector);

  modal.classList.add("hide");
  modal.classList.remove("show", "fade");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  // modalClose = document.querySelector("[data-close]");

  modalTrigger.forEach((item) => {
    item.addEventListener("click", () => showModal(modalSelector, modalTimerId));
  });

  // modalClose.addEventListener("click", (e) => {
  //   closeModal(e.target);
  // });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  // const modalTimerId = setTimeout(showModal, 50000);

  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      showModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

// module.exports = modal;
export default modal;
export { showModal, closeModal };
