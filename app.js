let daycount = new Date("dec 31, 2023 00:00:00").getTime();

let count = setInterval(function () {
  let now = new Date().getTime();
  let time = daycount - now;

  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  // let minutes = Math.floor(time / (1000 * 60 * 60 * 24));
  let second = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " " + hours + " " + minutes + " " + second + " ";

  if (time < 0) {
    clearInterval(count);
    document.getElementById;
  }
});
