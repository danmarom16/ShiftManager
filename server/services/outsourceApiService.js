import axios from 'axios';

const getShabbatTimes = async (date) => {
	if (date != undefined) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&gy=${year}&gm=${month}&gd=${day}`;
		const shabbatHours = { start: '', end: '' };
		return axios
			.get(url)
			.then((res) => {
				const data = res.data.items;
				data.forEach((object) => {
					if (object.category === 'candles') {
						const timeString = object.date.split('T')[1].split('+')[0];
						const [hours, minutes] = timeString.split(':');
						shabbatHours.start = `${hours}:${minutes}`;
					}
					if (object.category === 'havdalah') {
						const timeString = object.date.split('T')[1].split('+')[0];
						const [hours, minutes] = timeString.split(':');
						shabbatHours.end = `${hours}:${minutes}`;
					}
				});
				return shabbatHours;
			})
			.catch((error) => {
				throw error;
			});
	}
};

export const outsourceApiService = {
	getShabbatTimes,
};
