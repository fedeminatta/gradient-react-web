const GradientCircle = ({
	blur = '80',
	width = '200px',
	height = '200px',
	color1 = '#ED0101',
	color2 = '#CC2A01',
}) => {
	const estilo = {
		zIndex: 1,
		boxSizing: 'border-box',
		position: 'relative',
		height: height,
		width: width,
		borderRadius: '50%',
		backgroundSize: '100% 100%',
		background: color1,
		background: `radial-gradient(at left top, ${color1}, ${color2})`,
		filter: `blur(${blur}px)`,
		top: 0,
		left: 0,
		padding: 0,
		margin: 0,
	};
	return <div style={estilo}></div>;
};
export default GradientCircle;
