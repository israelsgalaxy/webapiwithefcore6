import StudentRow from "./StudentRow"
import EditStudentRow from "./EditStudentRow"
import { setStudents, StudentType } from "./Interfaces"
import { useState } from "react"

const StudentContainer = ({ student, students, setStudents }: {
    student: StudentType
    students: StudentType[]
    setStudents: setStudents
}) => {

    let [editStudentActive, setEditStudentActive] = useState(false)
    let [delStudentActive, setDelStudentActive] = useState(false)

    let actives = {
        editStudentActive,
        setEditStudentActive,
        delStudentActive,
        setDelStudentActive
    }

    let a = <StudentRow student={student} students={students} setStudents={setStudents} actives={actives} />
    let b = <EditStudentRow student={student} students={students} setStudents={setStudents} actives={actives} />
   
    let out = (editStudentActive) ? b : a

    return (
        <>
           {out}
        </>
    )
}

export default StudentContainer