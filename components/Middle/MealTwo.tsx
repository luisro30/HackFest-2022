import Image from 'next/image';
import { info } from '../../data';
import PatternDevide from './PatternDevide';
import Info from './Info';
import PatternLines from './PatternLines';

const MealTwo = () => {
	return (
		<>
			{/* Mobile image  */}
			<div className='shadow-3xl md:hidden'>
				<Image
					src='/images/homepage/locally-sourced-mobile@2x.jpg'
					alt='locally sourced mobile'
					layout='responsive'
					width={654}
					height={800}
				/>
			</div>

			{/* Tablet image */}
			<div className='hidden md:shadow-3xl md:block xl:hidden'>
				<Image
					src='/images/homepage/locally-sourced-tablet@2x.jpg'
					alt='locally sourced tablet'
					layout='responsive'
					width={573}
					height={360}
				/>
			</div>

			{/* Pattern Lines */}
			<div className='z-50 hidden md:block md:absolute w-[160px] h-[76px] top-[228px] xl:top-[282px] right-[-58px] xl:right-[-110px]'>
				<PatternLines />
			</div>

			{/* Information Section  */}
			<div className='xl:w-[445px] static md:relative xl:static'>
				<PatternDevide />
				<Info title={info[1].title} description={info[1].description} />

				{/* Pattern Curve Top Left  */}
				<div className='hidden md:block md:absolute md:top-16 md:bottom-0 md:-right-[600px] w-[895px] h-[320px] xl:-right-[200px] xl:top-[320px]'>
					<Image
						src='/images/patterns/pattern-curve-top-left.svg'
						alt='pattern curve top left'
						layout='responsive'
						width={895}
						height={320}
					/>
				</div>
			</div>
			{/* Desktop image */}
			<div className='hidden md:shadow-3xl xl:flex relative xl:justify-cente xl:items-center'>
				<Image
					src='/images/homepage/locally-sourced-desktop@2x.jpg'
					alt='locally sourced desktop'
					width={540}
					height={720}
				/>
			</div>
		</>
	);
};

export default MealTwo;
