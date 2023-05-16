import Content from './content';
import useCountdown from './usecountdown';
import { handleInterval } from './helper';

/**
 * @param {object} props
 * @param {() => void} props.startIntervalCountDown
 */
function myFunction({ startIntervalCountDown }) {
	// more logic
	handleInterval(startIntervalCountDown);
}

export default function TimerCountdown() {
	const { timer } = useCountdown((startIntervalCountDown) => myFunction({ startIntervalCountDown }));
	return <Content timer={timer} />;
}
