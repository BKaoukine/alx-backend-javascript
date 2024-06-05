interface Teacher {
	readonly firstName: string; //read only makes property can't be re-written
	readonly lastName: string; //read only makes property can't be re-written
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; //optional we add ? at the end of type name
	location: string;
	[propName: string]: boolean | string | number;
}
