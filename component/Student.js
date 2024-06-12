import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';


const Student = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [idPicture, setIdPicture] = useState(null);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Form submitted:', { name, age, college, department, idPicture });
    // Assuming data is successfully submitted to backend
    setSubmitted(true);
    // Clear form fields
    setName('');
    setAge('');
    setCollege('');
    setDepartment('');
    setIdPicture(null);
    setDisclaimerAccepted(false);
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>College:</label>
            <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>ID Picture:</label>
            <input type="file" accept="image/*" onChange={(e) => setIdPicture(e.target.files[0])} required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" checked={disclaimerAccepted} onChange={() => setDisclaimerAccepted(!disclaimerAccepted)} required />
              I accept the disclaimer
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {submitted && (
          <div className="success-box">
            <p>Thank you! Your response has been submitted.</p>
            <p>We will mail you a discount code. Have a happy day!</p>
          </div>
        )}
        {disclaimerAccepted && !submitted && (
          <div className="error-box">
            <p>After we verify your details, your student pass for this month will be provided.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Student;
