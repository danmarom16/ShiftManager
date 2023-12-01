import React, { useEffect } from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
	Series,
	ColumnSeries,
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import { localDataManipulatorService } from '../../services/localDataManipulatorService';

const primaryXAxis = {
	majorGridLines: { width: 0 },
	minorGridLines: { width: 0 },
	majorTickLines: { width: 0 },
	minorTickLines: { width: 0 },
	interval: 1,
	lineStyle: { width: 0 },
	labelIntersectAction: 'Rotate45',
	valueType: 'Category',
};
const primaryYAxis = {
	lineStyle: { width: 0 },
	minimum: 0,
	maximum: localDataManipulatorService.getMaxMonthlyRevenue(),
	interval: 1000,
	majorTickLines: { width: 0 },
	majorGridLines: { width: 1 },
	minorGridLines: { width: 1 },
	minorTickLines: { width: 0 },
	labelFormat: '{value}',
};

const Stacked = ({ width, height }) => {
	const {
		getAccumulatedRevenue,
		getDashboardChartData,
		shiftsData,
		dashboardData,
	} = useStateContext();

	useEffect(() => {
		getDashboardChartData();
	}, [shiftsData]);

	useEffect(() => {
		getAccumulatedRevenue();
	}, [dashboardData]);

	return (
		<ChartComponent
			width={width}
			height={height}
			id='charts'
			primaryXAxis={primaryXAxis}
			primaryYAxis={primaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{ background: 'white' }}>
			<Inject services={[Legend, Category, ColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				<SeriesDirective
					dataSource={dashboardData}
					xName='x'
					yName='y'
					type='Column'
				/>
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default Stacked;
