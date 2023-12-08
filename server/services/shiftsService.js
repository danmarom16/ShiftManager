const getShiftLength = (startHour, endHour) => {
  const startTime = new Date(`2000-01-01T${startHour}:00`);
  const endTime = new Date(`2000-01-01T${endHour}:00`);
  if (startTime > endTime) {
    endTime.setDate(endTime.getDate() + 1);
  }
  const shiftLengthMillis = endTime - startTime;
  const totalHours = shiftLengthMillis / (60 * 60 * 1000);
  const roundedTotalHours = parseFloat(totalHours.toFixed(3));
  return roundedTotalHours;
};

const getShiftDay = (unformatedDate) => {
  const formatedDateString = unformatedDate.split("/").reverse().join("-");
  const dayOfWeek = new Date(formatedDateString).getDay();

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayOfWeek];
};

const getShiftType = (enterTime) => {
  if (enterTime >= "06:00" && enterTime <= "09:30") {
    return "Morning";
  } else if (enterTime >= "13:00" && enterTime <= "17:30") {
    return "Evening";
  } else if (enterTime >= "20:00" && enterTime <= "23:30") {
    return "Night";
  } else {
    return "Unknown";
  }
};

const formateDate = (dateString, delimeter) => {
  if (dateString.includes("T")) {
    dateString = dateString.split("T")[0];
    const datePartsArray = dateString.split(delimeter);
    const formatedDateString = datePartsArray.join("-") + "T00:00:00Z";
    const date = new Date(formatedDateString);
    console.log(date);
    return date;
  } else {
    const datePartsArray = dateString.split(delimeter).reverse();
    const formatedDateString = datePartsArray.join("-") + "T00:00:00Z";
    const date = new Date(formatedDateString);
    console.log(date);

    return date;
  }
};

export const shiftService = {
  formateDate,
  getShiftType,
  getShiftDay,
  getShiftLength,
};
