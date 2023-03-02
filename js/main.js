new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

const timer = new CountdownTimer({
  selector: "#clock1",
  targetDate: new Date("March, 05 2023 16:00:00"),
});

timer.startTimer();
AOS.init();
