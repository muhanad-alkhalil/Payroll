import { useState } from "react";
import EmployeeDialog from "./EmployeeDialog";

const EmployeeListHeader:React.FC<{ onSearch: (term: string) => void, onActionSuccess : () => void }> = ({ onSearch, onActionSuccess }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
            <input
                type="text"
                className="w-full sm:w-60 md:w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                placeholder="Search by Staff Id, Name"
                onChange={(e) => onSearch(e.target.value)}
                />
        </div>

        <div className="flex items-center space-x-4">
            <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                onClick={() => setIsDialogOpen(true)}
                >
                New Employee
            </button>
            <EmployeeDialog
                isOpen={isDialogOpen}
                closeModal={() => setIsDialogOpen(false)}
                onActionSuccess={() => onActionSuccess()}
            />
        </div>
    </div>
    );
  };
  
  export default EmployeeListHeader;  