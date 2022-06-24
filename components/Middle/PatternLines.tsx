import Image from 'next/image';

const PatternLines = () => {
	return (
		<>
			<Image
				src='/images/patterns/pattern-lines.svg'
				alt='pattern lines'
				layout='responsive'
				width={160}
				height={76}
			/>
		</>
	);
};

export default PatternLines;
