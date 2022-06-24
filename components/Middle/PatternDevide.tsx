import Image from 'next/image';

const PatternDevide = () => {
	return (
		<div className='relative w-[71px] h-[7px] mx-auto mt-10 md:mt-12 mb-8 xl:mb-12 xl:m-0'>
			<Image
				src='/images/patterns/pattern-divide.svg'
				alt='pattern devide'
				layout='fill'
				objectFit='contain'
			/>
		</div>
	);
};

export default PatternDevide;
