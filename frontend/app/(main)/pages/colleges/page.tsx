'use client';
import MyDataManager from "@/components/MyDataManager";
import { ICollege } from '@shared/models/College';
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useState } from "react";

const columns = [
    { selectionMode: "single", headerStyle: { width: '3em' } },
    { field: 'name', header: 'College Name', sortable: true }
];
const CollegePage = () => {

    const [selectedCollege, setSelectedCollege] = useState<ICollege | null>();

    const handleSelectionChange = (college: ICollege | null) => {
        setSelectedCollege(college);
    };

    const saveDialogContent = (
        <div>
            <div className="field">
                <label htmlFor="name">Name</label>
                <InputText
                    id="name"
                    value={selectedCollege?.name}
                    onChange={(e) => setSelectedCollege({ ...selectedCollege, name: e.target.value })}
                    required
                    autoFocus
                    className={classNames({
                        'p-invalid': !selectedCollege?.name
                    })}
                />
                {!selectedCollege?.name && <small className="p-invalid">Name is required.</small>}
            </div>
        </div>
    );
    return (
        <div className="grid">
            <MyDataManager<ICollege>
                apiurl="localhost:4000/api/collges"
                header="Colleges"
                columns={columns}
                saveDialogContent={saveDialogContent}
                selectedItem={selectedCollege || null}
                onSelectionChange={handleSelectionChange}
            />
        </div>
    );
}
export default CollegePage;