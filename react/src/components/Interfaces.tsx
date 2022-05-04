export interface setActive {
	(active: boolean): void
}

export interface onClick {
	(): void
}

export interface setStudents {
    (students: any): void
}

export interface setStudent {
    (students: StudentType): void
}

export interface StudentType {
	id: string
	firstName: string
	lastName: string
	email: string
	dateOfBirth: string
	gender: string
	phoneNo: string
	yearOfEntry: string
	major: string
}

export interface setActives {
	editStudentActive: boolean,
	setEditStudentActive: setActive,
	delStudentActive: boolean,
	setDelStudentActive: setActive
}

export interface setters {
	setFirstName: {(firstName: string): void}
	setLastName: {(lastName: string): void}
	setEmail: {(email: string): void}
	setDateOfBirth: {(dateOfBirth: string): void}
	setGender: {(gender: string): void}
	setPhoneNo: {(phoneNo: string): void}
	setYearOfEntry: {(yearOfEntry: string): void}
	setMajor: {(major: string): void}
}

export interface newSetters {
	setNewId: {(id: string): void}
	setNewFirstName: {(firstName: string): void}
	setNewLastName: {(lastName: string): void}
	setNewEmail: {(email: string): void}
	setNewDateOfBirth: {(dateOfBirth: string): void}
	setNewGender: {(gender: string): void}
	setNewPhoneNo: {(phoneNo: string): void}
	setNewYearOfEntry: {(yearOfEntry: string): void}
	setNewMajor: {(major: string): void}
}