import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const DashboardCards = () => {
	const {
		getDashboardCardsData,
		dashboardCardsData,
		setDashboardCardsData,
		shiftsData,
	} = useStateContext();

	useEffect(async () => {
		await getDashboardCardsData();
	}, [shiftsData]);

	return (
		<div>
			<div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
				{dashboardCardsData.map((item) => (
					<div
						key={item.title}
						className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
						<button
							className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
							type='button'
							style={{ color: item.iconColor, backgroundColor: item.iconBg }}>
							{item.icon}
						</button>
						<p className='mt-3'>
							<span className='text-lg font-semibold'>{item.amount}</span>
							<span
								className={`px-1 py-0.5 rounded-full ml-3 bg-${item.percentageColor} text-xs text-white`}>
								{item.percentage.val}
							</span>
						</p>
						<p className='text-sm text-gray-400 mt-1'>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardCards;
