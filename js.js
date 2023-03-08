'stricy mode';
const allEmployee = [];
console.log(allEmployee)
function Employee(employeeId,fullName,Department,Level,imageUrl){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.Department = Department;
    this.Level = Level;
    this.imageUrl = imageUrl
    this.Salary = 0
    allEmployee.push(this)
} 

let GhaziSamer = new Employee("1000","Ghazi Samer","Administration","Senior",);
let LanaAli = new Employee("1001","Lana Ali","Finance","Senior",);
let TamaraAyoub = new Employee("1002","Tamara Ayoub","Marketing","Senior",);
let SafiWalid = new Employee("1003","Safi Walid","Administration","Mid-Senior",);
let OmarZaid = new Employee("1004","Omar Zaid","Development","Senior",);
let RanaSaleh = new Employee("1005","Rana Saleh","Development","Junior",);
let HadiAhmad = new Employee("1006","Hadi Ahmad","Finance","Mid-Senior",);

Employee.prototype.salaryCalc = function (){
        if(this.level=='Junior'){
            this.salary = Math.floor(Math.random() * (1000 - 500) ) + 500;
        }
        else if(this.level=='midSenior'){
            this.salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        }
        else {
            this.salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        }
        this.salary = this.salary * (1-0.075)
        }

Employee.prototype.render = function (){
    document.write (`<h1>Name is : ${this.fullName} and his salary is ${this.salary}</h1>` )
}

function all() {
for (i = 0; i < allEmployee.length; i++) {
    allEmployee[i].salaryCalc();
    allEmployee[i].render();
}
}
all()