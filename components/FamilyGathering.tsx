import Image from 'next/image';
import PatternLines from './Middle/PatternLines';
import Tabs from './FamilyGathering/Tabs';
import PatternCurveTopRight from './Middle/PatternCurveTopRight';
const FamilyGathering = () => {
	return (
		<div className='static md:relative flex flex-col justify-center items-center py-24 px-6 xl:flex-row xl:justify-between xl:px-[165px] xl:py-40'>
			<div className='hidden md:block md:absolute w-[895px] h-[320px] md:top-0 md:-left-2/3 xl:left-[-350px]'>
				<PatternCurveTopRight />
			</div>

			<div className='md:relative'>
				{/* tablet image  */}
				<div className='hidden xl:hidden md:block w-[573px] h-[360px] shadow-3xl'>
					<Image
						src='/images/homepage/family-gathering-tablet@2x.jpg'
						layout='fill'
						objectFit='contain'
						alt='family gathering tablet'
					/>
				</div>

				{/* desktop image  */}
				<div className='hidden xl:block w-[540px] h-[600px] shadow-3xl'>
					<Image
						src='/images/homepage/family-gathering-desktop@2x.jpg'
						layout='fill'
						objectFit='contain'
						alt='family gathering desktop'
					/>
				</div>

				{/* pattern lines  */}
				<div className='md:z-50 hidden md:block md:absolute md:w-[160px] md:h-[76px] top-[-40px] left-[-60px]'>
					<PatternLines />
				</div>
			</div>

			{/* mobile image  */}
			<div className='shadow-3xl w-[326px] h-[400px] relative md:hidden'>
				<Image
					src='/images/homepage/family-gathering-mobile@2x.jpg'
					layout='fill'
					objectFit='contain'
					alt='family gathering mobile'
				/>
			</div>

			<div className='flex flex-col xl:flex-col-reverse'>
				<Tabs />
			</div>
		</div>
	);
};

export default FamilyGathering;
