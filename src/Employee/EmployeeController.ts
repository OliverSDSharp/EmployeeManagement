import { Request, Response } from 'express';
import Employee from './Employee';
import EmployeeManager from './EmployeeManager';

class EmployeesController {
    private employeeManager: EmployeeManager;

    constructor(employeeManager: EmployeeManager) {
        this.employeeManager = employeeManager;
    }

    addEmployee(req: Request, res: Response): void {
        const employeeData: Employee = req.body;
        const employee = new Employee(employeeData.id, employeeData.name, employeeData.lastName, employeeData.post, employeeData.department, employeeData.salary);
        this.employeeManager.addEmployee(employee);
        res.status(201).send("Employee added successfully.");
    }

    editEmployee(req: Request, res: Response): void {
        const id: number = parseInt(req.params.id);
        const updatedEmployeeData: Employee = req.body;
        const updatedEmployee = new Employee(updatedEmployeeData.id, updatedEmployeeData.name, updatedEmployeeData.lastName, updatedEmployeeData.post, updatedEmployeeData.department, updatedEmployeeData.salary);
        this.employeeManager.editEmployee(id, updatedEmployee);
        res.status(200).send("Employee updated successfully.");
    }

    deleteEmployee(req: Request, res: Response): void {
        const id: number = parseInt(req.params.id);
        this.employeeManager.deleteEmployee(id);
        res.status(200).send("Employee deleted successfully.");
    }

    listEmployees(req: Request, res: Response): void {
        const employees = this.employeeManager.listEmployees();
        res.status(200).json(employees);
    }
}

export default EmployeesController;