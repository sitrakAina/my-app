import React from 'react'


const UserTable = props => (
	<table>
		<thead>
			<tr>
      <th>Id</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
          <td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
            <button onClick={() => props.deleteUser(user.id)}
              className="button muted-button">
              Delete
            </button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}></td>
				</tr>
			)}
		</tbody>
	</table>
)

export default UserTable