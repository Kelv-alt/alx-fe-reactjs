import './App.css';
import React from 'react';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Counter />
      <Footer />
    </div>

  );
}

export default App;
