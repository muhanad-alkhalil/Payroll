export interface Salary {
    id: number,
    month: number,
    year: number,
    additions: number,
    deductions: number,
    isEndOfService: boolean,
    createdAt: string,
    updatedAt: string,
    EmployeeId: number,
}

export interface SalaryDate {
    month: number,
    year: number
}