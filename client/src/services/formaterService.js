const formatToGrid = (data) => {
	for (const obj of data) {
		const formatedDate = obj.date.split('T')[0];
		let dateParts = formatedDate.split("-").reverse();
		obj.date = dateParts.join("-");
	}
	return data;
};

export const formaterService = {
	formatToGrid,
};
