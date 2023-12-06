import React, { useEffect } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Pie from "../Pie";
import { GoDotFill } from "react-icons/go";
import Button from "../../Button";
import Stacked from "../../Charts/Stacked";
import LastMonthDiv from "./LastMonthDiv";
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
    <div className="flex flex-col gap-5 max-w-4xl items-center justify-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:mx-auto">
      <div className="flex flex-wrap items-center justify-center w-full">
        <div className="flex-1">
          <LastMonthDiv/>
        </div>
        <div className="flex-1 ">
          <Stacked/>
        </div>
      </div>
      <div className="mt-10">
        <Button
          color="white"
          bgColor={currentColor}
          text="Downlaod Report"
          borderRadius="10px"
          type="button"
        />
      </div>
    </div>
  );
};

export default EarningsStatistics;
