import Button from "./Button"
import Student from "./Student"
import { StudentType, setStudents, setActives } from "./Interfaces"

const StudentRow = ({ student, students, setStudents, actives }: {
	student: StudentType
	students: StudentType[]
    setStudents: setStudents
	actives: setActives
}) => {

    let editOnClick = () => {
        actives.setEditStudentActive(!actives.editStudentActive)
    }

    let delOnClick = () => {
        actives.setDelStudentActive(!actives.delStudentActive)

        let serverDel = async () => {
			let response = await fetch(`http://localhost:5255/Students/${student.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors'
			})

			if (!response.ok) {
				throw new Error('Delete was not OK');
			}
        }
        
        serverDel()

        let index = students.findIndex((stdnt) => {
            return (stdnt.id === student.id)
        })
        
        let newStudents = [...students]
        newStudents.splice(index, 1)
    
        setStudents([...newStudents])
    }

    return (
        <tr>
            <Student student={student} students={students} setStudents={setStudents} />
            <td><Button text='Edit Student' onClick={editOnClick}/></td>
			<td><Button text='Remove Student' onClick={delOnClick}/></td>
        </tr>
    )
}
export default StudentRow