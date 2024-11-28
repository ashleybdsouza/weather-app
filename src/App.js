import React from 'react';
import Header from './Header';
import Weather from './Weather';
import Contact from './Contact';
import './styles/App.css';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';


function App() {
  useGoogleAnalytics();
  return (
    <div className="App">
      <Header />
      <main>
        <Weather />
        <Contact />
      </main>
    </div>
  );
}

export default App;