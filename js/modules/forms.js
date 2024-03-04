import {showModal, closeModal} from "./modal"
import {postData} from "../services/services"

function forms(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thanks. We will contact tou soon",
    failure: "Something went wrong...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // const statusMessage = document.createElement("div");
      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      // statusMessage.textContent = message.loading;
      statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
      // form.append(statusMessage);

      form.insertAdjacentElement("afterend", statusMessage);

      // const req = new XMLHttpRequest();
      // req.open("POST", "server.php");

      // req.setRequestHeader("Content-type", "application/json");

      const formData = new FormData(form);

      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });
      // const json = JSON.stringify(object);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // req.send(formData);
      // req.send(json);

      // fetch("server.php", {
      //   method: "POST",
      //   // body: formData,
      //   body: json,
      //   headers: { "Content-type": "application/json" },
      // })
      // postData("server.php", JSON.stringify(object))
      // postData("http://localhost:3000/requests", JSON.stringify(object))

      postData("http://localhost:3000/requests", json)
        // .then((data) => data.text())
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          // form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      // req.addEventListener("load", () => {
      //   if (req.status === 200) {
      //     console.log(req.response);
      //     // statusMessage.textContent = message.success;
      //     showThanksModal(message.success);
      //     form.reset();
      //     // setTimeout(() => {
      //     //   statusMessage.remove();
      //     // }, 2500);
      //     statusMessage.remove();
      //   } else {
      //     // statusMessage.textContent = message.failure;
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    showModal(".modal", modalTimerId);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
        <div class='modal__content'>
          <div class='modal__close' data-close>×</div>
          <div class='modal__title' >${message}</div>
        </div>
      `;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal(".modal");
    }, 4000);
  }

  // json-server
  // fetch('db.json')
  // fetch("http://localhost:3000/menu")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
}

// module.exports = forms;
export default forms;
