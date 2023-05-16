import { CENTER_STYLE } from './constant';

/**
 * @param {object} props
 * @param {number} props.timer
 * @returns {React.Node}
 */
export default function Content({ timer = 0 }) {
	return (
		<div style={{ position: 'relative', flex: 1 }}>
			<div style={CENTER_STYLE}>
				<p type='secondary' style={{ marginTop: '8rem', marginRight: '1rem' }}>
					{timer / 1000}
				</p>
			</div>
		</div>
	);
}
