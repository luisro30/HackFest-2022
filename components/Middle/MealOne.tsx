import Image from 'next/image';
import { info } from '../../data';
import Info from './Info';
import img from '../../public/images/Pilates-amico.png'


const MealOne = () => {
	return (
		<>
			{/* mobile image */}
			<div className='hidden md:block md:absolute md:top-[180px] md:-left-[600px] w-[895px] h-[320px] xl:left-0 xl:top-[300px]'>
			
			</div>
			<div className='shadow-3xl -mt-20 md:hidden'>
				<Image
					src= {img}
					alt='enjoyable place mobile'
					layout='responsive'
					width={654}
					height={800}
				/>
			</div>

			{/* tablet image */}
			<div className='hidden md:shadow-3xl md:block xl:hidden'>
				<Image
					src= {img}
					alt='enjoyable place tablet'
					layout='responsive'
					width={573}
					height={360}
				/>
			</div>

			{/* desktop image */}
			<div className='hidden md:shadow-3xl xl:flex relative xl:justify-cente xl:items-center'>
				<Image
					src= {img}
					alt='enjoyable place desktop'
					width={540}
					height={720}
				/>
			</div>
			{/* Information Section  */}
			<div className='xl:w-[445px]'>
			
				<Info title={info[0].title} description={info[0].description} />
			</div>
		</>
	);
};

export default MealOne;
