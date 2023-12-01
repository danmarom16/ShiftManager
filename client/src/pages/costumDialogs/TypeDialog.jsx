import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { MdNightlight } from 'react-icons/md';
import { GoSun } from 'react-icons/go';
import { TiWeatherPartlySunny } from 'react-icons/ti';

// TODO - MAKE ALL DIVS SAME SIZE
const TypeDialog = () => {
	const {
		setIsTypeDialogOpen,
		setType,
		setIsAddDialogOpen,
		setEnterTime,
		setExitTime,
	} = useStateContext();


	const ShiftType = {
		Night: 'Night',
		Evening: 'Evening',
		Morning: 'Morning',
	};

	const ShiftMode = {
		Enter: 'Enter',
		Exit: 'Exit',
	};

	const getDefaultValue = (chosenType, enterOrExit) => {
		console.log(chosenType);
		console.log(enterOrExit);
		let timeToReturn = '';
		if (enterOrExit === ShiftMode.Enter) {
			if (chosenType === ShiftType.Morning) {
				timeToReturn = '07:00';
			} else if (chosenType === ShiftType.Evening) {
				timeToReturn = '15:00';
			} else if (chosenType === ShiftType.Night) {
				timeToReturn = '23:00';
			} else {
				timeToReturn = '12:00';
			}
		} else if (enterOrExit === ShiftMode.Exit) {
			if (chosenType === ShiftType.Morning) {
				timeToReturn = '15:00';
			} else if (chosenType === ShiftType.Evening) {
				timeToReturn = '23:00';
			} else if (chosenType === ShiftType.Night) {
				timeToReturn = '07:00';
			} else {
				timeToReturn = '12:00';
			}
		}
		console.log(
			`Returning ${timeToReturn}, type is: ${chosenType}, enter\exit: ${enterOrExit}`
		);
		return timeToReturn;
	};

	const selectType = (chosenType) => {
		setType(chosenType);
		setEnterTime(getDefaultValue(chosenType, 'Enter'));
		setExitTime(getDefaultValue(chosenType, 'Exit'));
		setIsTypeDialogOpen(false);
		setIsAddDialogOpen(true);
	};

	return (
		<div className='flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50'>
			<div
				className='gap-10 flex justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white w-1/2'
				style={{ opacity: 1 }}>
				<h1 className='text-3xl font-bold tracking-tight text-slate-900'>
					Select Shift Type:
				</h1>
				<div className='flex items-center rounded shadow-md bg-gray-50'>
					<div
						className='flex flex-1  flex-col p-5 items-center gap-10 hover:bg-gray-100 border rounded'
						onClick={() => {
							selectType('Morning');
						}}>
						<div className='text-xl'>Morning</div>
						<div className='text-3xl'>
							<GoSun />
						</div>
					</div>
					<div
						className='flex flex-1  flex-col p-5 items-center gap-10 hover:bg-gray-100 border rounded'
						onClick={() => {
							selectType('Evening');
						}}>
						<div className='text-xl'>Evening</div>
						<div className='text-3xl'>
							<TiWeatherPartlySunny />
						</div>
					</div>
					<div
						className='flex flex-1 flex-col p-5 items-center gap-10 hover:bg-gray-100 border rounded'
						onClick={() => {
							selectType('Night');
						}}>
						<div className='text-xl'>Night</div>
						<div className='text-3xl'>
							<MdNightlight />
						</div>
					</div>
				</div>
				<button
					className='w-full border p-2 bg-red-500 text-white rounded-lg font-semibold'
					onClick={() => {
						setIsTypeDialogOpen(false);
					}}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default TypeDialog;
