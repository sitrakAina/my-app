import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserTable.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 

const UserTable = props => (
  <div className=".table-responsive decendre">
	<table className="table table-bordered">
		<thead >
			<tr className="bg-info">
      <th><center>Id</center></th>
				<th><center>Nom</center></th>
				<th><center>Prenom</center></th>
				<th><center>Actions</center></th>
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
						<button className='btn btn-danger' onClick={
						() => {
							confirmAlert({
								title: '',
								message: 'Confirme supression',
								buttons: [
									{
										label: 'OUI',
										onClick: () => props.deleteUser(user.id)
									},
									{
										label: 'NON',
										onClick: () => ''
									}
								]
							})
						}}>
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