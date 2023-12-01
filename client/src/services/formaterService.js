const formatToGrid = (data) => {
	for (const obj of data) {
		const formatedDate = obj.date.split('T')[0];
		obj.date = formatedDate;
	}
	return data;
};

export const formaterService = {
	formatToGrid,
};
