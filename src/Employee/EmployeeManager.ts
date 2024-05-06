import Employee from "./Employee";

class EmployeeManager {
    employees: Employee[];

    constructor() {
        this.employees = [];
    }

    addEmployee(employee: Employee): void {
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        if (index !== -1) {
            this.employees[index] = employee;
        }else {
            this.employees.push(employee);
        }
    }

    editEmployee(id: number, updatedEmployee: Employee): void {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            this.employees[index] = updatedEmployee;
        }
    }

    deleteEmployee(id: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }

    listEmployees(): Employee[] {
        return this.employees;
    }
}

export default EmployeeManager;