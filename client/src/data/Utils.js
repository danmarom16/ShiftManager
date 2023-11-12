const HOURLYWAGE = 50;

export const calculateTotalAmount = (type, day, length) => {
  if (day === ("Friday" || "Saturday") && type === "Evening") {
    return length * 0.5 * HOURLYWAGE + length * 0.5 * (HOURLYWAGE * 1.5);
  } else if (day === "Saturday" && type === "Morning") {
    return length * HOURLYWAGE * 1.5;
  } else if (day === "Friday" && type === "Night") {
    return length * 1.5 * HOURLYWAGE;
  } else if (type === "Night") {
    return length * HOURLYWAGE * 1.25;
  } else return length * HOURLYWAGE;
};

export const formatShiftDataToFE = (jsonData) => {
  const formatedData = [];
  console.log(jsonData);
  jsonData.forEach((obj) => {
    const dateToArr = obj["date"].split("T")[0].split("-");
    const dateString = dateToArr[2] + "-" + dateToArr[1] + "-" + dateToArr[0];
    formatedData.push({
      Id: obj["_id"],
      Date: dateString,
      Day: obj["day"],
      Type: obj["type"],
      Length: obj["length"],
      TotalAmount:
        "₪" + calculateTotalAmount(obj["type"], obj["day"], obj["length"]),
    });
  });
  return formatedData;
};

export const formatShiftDataToBE = (shiftData) => {
  const dateToArr = shiftData["Date"].split("-");
  const dateString =
    dateToArr[2] + "-" + dateToArr[1] + "-" + dateToArr[0] + "T00:00:00Z";
  const formatedData = {
    _id: shiftData["Id"],
    date: new Date(dateString),
    day: shiftData["Day"],
    type: shiftData["Type"],
    length: shiftData["Length"],
  };
  return formatedData;
};

//   { date: new Date(Date.UTC(2023, 7, 17, 0, 0, 0)), day: "Monday", type: "Morning", length: 6 },
