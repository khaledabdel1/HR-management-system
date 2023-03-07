'strict mode';
const khaled = [];

function Employee (employeeId,fullName,department,level,imageURL){
    this.employeeId = employeeId;
    this.fullName = fullName,
    this.department = department,
    this.Level = level,
    this.imageURL = imageURL,
    
    khaled.push(this);
}

Employee.prototype.salary = function (){
    if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        this.netsalary = Math.floor(this.salary - (this.salary * 0.075));
        return this.netsalary ;
    } else if (this.level == "Mid-Senior"){
        this.salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        this.netsalary = Math.floor(this.salary - (this.salary * 0.075));
        return this.netsalary ;
    } else if (this.level == "Junior"){
        this.salary = Math.floor(Math.random() * (1000 - 500) ) + 500;
        this.netsalary = Math.floor(this.salary - (this.salary * 0.075));
        return this.netsalary ;
}
}

const ghaziSamer  = new Employee(1000,"Ghazi Samer" , "Administration" , "Senior" );

const lanaAli  = new Employee(1001,"Lana Ali" , "Finance" ,"Junior" );

const tamaraAyoub = new Employee(1002,"Tamara Ayoub" , "Marketing" ,"Senior" );

const safiWalid = new Employee(1003,"Safi Walid" , "Administration" , "Mid-Senior");

const omarZaid = new Employee(1004,"Omar Zaid" , "Development" ,"Senior" );

const ranaSaleh = new Employee(1005,"Rana Saleh" , "Development" ,"Junior" );

const hadiAhmad = new Employee(1006,"Hadi Ahmad" , "Finance" , "Mid-Senior" );

Employee.prototype.showInfo=function() {
    document.write( `Emplyee Name is : ${this.fullName},and his Salary is :  ${this.salary()} <br>`);
}

let table =  `<table border = 1> <tr> <th>ID</th><th>Name</th> <th>Salary</th><th>Department</th><th>Level</th> </tr>` ;
for (const key in khaled) {

    table+=`<tr><td>${khaled[key].emplyeeId}</td> <td>${khaled[key].fullName}</td> <td>${khaled[key].salary()}</td><td>${khaled[key].department}</td><td>${khaled[key].level}</td></tr>`;

}
document.write(table);