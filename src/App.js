import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import RecentPosts from './components/RecentPosts';
import CareerAdvice from './components/CareerAdvice';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <p>Recent Posts</p>
        <RecentPosts />
        
        <p className="mt-5">Career Advice</p>
        <CareerAdvice />
      </div>
    </div>
  );
}

export default App;
