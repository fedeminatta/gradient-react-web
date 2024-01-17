import GradientCircle from '../GradientCircle/GradientCircle';

const GradientContain = ({ styles = '', children }) => {
	return (
		<section style={{ display: 'flex', position: 'relative', ...styles }}>
			<GradientCircle
				color1='#7701cc'
				color2='#01a7cc'
				width='350px'
				height='350px'
			/>
			<GradientCircle
				color1='#eb540e'
				blur='50'
				color2='#cc0101'
				width='450px'
				height='450px'
			/>
			<div style={{ position: 'absolute', zIndex: 2 }}>{children}</div>
		</section>
	);
};
export default GradientContain;
