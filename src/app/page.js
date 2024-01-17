import GradientCircle from '@/components/GradientReact/GradientCircle/GradientCircle';
import GradientContain from '@/components/GradientReact/GradientContain/GradientContain';
import GradientContent from '@/components/GradientReact/GradientContent/GradientContent';

export default function Home() {
	return (
		<>
			<GradientContain styles={{ margin: '100px', padding: '20px' }}>
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
				<GradientContent>
					<h2>Titulo de la seccion</h2>
					<p>texto generico </p>
				</GradientContent>
			</GradientContain>
		</>
	);
}
