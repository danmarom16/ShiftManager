const formatToGrid = (data) => {
  for (const obj of data) {
    const formatedDate = obj.date.split("T")[0];
    let dateParts = formatedDate.split("-").reverse();
    obj.date = dateParts.join("-");
  }
  return data;
};

const formateFilteredData = (rawFilteredShiftsData) => {
  const toRetData = [];
  for (const rawShift of rawFilteredShiftsData) {
    toRetData.push(rawShift.data);
  }
  return toRetData;
};

export const formaterService = {
  formatToGrid,
  formateFilteredData,
};
