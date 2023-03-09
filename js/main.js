new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

const timer = new CountdownTimer({
  selector: "#clock1",
  targetDate: new Date("March, 12 2023 11:00:00"),
});

timer.startTimer();
AOS.init();
