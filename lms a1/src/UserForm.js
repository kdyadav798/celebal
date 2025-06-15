import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  { name: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
  { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "UK", cities: ["London", "Manchester", "Liverpool"] },
];

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  showPassword: false,
  phoneCode: "+91",
  phoneNumber: "",
  country: "",
  city: "",
  pan: "",
  aadhar: "",
};

const initialErrors = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phoneNumber: "",
  country: "",
  city: "",
  pan: "",
  aadhar: "",
};

function validateField(name, value, state) {
  switch (name) {
    case "firstName":
    case "lastName":
    case "username":
      return value.trim() ? "" : "Required";
    case "email":
      return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) ? "" : "Invalid email";
    case "password":
      return value.length >= 6 ? "" : "Password must be at least 6 characters";
    case "phoneNumber":
      return /^\d{10}$/.test(value) ? "" : "Enter 10 digit number";
    case "country":
      return value ? "" : "Select country";
    case "city":
      return value ? "" : "Select city";
    case "pan":
      return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? "" : "Invalid PAN";
    case "aadhar":
      return /^\d{12}$/.test(value) ? "" : "Invalid Aadhar";
    default:
      return "";
  }
}

function UserForm() {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, { ...state, [name]: value }),
    }));
    if (name === "country") {
      setState((prev) => ({ ...prev, city: "" }));
      setErrors((prev) => ({ ...prev, city: "Select city" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, state),
    }));
  };

  const isFormValid = () => {
    let valid = true;
    Object.keys(initialErrors).forEach((key) => {
      const error = validateField(key, state[key], state);
      if (error) valid = false;
    });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(initialErrors).forEach((key) => {
      newErrors[key] = validateField(key, state[key], state);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      navigate("/details", { state });
    }
  };

  const selectedCountry = countries.find((c) => c.name === state.country);

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Username *</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>E-mail *</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password *</label>
          <div className="password-wrapper">
            <input
              type={state.showPassword ? "text" : "password"}
              name="password"
              value={state.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>
              <input
                type="checkbox"
                name="showPassword"
                checked={state.showPassword}
                onChange={handleChange}
              />
              Show
            </label>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Phone No. *</label>
          <div className="phone-wrapper">
            <select
              name="phoneCode"
              value={state.phoneCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="text"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={10}
            />
          </div>
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <label>Country *</label>
          <select
            name="country"
            value={state.country}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>City *</label>
          <select
            name="city"
            value={state.city}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={!state.country}
          >
            <option value="">Select City</option>
            {selectedCountry && selectedCountry.cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label>PAN No. *</label>
          <input
            type="text"
            name="pan"
            value={state.pan}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={10}
          />
          {errors.pan && <span className="error">{errors.pan}</span>}
        </div>
        <div className="form-group">
          <label>Aadhar No. *</label>
          <input
            type="text"
            name="aadhar"
            value={state.aadhar}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={12}
          />
          {errors.aadhar && <span className="error">{errors.aadhar}</span>}
        </div>
        <button type="submit" disabled={!isFormValid()}>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;