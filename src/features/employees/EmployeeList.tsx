import { useState, useEffect } from 'react';
import employeeService from './EmployeeService';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import EmployeeListHeader from './EmployeeListHeader';
import { Employee } from '../../types/Employee';
import EmployeeListTable from './EmployeeListTable';
import EmployeeListFooter from './EmployeeFooter';
import EmployeeDialog from './EmployeeDialog';

const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editEmployee, setEditEmployee] = useState<Employee | null>(null);


    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await employeeService.getAll();
        setEmployees(data);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleEdit = (employee: Employee) => {
        setEditEmployee(employee);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.staffId.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );




    return (
        <>
            <Breadcrumb pageName="Employees" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <EmployeeListHeader onSearch={handleSearch} onActionSuccess={fetchEmployees} />
                <EmployeeListTable employees={filteredEmployees} onEdit={handleEdit} />
                <EmployeeListFooter employees={filteredEmployees} />
                {
                    editEmployee && (
                        <EmployeeDialog
                            isOpen={Boolean(editEmployee)}
                            closeModal={() => setEditEmployee(null)}
                            onActionSuccess={() => {
                                fetchEmployees();
                                setEditEmployee(null);
                            }}
                            employeeToUpdate={editEmployee}
                        />
                    )
                }
            </div>
        </>
    );
};

export default EmployeeList;
