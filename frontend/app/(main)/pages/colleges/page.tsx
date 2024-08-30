'use client';
import MyDataTable from "@/components/MyDataTable";
import { ICollege } from '@shared/models/College';

const columns = [
    { selectionMode: "single", headerStyle: { width: '3em' } },
    { field: 'name', header: 'College Name', sortable: true }
];
const CollegePage = () => {
    return (
        <div className="grid">
            <MyDataTable
                header="Colleges"
                columns={columns}
            />
        </div>
    );
}
export default CollegePage;