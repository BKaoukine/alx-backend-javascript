interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student_1: Student = {
	firstName: "Hdidan",
	lastName: "lme3za",
	age: 20,
	location: "New York",
};

const student_2: Student = {
	firstName: "wawi",
	lastName: "Moo",
	age: 21,
	location: "Paris",
};

const studentList: Student[] = [student_1, student_2];

function renderTable(studentList: Student[]) {
	const table = document.createElement("table");

	studentList.forEach((student) => {
		const row: HTMLTableRowElement = document.createElement("tr");
		const firstNameCell: HTMLTableCellElement = document.createElement("td");
		const locationCell: HTMLTableCellElement = document.createElement("td");

		firstNameCell.textContent = student.firstName;
		locationCell.textContent = student.location;

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);

		table.appendChild(row);
	});

	document.body.appendChild(table);
}

renderTable(studentList);
