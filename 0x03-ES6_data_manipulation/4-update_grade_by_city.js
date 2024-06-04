/* eslint-disable */
const updateStudentGradeByCity = (students, city, grade) => {
	const newStudents = students
		.filter((student) => student.location === city)
		.map((student) => {
			let found = false;
			for (const gd of grade) {
				if (student.id === gd.studentId) {
					student.grade = gd.grade;
					found = true;
					break;
				}
			}
			if (!found) {
				student.grade = "N/A";
			}
			return student;
		});
	return newStudents;
};

export default updateStudentGradeByCity;
