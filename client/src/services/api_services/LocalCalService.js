const calPercentage = (oldValue, newValue) => {
	let val = 0;
	if (oldValue == 0) {
		val = newValue * 100;
	} else {
		val = ((newValue - oldValue) / oldValue) * 100;
	}
	val = val.toFixed(0);
	if (oldValue < newValue) {
		return { val: val, type: '+' };
	} else if (oldValue > newValue) {
		return { val: val, type: '-' };
	} else if (oldValue == newValue) {
		return { val: val, type: '=' };
	} else {
		return { val: 'Error', type: 'err' };
	}
};

export const LocalCalService = { calPercentage };
