import React, { useState } from 'react';
import './BloodDonarForm.css';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import {redirect } from 'react-router-dom';
import { useHref } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BloodDonorForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    phonenumber:'',
    city: ''

  });
  const[valued,setvalue]=useState(
    {
      values:''
    }
  );
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    axios.post("http://localhost:5000/blooddonar",formData)
    .then(res=>{
      console.log(res.data)
      setvalue({valued,values:res.data})
      
    })
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Become a Blood Donor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    {
    valued.values ?  navigate('/success')
    : <h1>not inserted</h1>
    }
    </div>
  );
};

export default BloodDonorForm;
