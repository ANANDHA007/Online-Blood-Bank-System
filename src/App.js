import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

import BloodNeederForm from './BloodNeederForm';
import BloodDonorForm from './BloodDonarForm';
import Successinsert from './Successinsert';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/success' element={<Successinsert/>}/>
        <Route path="/blood-donar" element={<BloodDonorForm/>}/>
        <Route path="/blood-needer" element={<BloodNeederForm />} />
      </Routes>
    </Router>
  );
}

export default App;
