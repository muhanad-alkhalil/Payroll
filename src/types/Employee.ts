export interface Employee {
    id: number,
    staffId: string,
    name: string,
    joiningDate: string,
    basicSalary: string,
    salaryAllowances: string,
    createdAt: string,
    updatedAt: string,
  }

export interface EmployeePayload {
    staffId: string,
    name: string,
    joiningDate: string,
    basicSalary: string,
    salaryAllowances: string,
  }