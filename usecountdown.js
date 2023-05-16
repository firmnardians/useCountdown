import { useEffect, useState } from 'react';
import { SECOND, TIMER_TIMEOUT } from './constant';

let interval;

/**
 * @param {() => void} callback
 */
function useCountdown(callback) {
	const [timer, setTimer] = useState(TIMER_TIMEOUT);

	if (typeof callback !== 'function') throw new TypeError('callback must be a function');

	const startIntervalCountDown = () => {
		interval = window.setInterval(() => {
			setTimer((prevState) => (prevState > 0 ? prevState - SECOND : 0));
		}, SECOND);
	};

	const clearIntervalCountDown = () => window.clearInterval(interval);

	useEffect(() => {
		callback(startIntervalCountDown);

		return () => clearIntervalCountDown();
	}, []);

	useEffect(() => {
		if (timer === 0) clearIntervalCountDown();
	}, [timer]);

	return { timer };
}

export default useCountdown;
