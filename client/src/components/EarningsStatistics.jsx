import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { SparklineAreaData } from '../data/dummy';
import SparkLine from './Charts/SparkLine';
import { GoDotFill } from 'react-icons/go';
import Button from './Button';
import Stacked from './Charts/Stacked';

const EarningsStatistics = () => {
	const {
		currentColor,
		dashboardData,
		getCurrentMonthRevenue,
		currentMonthRevenue,
	} = useStateContext();

	useEffect(async () => {
		await getCurrentMonthRevenue();
	}, [dashboardData]);

	return (
		<div className='flex gap-10 flex-wrap justify-center'>
			<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
				{/* Revenue Updates */}
				<div className='flex justify-between'>
					<p className='font-semibold text-xl'> Earning Statistics</p>
					<div className='flex items-center gap-4'>
						<p className='flex items-center gap-2 text-green-500 hover:drop-shadow-xl'>
							<span>
								<GoDotFill />
							</span>
							<span>Income Split</span>
						</p>
					</div>
				</div>

				{/* Budget & Expense & Line Chart*/}
				<div className='mt-10 flex gap-10 flex-wrap justify-center'>
					<div className='border-r-1 border-color m-4 pr-10'>
						{/*Budget */}
						<div>
							<p>
								<span className='text-3xl font-semibold'>
									{'₪' + currentMonthRevenue.revenue}
								</span>
								<span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
									{currentMonthRevenue.percentage.val}
								</span>
							</p>
							<p className='text-gray-500 mt-1'>Current Month Revenue</p>
						</div>

						{/*Line Chart */}
						<div className='mt-5'>
							<SparkLine
								currentColor={currentColor}
								id='line-sparkline'
								type='Line'
								height='80px'
								width='250px'
								data={SparklineAreaData}
								color={currentColor}
							/>
						</div>
						<div className='mt-10'>
							<Button
								color='white'
								bgColor={currentColor}
								text='Downlaod Report'
								borderRadius='10px'
								type='button'
							/>
						</div>
					</div>

					{/* Stacked Chart */}
					<div>
						<Stacked
							width='320px'
							height='360px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarningsStatistics;
