import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Simulated users data
  const initialUsers = [
    { id: 1, name: 'John cena', email: 'john@example.com' },
    { id: 2, name: 'Cr7', email: 'Cr7@example.com' },
    { id: 3, name: 'Paramesh', email: 'PAra@gmail' },
    { id: 4, name: 'Alice', email: 'alice@example.com' },
    { id: 5, name: 'Bob', email: 'bob@example.com' },
    { id: 6, name: 'Charlie', email: 'charlie@example.com' },
    { id: 7, name: 'David', email: 'david@example.com' },
    { id: 8, name: 'Eva', email: 'eva@example.com' },
    { id: 9, name: 'Frank', email: 'frank@example.com' },
    { id: 10, name: 'Grace', email: 'grace@example.com' }
  ];

  useEffect(() => {
    // Simulating fetching users data from an API
    setUsers(initialUsers);
  }, []);

  const handleDeleteUser = (userId) => {
    // Filter out the deleted user from the users list
    setUsers(users.filter(user => user.id !== userId));
    console.log('User deleted successfully:', userId);
  };

  const handleEditUser = (userId) => {
    // Find the user to edit
    const userToEdit = users.find(user => user.id === userId);
    setEditingUser(userToEdit);
  };

  const handleSaveEdit = () => {
    // Save the edited user details
    // This is just a simulation, you would need to implement actual saving logic
    console.log('User details updated:', editingUser);
    setEditingUser(null); // Exit edit mode
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Manage Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{editingUser && editingUser.id === user.id ? <input type="text" value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} /> : user.name}</td>
              <td>{user.email}</td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <button onClick={handleSaveEdit} className="btn btn-success mr-2">Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditUser(user.id)} className="btn btn-primary mr-2">Edit</button>
                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;