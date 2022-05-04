import { setStudents, StudentType } from "./Interfaces"

const Student = ({ student, students, setStudents }: { student: StudentType, students: StudentType[], setStudents: setStudents }) => {

	return (
		<>
			<td>{student.id}</td>
			<td>{student.firstName}</td>
			<td>{student.lastName}</td>
			<td>{student.email}</td>
			<td>{student.dateOfBirth}</td>
			<td>{student.gender}</td>
			<td>{student.phoneNo}</td>
			<td>{student.yearOfEntry}</td>
			<td>{student.major}</td>
		</>
	)
}

export default Student