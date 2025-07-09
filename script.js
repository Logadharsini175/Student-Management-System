// script.js
const addStudentBtn = document.getElementById('add-student-btn');
const studentTableBody = document.getElementById('student-table-body');

addStudentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const gradeInput = document.getElementById('grade');
  
  const student = {
    name: nameInput.value,
    age: ageInput.value,
    grade: gradeInput.value
  };
  
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.grade}</td>
  `;
  studentTableBody.appendChild(row);
  
  nameInput.value = '';
  ageInput.value = '';
  gradeInput.value = '';
});
