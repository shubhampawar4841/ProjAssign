import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Assuming you have a global stylesheet
import App from './App'; // Importing the main App component

// Create a root element in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
