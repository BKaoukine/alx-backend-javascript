interface Teacher {
	readonly firstName: string; //read only makes property can't be re-written
	readonly lastName: string; //read only makes property can't be re-written
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; //optional we add ? at the end of type name
	location: string;
	[propName: string]: boolean | string | number;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	printTeacher: (firstName: string, lastName: string) => string;
}

const a: printTeacherFunction = {
	printTeacher(firstName, lastName) {
		return `${firstName.charAt(0)}. ${lastName}`;
	},
};

interface Student {
	firstName: string;
	lastName: string;
	workOnHomework: () => string;
	displayName: () => string;
}

class StudentClass implements Student {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
