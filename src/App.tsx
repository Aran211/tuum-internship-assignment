import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm'; // import the ContactForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactForm /> {/* use the ContactForm component */}
      </header>
    </div>
  );
}

export default App;
