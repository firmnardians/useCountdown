import { TIMER_TIMEOUT } from './constant';

/**
 * @param {() => void} startIntervalCountDown
 */
export function handleInterval(startIntervalCountDown) {
	if (startIntervalCountDown) {
		startIntervalCountDown();

		window.setTimeout(() => {
			window.location.href = `${window.location.origin}`;
		}, TIMER_TIMEOUT);
	} else {
		window.location.reload(true);
	}
}
