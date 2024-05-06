import * as bodyParser  from 'body-parser';
import * as express from 'express';
import * as dotenv from 'dotenv';
import EmployeeManager from './Employee/EmployeeManager';
import EmployeesController from './Employee/EmployeeController';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const employeeManager = new EmployeeManager();
const employeesController = new EmployeesController(employeeManager);

app.post('/employees', (req, res) => employeesController.addEmployee(req, res));
app.put('/employees/:id', (req, res) => employeesController.editEmployee(req, res));
app.delete('/employees/:id', (req, res) => employeesController.deleteEmployee(req, res));
app.get('/employees', (req, res) => employeesController.listEmployees(req, res));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});