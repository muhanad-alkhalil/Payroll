import { Employee } from "../../types/Employee";

const EmployeeListFooter: React.FC<{employees:Employee[]}> = ({employees}) => {
    return (
        <div className="flex flex-col items-center mt-4 mb-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
                {employees.length}
            </span>{' '}
            Entries
        </span>
    </div>
    );
  };
  
  export default EmployeeListFooter;  