const Info = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div>
			<h2 className='my-2 font-semibold text-4xl sm:text-[40px] md:text-5xl md:mx-24 md:my-5 leading-10 sm:leading-[56px] tracking-[-0.4px] sm:tracking-[-0.5px] text-center mx-10 sm:mx-32 xl:m-0 xl:my-5 xl:text-left xl:text-6xl'>
				{title}
			</h2>
			<p className='text-center font-normal text-lg tracking-[-0.19px] px-4 md:text-2xl md:tracking-[-0.22px] md:px-12 xl:px-0 xl:text-left xl:mx-0 2xl:text-2xl 2xl:m-0'>
				{description}
			</p>
		</div>
	);
};

export default Info;
