import React, { useState } from "react";
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});

    const error = {};

    if (!formData.name) {
      error.name = "Name field is required.";
    } else if (/[^a-zA-Z ]/.test(formData.name)) {
      error.name = "Name should contain only alphabets.";
    }

    if (!formData.email) {
      error.email = "Email field is required.";
    } else if (!formData.email.includes("@")) {
      error.email = "Invalid email.";
    }

    if (!formData.phone) {
      error.phone = "Phone field is required.";
    } else if (formData.phone.length !== 10) {
      error.phone = "Phone number should be 10 digits.";
    }

    if (!formData.gender) {
      error.gender = "Gender field is required.";
    }

    if (!formData.password) {
      error.password = "Password field is required.";
    }

    setErrors(error);

    if (!Object.keys(error).length) {
      console.log("Form data", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );}
  export default App;