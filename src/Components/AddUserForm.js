import React, { useState } from 'react'
import './AddUserForm.css'

var AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form 
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Nom</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label class="deplacer">Prenom</label>
			<input  type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button class ="btn btn-info deplacer">Ajouter</button>
		</form>
	)
}

export default AddUserForm