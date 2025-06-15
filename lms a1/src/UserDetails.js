import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div>
        <h2>No data found. Please fill the form first.</h2>
        <button onClick={() => navigate("/")}>Go to Form</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2>User Details</h2>
      <ul>
        <li><strong>First Name:</strong> {data.firstName}</li>
        <li><strong>Last Name:</strong> {data.lastName}</li>
        <li><strong>Username:</strong> {data.username}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Password:</strong> {data.password}</li>
        <li><strong>Phone No.:</strong> {data.phoneCode} {data.phoneNumber}</li>
        <li><strong>Country:</strong> {data.country}</li>
        <li><strong>City:</strong> {data.city}</li>
        <li><strong>PAN No.:</strong> {data.pan}</li>
        <li><strong>Aadhar No.:</strong> {data.aadhar}</li>
      </ul>
      <button onClick={() => navigate("/")}>Back to Form</button>
    </div>
  );
}

export default UserDetails;