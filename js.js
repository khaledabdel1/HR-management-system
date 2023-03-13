'stricy mode';
let sectionEl = document.getElementById("org")
sectionEl.width = 20
sectionEl.style.backgroundColor =  "#539165";
console.log(sectionEl)
let allEmployee = [];
console.log(allEmployee)

function Employee(fullName,Department,Level,imageUrl,employeeId){
    
    this.fullName = fullName;
    this.Department = Department;
    this.Level = Level;
    this.imageUrl = imageUrl;
    this.employeeId = employeeId;
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
//all()
    function employeeIdCalc(){
    return Math.floor(1000 + Math.random() * 9000);
   
}

Employee.prototype.newrender = function() {
    let imgE1 = document.createElement('img');
    imgE1.src = this.imageUrl;
    imgE1.width = 200
    imgE1.height = 200
    sectionEl.appendChild(imgE1);

    let pE1 = document.createElement('h5');
    pE1.textContent = `Name: ${this.fullName} -ID : ${employeeIdCalc ()}`;
    pE1.style.color= "#FFFFFF";
    sectionEl.appendChild(pE1);
    
    
    let h5E1 = document.createElement('h5');
    h5E1.textContent = `Department: ${this.Department} - Level : ${this.Level} `
    h5E1.style.color= "#FFFFFF";
    sectionEl.appendChild(h5E1)

    let h5E2 = document.createElement('h5');
    h5E2.textContent = `${this.Salary} `
    h5E2.style.color= "#FFFFFF";
    sectionEl.appendChild(h5E2)
  
}
    

    
let foemIe = document.getElementById("fullname");
foemIe.addEventListener("submit",submitHolder);

function submitHolder (event){
    event.preventDefault();
    let eFullName = event.target.name.value;
    let eImage = event.target.image.value;
    
    let eDepartment = event.target.Department.value;
    let eLevel = event.target.level.value;
    
    
    let newEmployee = new Employee(eFullName,eDepartment,eLevel,eImage)
    newEmployee.newrender()
    saveData(allEmployee);
    
}

function renderAll(){
    for (let i = 0;i< allEmployee.length; i++){
        allEmployee[i].newrender();
      
      }
  }

  function saveData(data){
    let stringArr= JSON.stringify(data);
    localStorage.setItem('Employees', stringArr);
  }
  console.log("before saving in LS", allEmployee[-1])

  function getData(){
    let retrievedArr = localStorage.getItem('Employees');
   
    let objArray = JSON.parse(retrievedArr);
    if(objArray != null){

        allEmployee = [];

        for (let i = 0; i < objArray.length; i++) {
          new Employee(objArray[i].fullName, objArray[i].Department, objArray[i].Level, objArray[i].imageUrl)
        }
      }
    
      
  }  
  getData();
  renderAll();