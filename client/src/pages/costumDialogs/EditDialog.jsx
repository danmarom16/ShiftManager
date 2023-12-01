import React, { useEffect } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../../contexts/ContextProvider';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

export const EditDialog = () => {
	const {
		dialogData,
		setDialogData,
		isEditDialogOpen,
		setIsEditDialogOpen,
		postEditShift,
		forceUpdate,
	} = useStateContext();

	const updateShift = (e) => {
		e.preventDefault();
		console.log(dialogData);
		postEditShift(dialogData);
		setIsEditDialogOpen(false);
		forceUpdate();
	};

	const datePickerOnChange = (props) => {
		const tempDate = new Date(props.value);
		const day = String(tempDate.getDate()).padStart(2, '0');
		const month = String(tempDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
		const year = tempDate.getFullYear();
		const date = `${day}-${month}-${year}`;
		const newData = {
			_id: dialogData._id,
			date: date,
			day: dialogData.day,
			type: dialogData.type,
			length: dialogData.length,
		};
		setDialogData(newData);
		console.log(dialogData);
	};

	const dropDownDayOnChange = (props) => {
		const day = props.value;
		const newData = {
			_id: dialogData._id,
			date: dialogData.date,
			day: day,
			type: dialogData.type,
			enterTime: dialogData.enterTime,
			exitTime: dialogData.exitTime,
		};
		setDialogData(newData);
	};

	const dropDownTypeOnChange = (props) => {
		const type = props.value;
		const newData = {
			_id: dialogData._id,
			date: dialogData.date,
			day: dialogData.Day,
			type: type,
			enterTime: dialogData.enterTime,
			exitTime: dialogData.exitTime,
		};
		setDialogData(newData);
	};

	const onTimeChange = (props, startOrEnd) => {
		const time = props.text;
		if (startOrEnd === 'Enter') {
			setDialogData({ ...dialogData, enterTime: time });
		}
		if (startOrEnd === 'Exit') {
			setDialogData({ ...dialogData, exitTime: time });
		}
	};

	return (
		<div className='flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50'>
			<div
				className=' w-96 flex flex-cols justify-center gap-8 flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white'
				style={{ opacity: 1 }}>
				<h1 className='text-3xl font-bold'>Shift Details:</h1>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-1'>
						<div>Date</div>
						<div className='p-1 border rounded'>
							<DatePickerComponent
								format='dd-MM-yyyy'
								value={dialogData.date}
								openOnFocus={true}
								change={datePickerOnChange}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<div>Day</div>
						<div className='p-1 border rounded'>
							<DropDownListComponent
								value={dialogData.day}
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
							/>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<div>Type</div>
						<div className='p-1 border rounded'>
							<DropDownListComponent
								value={dialogData.type}
								dataSource={['Morning', 'Evening', 'Night']}
								change={dropDownTypeOnChange}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<div>Enter Time</div>
						<div className='p-2 border rounded'>
							<TimePickerComponent
								format={'HH:mm'}
								step={5}
								value={dialogData.enterTime}
								placeholder='Enter Time'
								change={(props) => {
									onTimeChange(props, 'Enter');
								}}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<div>Exit Time</div>

						<div className='p-2 border rounded'>
							<TimePickerComponent
								format={'HH:mm'}
								step={5}
								value={dialogData.exitTime}
								placeholder='Exit Time'
								change={(props) => {
									onTimeChange(props, 'Exit');
								}}
							/>
						</div>
					</div>
					<div className='flex justify-between w-full gap-5'>
						<button
							className='w-full bg-red-600 text-white px-4 py-2 rounded-md'
							onClick={() => {
								setIsEditDialogOpen(false); // Close your custom dialog
							}}>
							Cancel
						</button>
						<button
							className='w-full bg-green-600 px-4 py-2 rounded-md text-white'
							onClick={updateShift}>
							Update Shift
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditDialog;
