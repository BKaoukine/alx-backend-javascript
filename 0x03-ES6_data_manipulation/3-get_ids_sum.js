export default function getStudentIdsSum(students) {
	const totalId = students.reduce(
		(accumulator, student) => accumulator + student.id,
		0
	);

	return totalId;
}
