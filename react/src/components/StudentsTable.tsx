import { StudentType, setStudents } from './Interfaces'
import StudentContainer from './StudentContainer'
import CreateStudentRow from './CreateStudentRow'
import TableHeadRow from './TableHeadRow'

const StudentsTable = ({ students, setStudents }: { students: StudentType[], setStudents: setStudents }) => {

    return (
        <table className='table'>
            <thead>
                <TableHeadRow />
            </thead>
            <tbody>
                {
                    students.map((student) => {
                        return <StudentContainer key={student.id} student={student} students={students} setStudents={setStudents} />
                    })
                }
                
                <CreateStudentRow students={students} setStudents={setStudents} />
                
            </tbody>
        </table>
    )
}
export default StudentsTable