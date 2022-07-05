const countDownDate = new Date("Aug 11, 2022 00:00:00").getTime();

const zeroLeft = (number, length) => {
  number = number.toString();
  while (number.length < length) {
    number = "0" + number;
  }
  return number;
};

const count = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  let minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
  let seconds = Math.floor(distance % (1000 * 60)) / 1000;

  document.getElementById("days").innerHTML = zeroLeft(Math.trunc(day), 2);
  document.getElementById("hours").innerHTML = zeroLeft(Math.trunc(hours), 2);
  document.getElementById("minutes").innerHTML = zeroLeft(
    Math.trunc(minutes),
    2
  );
  document.getElementById("seconds").innerHTML = zeroLeft(
    Math.trunc(seconds),
    2
  );
}, 1000);
