import yargs from 'yargs';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
const baseURL = 'http://localhost:'+PORT; // Change this if your server is running on a different port

async function addEmployee(employee: any) {
  try {
    const response = await axios.post(`${baseURL}/employees`, employee);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

async function editEmployee(employee: any) {
  try {
    const response = await axios.put(`${baseURL}/employees/${employee.id}`, employee);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

async function deleteEmployee(id: any) {
  try {
    const response = await axios.delete(`${baseURL}/employees/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

async function listEmployees() {
  try {
    const response = await axios.get(`${baseURL}/employees`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

async function parseOptions() {
    return yargs(process.argv.slice(2))
      .command('add', 'Add a new employee', {
        id: { type: 'number', demandOption: true },
        name: { type: 'string', demandOption: true },
        lastName: { type: 'string', demandOption: true },
        post: { type: 'string', demandOption: true },
        department: { type: 'string', demandOption: true },
        salary: { type: 'number', demandOption: true }
      })
      .command('edit', 'Edit an existing employee', {
        id: { type: 'number', demandOption: true },
        name: { type: 'string' },
        lastName: { type: 'string' },
        post: { type: 'string' },
        department: { type: 'string' },
        salary: { type: 'number' }
      })
      .command('delete', 'Delete an existing employee', {
        id: { type: 'number', demandOption: true }
      })
      .command('list', 'List all employees')
      .help()
      .argv;
  }
  
  async function main() {
    const options = await parseOptions();
  
    if (options instanceof Promise) {
      // If options is a promise, wait for it to resolve
      const resolvedOptions = await options;
      executeCommand(resolvedOptions);
    } else {
      // If options is not a promise, execute the command directly
      executeCommand(options);
    }
  }
  
  function executeCommand(options: any) {
    const command = options._[0]; // Access the first positional argument as the command
  
    switch (command) {
      case 'add':
        addEmployee(options);
        break;
      case 'edit':
        editEmployee(options);
        break;
      case 'delete':
        deleteEmployee(options.id);
        break;
      case 'list':
        listEmployees();
        break;
      default:
        console.log('Invalid command.');
    }
  }
  
  main();