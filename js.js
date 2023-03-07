'strict mode';
const allemployee = [];

function Employee (employeeId,fullName,department,level,imageUrl){
    this.employeeId = employeeId;
    this.fullName = fullName,
    this.department = department,
    this.Level = level,
    this.imageUrl = imageUrl,
    allemployee.push(this);
}

Employee.prototype.salary = function (){
    if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        
        return this.salary ;
    } else if (this.level == "Mid-Senior"){
        this.salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        
        return this.salary ;
    } else if (this.level == "Junior"){
        this.salary = Math.floor(Math.random() * (1000 - 500) ) + 500;
        ;
        return this.salary ;
}
}

let ghaziSamer  = new Employee(1000,"Ghazi Samer" , "Administration" , "Senior" );

let lanaAli  = new Employee(1001,"Lana Ali" , "Finance" ,"Junior" );

let tamaraAyoub = new Employee(1002,"Tamara Ayoub" , "Marketing" ,"Senior" );

let safiWalid = new Employee(1003,"Safi Walid" , "Administration" , "Mid-Senior");

let omarZaid = new Employee(1004,"Omar Zaid" , "Development" ,"Senior" );

let ranaSaleh = new Employee(1005,"Rana Saleh" , "Development" ,"Junior" );

let hadiAhmad = new Employee(1006,"Hadi Ahmad" , "Finance" , "Mid-Senior" );

Employee.prototype.rednder=function() {
    document.write( `<h1>Emplyee : ${this.fullName}, salary: ${this.salary()}<h1>`);
}

ghaziSamer.rednder()
lanaAli.rednder() 
tamaraAyoub.rednder()
safiWalid.rednder()
omarZaid.rednder()
ranaSaleh.rednder()
hadiAhmad.rednder()
ghaziSamer.salary()  