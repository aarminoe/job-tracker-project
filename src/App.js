import './App.css';
import Applied from './Applied';
import Offer from './Offer';
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import Waiting from './Waiting';
import AddJobSection from './AddJobSection';
import { Card } from '@mui/material';
import Closed from './Closed';
import Header from './Header';
import JobCard from './JobCard';
import { useState, useEffect } from 'react';


function App() {

  useEffect(() => {
    fetch("https://6e4v9627gg.execute-api.us-east-1.amazonaws.com/jobs") 
    .then(resp => resp.json())
    .then(data => console.log(data))
  },[])

  return (
    <div>
      <Header />
          <Card >
      <Card className="App">
        <Card className='one-card'>
          <Applied/>
        </Card>
        <Card className='one-card'>
          <Round1/>
        </Card >
        <Card className='one-card'>
          <Round2/>
        </Card>
        <Card className='one-card'>
          <Round3/>
        </Card>
        <Card className='one-card'>
          <Waiting/>
        </Card>
        <Card className='one-card'>
          <Offer/>
        </Card>
        <Card className='one-card'>
          <Closed />
        </Card>
      </Card>
      <div>
        <h1>Add Job</h1>
        <AddJobSection />
      </div>
      </Card>
    </div>

  );
}

export default App;
