import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import employeeService from '../employees/EmployeeService';  // Assuming a service to fetch employee data
import SalaryTable from "./SalaryTable";
import { Employee } from "../../types/Employee";
import SalaryFilter from "./SalaryFilter";
import { SalaryDate } from "../../types/Salary";

const Salaries = () => {
    const [currentDate, setCurrentDate] = useState<SalaryDate>({ month: new Date().getMonth() + 1, year: new Date().getFullYear() });
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await employeeService.getAllWithSalaries();
        setEmployees(data);
    }
    

    const filteredEmployees = employees.filter(employee =>
        employee.Salaries && employee.Salaries.some(salary => 
            salary.month === +currentDate.month && salary.year === +currentDate.year
        )
    );

    return (
        <>
            <Breadcrumb pageName="Salaries" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <SalaryFilter currentDate={currentDate} onDateChange={setCurrentDate} />
                <SalaryTable employees={filteredEmployees} />
            </div>
        </>
    );
}
export default Salaries;