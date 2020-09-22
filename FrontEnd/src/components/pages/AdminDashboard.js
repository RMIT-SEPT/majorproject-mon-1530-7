import React, { Component } from 'react'
import AdminDashboardLayout from '../layouts/AdminDashboardLayout';

class AdminDashboard extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminDashboardLayout />
            </div>
        );
    }
}

export default AdminDashboard;