import CreateStudent from "./CreateStudent"
import Button from "./Button"
import { setStudents, StudentType } from "./Interfaces"
import { useState } from "react"

const CreateStudentRow = ({ students, setStudents }: {
	students: StudentType[]
	setStudents: setStudents
}) => {

	let [newId, setNewId] = useState('')
	let [newFirstName, setNewFirstName] = useState('')
    let [newLastName, setNewLastName] = useState('')
    let [newEmail, setNewEmail] = useState('')
    let [newDateOfBirth, setNewDateOfBirth] = useState('')
    let [newGender, setNewGender] = useState('')
    let [newPhoneNo, setNewPhoneNo] = useState('')
    let [newYearOfEntry, setNewYearOfEntry] = useState('')
	let [newMajor, setNewMajor] = useState('')

	let setters = {
		setNewId,
		setNewFirstName,
		setNewLastName,
		setNewEmail,
		setNewDateOfBirth,
		setNewGender,
		setNewPhoneNo,
		setNewYearOfEntry,
		setNewMajor
	}

	let newStudent = {
		id: newId,
		firstName: newFirstName,
		lastName: newLastName,
		email: newEmail,
		dateOfBirth: newDateOfBirth,
		gender: newGender,
		phoneNo: newPhoneNo,
		yearOfEntry: newYearOfEntry,
		major: newMajor
	}

	let createStudentOnClick = () => {

		let serverPost = async () => {
			let response = await fetch('http://localhost:5255/Students', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				body: JSON.stringify(newStudent)
			})

			if (!response.ok) {
				alert('Create was not OK')
				throw new Error('Create was not OK');
			} else {
				let newStudents = [...students]
				newStudents.push(newStudent)
				setStudents(newStudents)

				setNewId('')
				setNewFirstName('')
				setNewLastName('')
				setNewEmail('')
				setNewDateOfBirth('')
				setNewGender('')
				setNewPhoneNo('')
				setNewYearOfEntry('')
				setNewMajor('')
			}
		}

		serverPost()
		// add new student to student
	}

	return (
		<tr className=".tr-inputs">
			<CreateStudent newStudent={newStudent} setters={setters} />
			<td><Button text={'Create Student'} onClick={createStudentOnClick} /></td>
		</tr>
  	)
}
export default CreateStudentRow