import React, { useState } from 'react';
import axios from 'axios';
import './BloodNeederForm.css';
function BloodNeederForm() {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    data:[]
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    axios.post("http://localhost:5000/finddonar",formData)
    .then(res=>{
      console.log(res)
      setFormData({formData,data:res.data})
      
    })
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2 style={{color:'red'}}>Blood Bank</h2>
      <form onSubmit={handleSubmit}>
       
        
       
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
        
      
        <button type="submit">Submit</button>
      </form>
    {
      formData.data.length>0 ?

      formData.data.map((data) => (
      <div className="blood-container">
      <div className="bl-container">
        
          <div className="crd">
            <h2> Name: {data.name}</h2>
            <h2> Phonenumber: {data.phonenumber}</h2>
            <h2> City: {data.city}</h2>
          </div>
     
      </div>
    </div>
      ))
    : null
    }
    
    
    </div>
  );
}

export default BloodNeederForm;
