const formatText = (time, single) => (time < 2 ? single : `${single}s`);

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const getTime = () => {
	const msToNewYear = new Date('21 Feb 2021') - new Date();
	const days = Math.floor(msToNewYear / 1000 / 3600 / 24);
	const hours = Math.floor((msToNewYear / 1000 / 3600) % 24);
	const mins = Math.floor((msToNewYear / 1000 / 60) % 60);
	const secs = Math.floor((msToNewYear / 1000) % 60);

	document.getElementById('daysEl').innerHTML = days;
	document.getElementById('hoursEl').innerHTML = formatTime(hours);
	document.getElementById('minsEl').innerHTML = formatTime(mins);
	document.getElementById('secEl').innerHTML = formatTime(secs);

	document.getElementById('secElText').innerHTML = formatText(secs, 'Second');
	document.getElementById('minElText').innerHTML = formatText(secs, 'Minute');
	document.getElementById('hourElText').innerHTML = formatText(secs, 'Hour');
	document.getElementById('dayElText').innerHTML = formatText(secs, 'Day');
};

getTime();
setInterval(getTime, 1000);
