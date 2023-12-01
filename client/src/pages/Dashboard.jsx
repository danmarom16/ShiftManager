import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import DashboardCards from '../components/DashboardCards';
import EarningsBanner from '../components/EarningsBanner';
import EarningsStatistics from '../components/EarningsStatistics';

const Dashboard = () => {
	const { getAllShiftData } =
		useStateContext();
	useEffect(() => getAllShiftData(), []);

	return (
		<div className='mt-12'>
			<EarningsBanner />
			<DashboardCards />
			<EarningsStatistics />
		</div>
	);
};

export default Dashboard;
