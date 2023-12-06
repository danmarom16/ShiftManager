import React, { useEffect } from "react";
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
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { localDataManipulatorService } from "../../services/localDataManipulatorService";
import { GoDotFill } from "react-icons/go";

const primaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
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
  labelFormat: "{value}",
};

const Stacked = () => {
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
    <div className="flex flex-col">
      <div className="flex gap-2 text-green-500 hover:drop-shadow-xl justify-end">
        <div>
          <GoDotFill />
        </div>
        <div>Income Split</div>
      </div>
      <div className=" flex items-center justify-center">
        <ChartComponent
          width="320px"
          height="360px"
          id="charts"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[Legend, Category, ColumnSeries, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={dashboardData}
              xName="x"
              yName="y"
              type="Column"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Stacked;
