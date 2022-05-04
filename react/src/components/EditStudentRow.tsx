import Button from "./Button"
import { StudentType, setStudents, setActives } from "./Interfaces"
import EditStudent from "./EditStudent"
import { useState } from "react"

const EditStudentRow = ({ student, students, setStudents, actives }: {
	student: StudentType
	students: StudentType[]
	setStudents: setStudents
	actives: setActives
}) => {

	let [firstName, setFirstName] = useState(student.firstName)
    let [lastName, setLastName] = useState(student.lastName)
    let [email, setEmail] = useState(student.email)
    let [dateOfBirth, setDateOfBirth] = useState(student.dateOfBirth)
    let [gender, setGender] = useState(student.gender)
    let [phoneNo, setPhoneNo] = useState(student.phoneNo)
    let [yearOfEntry, setYearOfEntry] = useState(student.yearOfEntry)
	let [major, setMajor] = useState(student.major)
	
	let edit = {
		id: student.id,
		firstName,
		lastName,
		email,
		dateOfBirth,
		gender,
		phoneNo,
		yearOfEntry,
		major
	}

	let setters = {
		setFirstName,
		setLastName,
		setEmail,
		setDateOfBirth,
		setGender,
		setPhoneNo,
		setYearOfEntry,
		setMajor
	}

	let cancelEditOnClick = () => {
		actives.setEditStudentActive(!actives.editStudentActive)
	}

	let saveEditOnClick = () => {
		actives.setEditStudentActive(!actives.editStudentActive)

		let serverEdit = async () => {
			let response = await fetch('http://localhost:5255/Students', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				body: JSON.stringify(edit)
			})

			if (!response.ok) {
				alert("Edit was not OK")
				throw new Error('Edit was not OK');
			} else {
				let index = students.findIndex((stdnt) => {
					return (stdnt.id === student.id)
				})
				
				let newStudents = [...students]
				newStudents[index] = edit
		
				setStudents([...newStudents])
			}
		}

		serverEdit()
	}


	return (
		<tr>
			<EditStudent student={student} setters={setters} />
			<td><Button text='Cancel Edit' onClick={cancelEditOnClick}/></td>
			<td><Button text='Save Edit' onClick={saveEditOnClick}/></td>
		</tr>
	)
}

export default EditStudentRow