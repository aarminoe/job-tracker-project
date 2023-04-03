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

  const [jobList, setJobList] = useState(null)

  useEffect(() => {
    fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs") 
    .then(resp => resp.json())
    .then(data => setJobList(data))
  }, [])

  if (jobList == null) {
    return <h1>waiting</h1>
  }

  function newJobToJobList(newJob) {
    let newJobList = [...jobList, newJob]
    setJobList(newJobList)
  }

  return (
    <div>
      <Header />
          <Card >
      <Card className="App">
        <Card className='one-card'>
          <Applied jobList={jobList}/>
        </Card>
        <Card className='one-card'>
          <Round1 jobList={jobList}/>
        </Card >
        <Card className='one-card'>
          <Round2 jobList={jobList}/>
        </Card>
        <Card className='one-card'>
          <Round3 jobList={jobList}/>
        </Card>
        <Card className='one-card'>
          <Waiting jobList={jobList}/>
        </Card>
        <Card className='one-card'>
          <Offer jobList={jobList}/>
        </Card>
        <Card className='one-card'>
          <Closed jobList={jobList}/>
        </Card>
      </Card>
      <div>
        <h1>Add Job</h1>
        <AddJobSection newJobToJobList={newJobToJobList}/>
      </div>
      </Card>
    </div>

  );
}

export default App;
