import { useEffect, useState } from 'react';
import employeeService from '../employees/EmployeeService';  // Assuming a service to fetch employee data
import { Employee } from '../../types/Employee';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const SalaryHistory = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await employeeService.getAllWithSalaries();
        setEmployees(data);
    }
    return (
        <>
            <Breadcrumb pageName="Salaries History" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto overflow-y-visible">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="border-t border-b border-stroke dark:border-strokedark text-left">
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                Staff Id
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                Name
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                Basic Salary
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                Salary Allowances
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                Additions
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                Deductions
                            </th>
                            <th className="min-w-[80px] py-4 px-4 font-medium dark:text-white cursor-pointer">
                                end-of-service
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium dark:text-white cursor-pointer text-center">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !employees.length ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-5">
                                        No data found.
                                    </td>
                                </tr>
                            )
                                : employees.map((employee) => (
                                    employee.Salaries.map((salary) => (
                                        
                                    <tr key={employee.id}>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-black dark:text-white">
                                                {employee.staffId}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-black dark:text-white">
                                                {employee.name}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-success">
                                                AED {employee.basicSalary}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-meta-3">
                                                AED {employee.salaryAllowances}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-meta-3">
                                            AED {salary.additions}

                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-meta-1">
                                            AED {salary.deductions}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">

                                            <div>
                                                <label
                                                    htmlFor="toggle1"
                                                    className="flex cursor-pointer select-none items-center"
                                                >
                                                    <div className="relative">
                                                        <input
                                                            type="checkbox"
                                                            id="toggle1"
                                                            className="sr-only"
                                                            
                                                        />
                                                        <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                                        <div
                                                            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${salary.isEndOfService && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                                                }`}
                                                        ></div>
                                                    </div>
                                                </label>
                                            </div>

                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-meta-5 text-center">
                                                AED {(employee.basicSalary + employee.salaryAllowances + salary.additions) - salary.deductions}
                                            </h5>
                                        </td>
                                    </tr>
                                    ))

                                ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center mt-4 mb-4">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {employees.length}
                    </span>{' '}
                    Entries
                </span>
            </div>
            </div>
        </>
    );
};

export default SalaryHistory;