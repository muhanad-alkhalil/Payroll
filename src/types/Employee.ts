import { Salary } from "./Salary";

export interface Employee {
    id: number,
    staffId: string,
    name: string,
    joiningDate: string,
    basicSalary: number,
    salaryAllowances: number,
    createdAt: string,
    updatedAt: string,
    Salaries: Salary[]
  }

export interface EmployeePayload {
    staffId: string,
    name: string,
    joiningDate: string,
    basicSalary: string,
    salaryAllowances: string,
  }