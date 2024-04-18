import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm'; // import the ContactForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='content'>
      <div className='contactInfo'>
          <div>
            <h4>Media enquiries:</h4>
            <p>press@tuum.com</p>
          </div>
          <div>
            <h4>Career questions:</h4>
            <p>careers@tuum.com</p>
        </div>
      </div>
      <div className='rightSide'>
        <ContactForm /> {/* use the ContactForm component */}
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
