const Info = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div>
			<h2 className='my-2 text-5xl md:text-2xl md:mx-24 md:my-5 leading-10 sm:leading-[56px] tracking-[-0.4px] sm:tracking-[-0.5px] text-center mx-10 sm:mx-32 xl:m-0 xl:my-5 xl:text-left xl:text-4xl'>
				{title}
			</h2>
			<p className=' tracking-[-0.19px] px-4 text-lg md:tracking-[-0.22px] md:px-12 xl:px-0 xl:text-left xl:mx-0 '>
				{description}
			</p>
		</div>
	);
};

export default Info;
