import React, { useState, useEffect, useRef } from 'react';
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
	Toolbar,
} from '@syncfusion/ej2-react-grids';
import { shiftsGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import AddDialog from './costumDialogs/AddDialog';
import EditDialog from './costumDialogs/EditDialog';
import DeleteDialog from './costumDialogs/DeleteDialog';
import UploadCsvDialog from './costumDialogs/UploadCsvDialog';
import TypeDialog from './costumDialogs/TypeDialog';
import {DataUtil} from '@syncfusion/ej2-data'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const ACTION_TYPE = {
	ADD: 'add',
	EDIT: 'beginEdit',
	DELETE: 'delete',
};


const ShiftsTable = () => {
	const {
		shiftsData,
		getAllShiftData,
		isEditDialogOpen,
		setIsEditDialogOpen,
		dialogData,
		setDialogData,
		toDeleteData,
		setToDeleteData,
		isAddDialogOpen,
		setIsAddDialogOpen,
		isDeleteDialogOpen,
		setIsDeleteDialogOpen,
		uploadCsvHandler,
		isCsvUploadDialogOpen,
		setIsCsvUploadDialogOpen,
		isTypeDialogOpen,
		setIsTypeDialogOpen,
	} = useStateContext();


	const gridRef = useRef(null);
	
		const selectionsettings = {
		type: 'Multiple',
		mode: 'Both',
	};

	const toolbarOptions = [
		{ text: 'Add' },
		{ text: 'Edit' },
		{ text: 'Delete' },
		{
			text: 'Upload CSV File',
			tooltipText: 'Upload CSV File',
			prefixIcon: 'e-add',
			id: 'csv_upload',
		},
	];

	const editing = {
		allowAdding: true,
		allowDeleting: true,
		allowEditing: true,
		mode: 'Dialog',
	};

	const filtering = {
		type: 'Menu'
	}

	const paging = {
		pageSize: 20
	}
	
	const toolbarClickHandler = (args) => {
		if (args.item.properties.id === 'csv_upload') {
			setIsCsvUploadDialogOpen(true);
		}
	};


	const onTypeFilterChange = (args) => {
		gridRef && gridRef.filteredByColumn('type', 'equal', args.value)
	}

	const filteredTypeTemplate = (props) => {
		const types = DataUtil.distinct(shiftsData, 'type');
		return <DropDownListComponent dataSource={types} change={onTypeFilterChange}/>

	}
	const onActionBegin = (args) => {
		console.log(args)
		if (args.requestType === ACTION_TYPE.EDIT) {
			args.cancel = true;
			setDialogData(args.rowData);
			setIsEditDialogOpen(true);
		}
		if (args.requestType === ACTION_TYPE.ADD) {
			args.cancel = true;
			setIsTypeDialogOpen(true);
		}
		if (args.requestType === ACTION_TYPE.DELETE) {
			args.cancel = true;
			setToDeleteData(args.data);
			setIsDeleteDialogOpen(true);
		}
	};

	useEffect(() => getAllShiftData(), []);

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header
				category='Page'
				title='Shifts Table'
			/>
			<div className='overflow-y-auto' style={{height:"70vh"}}>
			<GridComponent
			id='gridcomp'
			ref={grid => gridRef.current = grid}
			dataSource={shiftsData}
			allowPaging
			allowSorting
			allowSelection
			allowFiltering
			selectionSettings={selectionsettings}
			pageSettings={paging}
			filterSettings={filtering}
			editSettings={editing}
			toolbar={toolbarOptions}
			toolbarClick={toolbarClickHandler}
			actionBegin={onActionBegin}>
			<ColumnsDirective>
				{shiftsGrid.map((item, index) => (
					<ColumnDirective
						key={index}
						{...item}
					/>
				))}
			</ColumnsDirective>
			<Inject
				services={[
					Resize,
					Sort,
					ContextMenu,
					Filter,
					Page,
					ExcelExport,
					Edit,
					PdfExport,
					Toolbar,
				]}
			/>
		</GridComponent>
			</div>
			{isEditDialogOpen && <EditDialog />}
			{isTypeDialogOpen && <TypeDialog />}
			{isAddDialogOpen && <AddDialog />}
			{isDeleteDialogOpen && <DeleteDialog />}
			{isCsvUploadDialogOpen && <UploadCsvDialog />}
		</div>
	);
};

export default ShiftsTable;
