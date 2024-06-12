import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View and manage user accounts.</p>
              <Link to="/admin/users" className="btn btn-primary">Manage Users</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Products</h5>
              <p className="card-text">Add, edit, or delete products.</p>
              <Link to="/admin/products" className="btn btn-primary">Manage Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
