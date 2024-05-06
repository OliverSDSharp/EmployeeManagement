class Employee {
    id: number;
    name: string;
    lastName: string;
    post: string;
    department: string;
    salary: number;

    constructor(id: number, name: string, lastName: string, post: string, department: string, salary: number) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.post = post;
        this.department = department;
        this.salary = salary;
    }
}

export default Employee;