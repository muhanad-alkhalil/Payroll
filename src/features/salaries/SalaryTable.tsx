import { useEffect, useState } from "react";
import { Employee } from "../../types/Employee";

const SalaryTable: React.FC<{ employees: Employee[] }> = ({ employees }) => {
    const [salaryData, setSalaryData] = useState<{ id: number, additions: number, deductions: number }[]>(employees.map(employee => ({
        id: employee.id,
        additions: employee.Salaries[0]?.additions || 0,
        deductions: employee.Salaries[0]?.deductions || 0
    })));

    const handleAdditionsChange = (id: number, value: number) => {
        setSalaryData(salaryData.map(data =>
            data.id === id ? { ...data, additions: +value } : data
        ));
    };

    const handleDeductionsChange = (id: number, value: number) => {
        setSalaryData(salaryData.map(data =>
            data.id === id ? { ...data, deductions: +value } : data
        ));
    };

    useEffect(() => {
        setSalaryData(employees.map(employee => ({
            id: employee.id,
            additions: employee.Salaries[0]?.additions || 0,
            deductions: employee.Salaries[0]?.deductions || 0
        })));
    }, [employees]);

    const getTotal = (employee: Employee) => {
        const data = salaryData.find(data => data.id === employee.id);
        if (!data) {
            return (employee.basicSalary + employee.salaryAllowances);
        }
        return (employee.basicSalary + employee.salaryAllowances + +data.additions) - +data.deductions;
    };



    return (
        <>
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
                                                AED <input className="w-20 border-[1.5px] border-zinc-100 rounded-sm" type="text"
                                                    value={salaryData.find(data => data.id === employee.id)?.additions || 0}
                                                    onChange={(e) => handleAdditionsChange(employee.id, +e.target.value)}
                                                />
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-meta-1">
                                                AED <input className="w-20 border-[1.5px] border-zinc-100 rounded-sm" type="text"
                                                    value={salaryData.find(data => data.id === employee.id)?.deductions || 0}
                                                    onChange={(e) => handleDeductionsChange(employee.id, +e.target.value)}
                                                />
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
                                                            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${employee.Salaries[0].isEndOfService && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                                                }`}
                                                        ></div>
                                                    </div>
                                                </label>
                                            </div>

                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <h5 className="font-medium text-meta-5 text-center">
                                                AED {getTotal(employee)}
                                            </h5>
                                        </td>
                                    </tr>
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
        </>
    );
};

export default SalaryTable;