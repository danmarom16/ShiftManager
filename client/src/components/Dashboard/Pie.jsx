import React, { useEffect } from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { dashboardCardsData, dashboardPieData, getDashboardPieChartData } =
    useStateContext();

  useEffect(async () => {
    await getDashboardPieChartData();
  }, [dashboardCardsData]);

  const palettes = ["#FAA819", "#38BAC6", "#0098FF"];

  // ANIMATE
  return (
    <div>
      <AccumulationChartComponent
        tooltip={{ enable: true }}
        legendSettings={{ position: "Bottom" }}
        height="360px"
        width="320px"
      >
        <Inject
          services={[
            PieSeries,
            AccumulationDataLabel,
            AccumulationLegend,
            AccumulationTooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            startAngle={0}
            endAngle={360}
            palettes={palettes}
            innerRadius="50%"
            type="Pie"
            dataSource={dashboardPieData}
            xName="name"
            yName="value"
            dataLabel={{ visible: true, name: "text", position: "Inside" }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
