function timer(timerId, deadline){

    // const deadline = "2024-03-21";

  function getTimeRemaining(endTime) {
    let days, hours, minutes, seconds;
    const delta = Date.parse(endTime) - Date.parse(new Date());

    if (delta <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(delta / (1000 * 60 * 60 * 24));
      hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((delta / (1000 * 60)) % 60);
      seconds = Math.floor((delta / 1000) % 60);
    }

    return {
      total: delta,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function addZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const delta = getTimeRemaining(endtime);

      // days.innerHTML = delta.days;
      days.textContent = addZero(delta.days);
      hours.textContent = addZero(delta.hours);
      minutes.textContent = addZero(delta.minutes);
      seconds.textContent = addZero(delta.seconds);

      if (delta.timeInterval <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(timerId, deadline);
}

// module.exports = timer;
export default timer;