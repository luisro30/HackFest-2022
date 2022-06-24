import MealOne from "./MealOne";
import MealTwo from "./MealTwo";

const Middle = () => {
	return (
		<div className='mt-44 space-y-20 mx-6 md:mx-[98px] md:relative md:-mt-24 xl:mx-0 xl:px-[165px] mb-24 xl:-mb-20 2xl:px-72'>
			{/* Meal One Section  */}
			<div className='xl:flex xl:justify-between xl:items-center'>
				<MealOne />
			</div>

			{/* Meal Two Section  */}
			<div className='mt-20 md:mt-32 md:relative xl:flex xl:justify-between xl:items-center'>
				<MealTwo />
			</div>

			<div className='xl:flex xl:justify-between xl:items-center'>
				<MealOne />
			</div>

			{/* Meal Two Section  */}
			<div className='mt-20 md:mt-32 md:relative xl:flex xl:justify-between xl:items-center'>
				<MealTwo />
			</div>
		</div>
	);
};

export default Middle;
