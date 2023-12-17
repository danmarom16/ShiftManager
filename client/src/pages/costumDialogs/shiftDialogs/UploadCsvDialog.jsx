import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../../../contexts/ContextProvider';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { csvUploadService } from '../../../services/file_upload_service/CsvUploadService';

const UploadCsvDialog = () => {
	const {
		isCsvUploadDialogOpen,
		setIsCsvUploadDialogOpen,
		forceUpdate,
		loadFile,
	} = useStateContext();

	const handleUpload = (args) => {
		loadFile(args);
		setIsCsvUploadDialogOpen(false);
	};

	const onSelect = (args) => {
		args.cancel = true;
		handleUpload(args);
	};

	const handleBeforeUpload = (args) => {
		args.cancel = true;
	};

	return (
		<div className='flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50'>
			<div
				className='flex flex-cols gap-10 justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white'
				style={{ opacity: 1 }}>
				<h1 className='text-3xl font-extrabold tracking-tight text-slate-900'>
					Please Upload you shifts CSV file
				</h1>
				<div className='items-center'>
					<div>
						<UploaderComponent
							asyncSettings={csvUploadService.path}
							multiple={false}
							allowedExtensions='.csv'
							uploading={handleUpload}
							selected={onSelect}
							beforeUpload={handleBeforeUpload}
						/>
					</div>
					<div className='max-w-xl md:max-w-xl'>
						<img
							src={process.env.PUBLIC_URL + '/register-img.jpg'}
							alt='Image'
						/>
					</div>
					<button
						className='w-full border rounded-lg bg-red-600 text-white text-xl p-3'
						onClick={() => {
							setIsCsvUploadDialogOpen(false);
						}}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadCsvDialog;
