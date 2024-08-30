import { MyModel } from "@shared/models/MyModel";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

interface MyDataTableProps {
    apiurl?: string;
    header: string;
    columns: any[];
    onSelectionChange?: (item: MyModel | null) => void;
}

const MyDataTable = (props: MyDataTableProps) => {

    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filters, setFilters] = useState<DataTableFilterMeta>({});
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [selectedItem, setSelectedItem] = useState<MyModel | null>(null);
    const [showSaveDialog, setShowSaveDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [edit, setEdit] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        /*dataService().then((data) => {
            setData(data);
            setLoading(false);
        });*/
        //initFilters();
    });

    const saveItem = () => { }
    const deleteItem = () => { }

    const displayNewDialog = () => {
        setEdit(false);
        setSubmitted(false);
        setShowSaveDialog(true);
    };

    const hideSaveDialog = () => {
        setSubmitted(false);
        setEdit(false);
        setShowSaveDialog(false);
    };

    const saveDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" text onClick={hideSaveDialog} />
            <Button label="Save" icon="pi pi-check" text onClick={saveItem} />
        </>
    );

    const displayEditDialog = (item: MyModel) => {
        setSelectedItem(item);
        setEdit(true);
        setShowSaveDialog(true);
    };

    const hideDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const deleteDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" text onClick={hideDeleteDialog} />
            <Button label="Yes" icon="pi pi-check" text onClick={deleteItem} />
        </>
    );

    const displayDeleteDialog = (item: MyModel) => {
        setSelectedItem(item);
        setShowDeleteDialog(true);
    };

    const actionBodyTemplate = (rowData: MyModel) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => displayEditDialog(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => displayDeleteDialog(rowData)} />
            </>
        );
    };

    const onItemSelected = (e: any) => {
        const item = e.value as MyModel;
        setSelectedItem(item);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS }
        });
        setGlobalFilter('');
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };
        (_filters['global'] as any).value = value;
        setFilters(_filters);
        setGlobalFilter(value);
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Manage {props.header}</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={globalFilter} onChange={onGlobalFilterChange} placeholder="Search..." />
            </span>
        </div>
    );

    const startToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" severity="success" className=" mr-2" onClick={displayNewDialog} />
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className="col-12">
            <div className="card">
                <Toast ref={toast} />
                <Toolbar className="mb-4" start={startToolbarTemplate}></Toolbar>
                <DataTable
                    ref={dt}
                    value={data}
                    dataKey="_id"
                    selection={selectedItem}
                    selectionMode="single"
                    onSelectionChange={onItemSelected}
                    scrollable
                    style={{ tableLayout: 'fixed' }}
                    stripedRows
                    className="datatable-responsive"
                    paginator
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                    filters={filters}
                    loading={loading}
                    emptyMessage="No records found."
                    header={header}
                >
                    <Column
                        header="#"
                        body={(rowData, options) => options.rowIndex + 1}
                        style={{ width: '50px' }}
                    />
                    {props.columns.map((col, index) => (
                        <Column key={index} {...col} />
                    ))}
                    <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                </DataTable>
                <Dialog visible={showSaveDialog} style={{ width: '450px' }} header={edit ? "Edit Details" : "Create New"} modal className="p-fluid" footer={saveDialogFooter} onHide={hideSaveDialog}>
                </Dialog>
                <Dialog visible={showDeleteDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteDialogFooter} onHide={hideDeleteDialog}>
                    <div className="flex align-items-center justify-content-center">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {selectedItem && (
                            <span>
                                Are you sure you want to delete <b>{selectedItem._id}</b>?
                            </span>
                        )}
                    </div>
                </Dialog>
            </div>
        </div>


    );
};

export default MyDataTable;