import { Employee } from '../../types/Employee';

const EmployeeListTable: React.FC<{employees:Employee[], onEdit: (employee: Employee) => void}> = ({employees, onEdit}) => {
    return (
        <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm text-center bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
            <div className=" p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Name
                </h5>
            </div>
            <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Staff Id
                </h5>
            </div>
            <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                    joining Date
                </h5>
            </div>
            <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                    basic Salary
                </h5>
            </div>
            <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Salary Allowance
                </h5>
            </div>
            <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Actions
                </h5>
            </div>
            
        </div>

        {employees.map((e, key) => (
            <div
                className={`grid grid-cols-3 sm:grid-cols-6 ${key === employees.length - 1
                        ? ''
                        : 'border-b border-stroke dark:border-strokedark'
                    }`}
                key={key}
            >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                        <img className='w-10' src="src/assets/images/employee.png" alt="e" />
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">
                        {e.name}
                    </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">{e.staffId}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">{e.joiningDate}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">AED {e.basicSalary}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-5">AED {e.salaryAllowances}</p>
                </div>
                
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <button
                    className='bg-white hover:bg-gray-100 text-zinc-500 py-2 px-4 border border-zinc-300 rounded shadow hover:bg-slate-100'
                    onClick={() => onEdit(e)}
                    >Edit</button>
                </div>
            </div>
        ))}
    </div>
    );
  };
  
  export default EmployeeListTable;  

