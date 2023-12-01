import React, { useEffect } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from 'react';

const AddDialog = () => {
	const {
		postOneShift,
		formData,
		setFormData,
		setIsAddDialogOpen,
		forceUpdate,
		type,
		enterTime,
		exitTime,
	} = useStateContext();

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	useEffect(() => {
		setFormData({
			date: new Date(),
			day: days[new Date().getDay()],
			type: type,
			exitTime: exitTime,
			enterTime: enterTime,
		});
	}, []);

	const datePickerOnChange = (props) => {
		const tempDate = new Date(props.value);
		const day = String(tempDate.getDate()).padStart(2, '0');
		const month = String(tempDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
		const year = tempDate.getFullYear();
		const date = `${day}-${month}-${year}`;
		setFormData({ ...formData, date: date });
	};

	const dropDownDayOnChange = (props) => {
		const day = props.value;
		setFormData({ ...formData, day: day });
	};

	const onTimeChange = (props, startOrEnd) => {
		const time = props.text;
		if (startOrEnd === 'Enter') {
			setFormData({ ...formData, enterTime: time });
		}
		if (startOrEnd === 'Exit') {
			setFormData({ ...formData, exitTime: time });
		}
	};

	const addShift = async (e) => {
		e.preventDefault();
		const newData = formData;
		console.log(newData);
		setFormData(newData);
		postOneShift(newData);
		setIsAddDialogOpen(false);
		forceUpdate();
	};

	return (
		<div className='flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50'>
			<div
				className='flex flex-cols justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white'
				style={{ opacity: 1 }}>
				{/* Header component */}
				<h1 className='text-3xl font-extrabold tracking-tight text-slate-900'>
					{`Add New ${type} Shift`}
				</h1>
				{/* Form */}
				<div className='max-w-2xl mt-5'>
					<div className='p-5 bg-white rounded shadow-md'>
						<div className='flex items-center'>
							<div className='flex-1 max-w-6xl md:max-w-5xl'>
								<img
									src={process.env.PUBLIC_URL + '/register-img.jpg'}
									alt='Image'
								/>
							</div>
							<div className='flex-1'>
								<form>
									<div className='mb-10 p-2 border rounded'>
										<DatePickerComponent
											format='dd-MM-yyyy'
											placeholder='Enter Date'
											openOnFocus={true}
											change={datePickerOnChange}
											value={formData.date}
										/>
									</div>
									<div className='mb-10 p-2 border rounded '>
										<DropDownListComponent
											placeholder='Day'
											dataSource={[
												'Sunday',
												'Monday',
												'Tuesday',
												'Wednesday',
												'Thursday',
												'Friday',
												'Saturday',
											]}
											change={dropDownDayOnChange}
											value={formData.day}
										/>
									</div>
									<div className='mt-10 pl-2 pt-2.5 pb-4 pr-2 border rounded '>
										<TimePickerComponent
											format={'HH:mm'}
											step={5}
											value={formData.enterTime}
											placeholder='Enter Time'
											change={(props) => {
												onTimeChange(props, 'Enter');
											}}
										/>
									</div>
									<div className='mt-10 pl-2 pt-2.5 pb-4 pr-2 border rounded '>
										<TimePickerComponent
											format={'HH:mm'}
											step={5}
											placeholder='Exit Time'
											value={formData.exitTime}
											change={(props) => {
												onTimeChange(props, 'Exit');
											}}
										/>
									</div>
								</form>
							</div>
						</div>
						<div className='flex justify-between gap-10 mt-10'>
							<button
								className='w-full bg-red-600 text-white px-4 py-2 rounded-md'
								onClick={() => {
									setIsAddDialogOpen(false); // Close your custom dialog
								}}>
								Cancel
							</button>
							<button
								className='w-full bg-green-600 px-4 py-2 rounded-md text-white'
								onClick={addShift}>
								Add Shift
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddDialog;
