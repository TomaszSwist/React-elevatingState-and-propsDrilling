import './App.css'
import { useRef, useState } from 'react'

function App() {
	const refInput = useRef()
	const [name, setName] = useState('Nieznajomy')
	const [nation, setNation] = useState('nie wiadomo')
	const [sex, setSex] = useState('nie wiadomo')
	const [age, setAge] = useState('X')

	const checkPerson = () => {
		// fetch(`https://api.genderize.io/?name=${sex}`)
		// 	.then(res => res.json())
		// 	.then(res => setSex(res.gender))

		// fetch(`https://api.agify.io/?name=${name}`)
		// 	.then(res => res.json())
		// 	.then(res => setAge(res.age))

		// fetch(`https://api.nationalize.io/?name=${nation}`)
		// 	.then(res => res.json())
		// 	.then(res => setNation(res.country[0].country_id))

		refInput.current.focus()
	}

	const onNameChange = e => {
		setName(e.target.value)
	}

	return (
		<div className='App'>
			<h1>Sprawdź informacje o sobie</h1>
			<input ref={refInput} value={name} onChange={onNameChange} />
			<br />
			<button onClick={checkPerson}>{name}, sprawdz informację o sobie</button>
			<br />
			<p>Masz chyba {age} lat.</p>
			<p>Chyba jesteś {sex}.</p>
			<p>Pochodzisz z {nation}.</p>
		</div>
	)
}

export default App
