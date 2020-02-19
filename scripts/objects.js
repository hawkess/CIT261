function objectTest()
{
  var display = document.getElementById("object-content");
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var age = document.getElementById("age").value;
  var job = document.getElementById("job").value;

  var personObj = new Employee(firstName, lastName, age);
  var employeeObj = new Employee(firstName, lastName, age, job);
  {
    display.innerHTML += JSON.stringify(personObj) + "<br />";
    display.innerHTML += JSON.stringify(employeeObj) + "<br />";
    display.setAttribute("style", "visibility: visible;");
  }
}

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

function Employee(first, last, age, job) {
  Person.call(first, last, age);
  this.occupation = job;
}
