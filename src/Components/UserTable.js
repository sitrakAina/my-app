import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserTable = props => (
  <div class="table-responsive">
	<table class="table">
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
							
            <button class='btn btn-danger' onClick={(e) =>{if(window.confirm("confirme suppression"))(props.deleteUser(user.id))}}>
             x
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
  </div>
)

export default UserTable