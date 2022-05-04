import StudentsTable from './components/StudentsTable';
import { useState, useEffect } from 'react'
import { StudentType } from './components/Interfaces';

function App() {

	let [students, setStudents] = useState([])

	useEffect(() => {
		let fetchStudents = async () => {
			let response = await fetch('http://localhost:5255/Students')
			let data = await response.json()
			setStudents(data)
		}

		fetchStudents()
	}, [])

	return (
		<div className="App">
			<h3>
				Students Table
			</h3>
			<StudentsTable students={students} setStudents={setStudents} />
		</div>
	);
}

export default App;
