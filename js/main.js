new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
});

const timer = new CountdownTimer({
	selector: '#clock1',
	targetDate: new Date('July, 08 2023 20:00:00'),
});

timer.startTimer();
AOS.init();
