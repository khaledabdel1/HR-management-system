let table = document.getElementById("table")

renderTable();

function renderTable() {
    let trEl = document.createElement('tr');
    table.appendChild(trEl);

    let departmentName = document.createElement('td')
    departmentName.textContent = ;
    trEl.appendChild(departmentName);

    let numberOFEmployees  = document.createElement('td')
    numberOFEmployees.textContent = ;
    trEl.appendChild(numberOFEmployees);

    let averageSalary = document.createElement('td')
    averageSalary.textContent = ;
    trEl.append(averageSalary);

    let totalSalary = document.createElement('td');
    totalSalary.textContent = ;
    trEl.append(totalSalary);

}

functiongetFromLocalStorage() {
    let reData = localStorage.getItem('employees');
    let objArr = JSON.parse(reData);
    return objArr

    }
    let allArr = getFromLocalStorage();