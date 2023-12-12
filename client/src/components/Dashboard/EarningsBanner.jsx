import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import Button from '../Button';

const EarningsBanner = () => {

    const { accumulatedRevenue, currentColor } = useStateContext();
	return (
		<div className='flex flex-wrap lg:flex-nowrap justify-center'>
			<div className='bg-white dark:text-gray-200 darkbg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center max-w-4xl'>
				<div className='flex justify-between items-center'>:
					<div>
						<p className='font-bold text-gray-400'>Total Earnings</p>
						<p className='text-2xl'> {'₪' + accumulatedRevenue}</p>
					</div>
				</div>
				<div className='mt-6'>
					<Button
						size='md'
						color='white'
						bgColor={currentColor}
						text='Download'
						borderRadius='10px'
						type='button'
					/>
				</div>
			</div>
		</div>
	);
};

export default EarningsBanner;
