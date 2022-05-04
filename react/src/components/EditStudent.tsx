import { StudentType, setters } from "./Interfaces"

const EditStudent = ({ student, setters }: {
    student: StudentType
    setters: setters
}) => {

    return (
        <>
            <td><input type="text" name="" id="id" defaultValue={student.id} readOnly disabled/></td>
            <td><input type="text" name="" id="first-name" defaultValue={student.firstName} onChange={(e) => { setters.setFirstName(e.target.value) }} /></td>
            <td><input type="text" name="" id="last-name" defaultValue={student.lastName} onChange={(e) => { setters.setLastName(e.target.value) }} /></td>
            <td><input type="email" name="" id="email" defaultValue={student.email} onChange={(e) => { setters.setEmail(e.target.value) }} /></td>
            <td><input type="date" name="" id="date-of-birth" defaultValue={student.dateOfBirth} onChange={(e) => { setters.setDateOfBirth(e.target.value) }} /></td>
            <td><input type="text" name="" id="gender" defaultValue={student.gender} onChange={(e) => { setters.setGender(e.target.value) }} /></td>
            <td><input type="text" name="" id="phone-no" defaultValue={student.phoneNo} onChange={(e) => { setters.setPhoneNo(e.target.value) }} /></td>
            <td><input type="text" name="" id="year-of-entry" defaultValue={student.yearOfEntry} onChange={(e) => { setters.setYearOfEntry(e.target.value) }} /></td>
            <td><input type="text" name="" id="major" defaultValue={student.major} onChange={(e) => { setters.setMajor(e.target.value) }} /></td>
        </>
    )
}
export default EditStudent