function objectTest()
{
  let display = document.getElementById("object-content");
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let age = document.getElementById("age").value;
  let job = document.getElementById("job").value;

  let personObj = new Employee(firstName, lastName, age);
  let employeeObj = new Employee(firstName, lastName, age, job);
  {
    display.innerHTML += "Parent Person Object: " + JSON.stringify(personObj) + "<br />";
    display.innerHTML += "Employee Object with inherited properties plus new occupation property: " + JSON.stringify(employeeObj) + "<br />";
    display.setAttribute("style", "visibility: visible;");
  }
}

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

function Employee(first, last, age, job) {
  Person.call(this, first, last, age);
  this.occupation = job;
}
