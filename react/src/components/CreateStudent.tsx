import { newSetters, StudentType } from "./Interfaces"

const CreateStudent = ({ newStudent, setters }: {
	newStudent: StudentType
	setters: newSetters
}) => {
	return (
		<>
			<td><input type="text" name="" id="id" value={newStudent.id} onChange={(e) => { setters.setNewId(e.target.value) }} /></td>
			<td><input type="text" name="" id="first-name" value={newStudent.firstName} onChange={(e) => { setters.setNewFirstName(e.target.value) }} /></td>
			<td><input type="text" name="" id="last-name" value={newStudent.lastName} onChange={(e) => { setters.setNewLastName(e.target.value) }} /></td>
			<td><input type="email" name="" id="email" value={newStudent.email} onChange={(e) => { setters.setNewEmail(e.target.value) }} /></td>
			<td><input type="date" name="" id="date-of-birth" value={newStudent.dateOfBirth} onChange={(e) => { setters.setNewDateOfBirth(e.target.value) }} /></td>
			<td><input type="text" name="" id="gender" value={newStudent.gender} onChange={(e) => { setters.setNewGender(e.target.value) }} /></td>
			<td><input type="text" name="" id="phone-no" value={newStudent.phoneNo} onChange={(e) => { setters.setNewPhoneNo(e.target.value) }} /></td>
			<td><input type="text" name="" id="year-of-entry" value={newStudent.yearOfEntry} onChange={(e) => { setters.setNewYearOfEntry(e.target.value) }} /></td>
			<td><input type="text" name="" id="major" value={newStudent.major} onChange={(e) => { setters.setNewMajor(e.target.value) }} /></td>
		</>
	)
}
export default CreateStudent