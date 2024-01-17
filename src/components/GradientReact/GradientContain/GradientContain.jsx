const GradientContain = ({ styles = '', children }) => {
	return (
		<section style={{ display: 'flex', position: 'relative', ...styles }}>
			{children}
		</section>
	);
};
export default GradientContain;
