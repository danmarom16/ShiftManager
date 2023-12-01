import axios from 'axios';

const getShabbatTimes = async (date) => {
	if (date != undefined) {
		const dateParts = date.split('-');
		const day = dateParts[0];
		const month = dateParts[1];
		const year = dateParts[2];
		const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&gy=${year}&gm=${month}&gd=${day}`;
		const shabbatHours = { start: '', end: '' };
		return axios
			.get(url)
			.then((res) => {
				const data = res.data.items;
				data.forEach((object) => {
					if (object.category === 'candles') {
						shabbatHours.start = object.date.split('T')[1].split('+')[0];
					}
					if (object.category === 'havdalah') {
						shabbatHours.end = object.date.split('T')[1].split('+')[0];
					}
				});
				return shabbatHours;
			})
			.catch((error) => {
				throw error;
			});
	}
};

export const OutsourceApiService = {
	getShabbatTimes,
};
