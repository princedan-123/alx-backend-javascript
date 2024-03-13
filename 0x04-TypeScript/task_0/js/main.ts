
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

  const student1:Student = {
  firstName: 'Daniel',
  lastName: 'Prince',
  age: 25,
  location: 'Africa'
  }

  const student2:Student = {
  firstName: 'Ella',
  lastName: 'Queen',
  age: 23,
  location: 'Nigeria'
  }

  const studentsList:Student[] = [student1, student2]
  const table = document.createElement('table');
  studentsList.forEach((student) => {
    let tableRow = document.createElement('tr');
    let firstNameData = document.createElement('td');
    let locationData = document.createElement('td');
    firstNameData.textContent = student.firstName;
    locationData.textContent = student.location;
    tableRow.appendChild(firstNameData);
    tableRow.appendChild(locationData);
    document.body.appendChild(table);
  })
