import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Pie from "../Pie";

function LastMonthDiv() {
  const { currentMonthRevenue } = useStateContext();
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 font-semibold text-xl pb-10 pt-2">
        Earning Statistics
      </div>
      <div className="flex flex-col items-center justify-center border-r-1 border-color">
        <div>
          <span className="text-3xl font-semibold">
            {"₪" + currentMonthRevenue.revenue}
          </span>
          <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
            {currentMonthRevenue.percentage.val + "%"}
          </span>
        </div>
        <div className="text-gray-500 mt-1">Last Month Revenue</div>
        <Pie />
      </div>
    </div>
  );
}

export default LastMonthDiv;
