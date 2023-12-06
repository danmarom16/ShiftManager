import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import DashboardCards from '../components/Dashboard/DashboardCards';
import EarningsBanner from '../components/Dashboard/EarningsBanner';
import EarningsStatistics from '../components/Dashboard/EarningStatistics/EarningsStatistics';

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
