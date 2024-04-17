import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm'; // import the ContactForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='contactInfo'>
          <div>
            <h1>Media enquiries:</h1>
            <p>press@tuum.com</p>
          </div>
          <div>
            <h1>Career questions:</h1>
            <p>careers@tuum.com</p>
        </div>
      </div>
        <ContactForm /> {/* use the ContactForm component */}
      </header>
    </div>
  );
}

export default App;
