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
import UserPool from './UserPool';
import SignUp from './SignUp';
import { Account } from './Accounts';
import Login from './Login';


function App() {

  console.log(UserPool)
  const [jobList, setJobList] = useState(null)
  const [loginCheck, setLoginCheck] = useState(false)

  useEffect(() => {
    fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs") 
    .then(resp => resp.json())
    .then(data => {
      let userJobList = data.filter((job) => job.user != UserPool.getCurrentUser.username)
      setJobList(userJobList)
    })
  }, [])

  if (jobList == null) {
    return <h1>waiting</h1>
  }

  function newJobToJobList(newJob) {
    let newJobList = [...jobList, newJob]
    setJobList(newJobList)
  }

  function movingUpJobStage(updatedJob) {
    let filteredJob = jobList.filter((job) => job.company != updatedJob.company && job.title != updatedJob.title)
    let newJobList = [...filteredJob, updatedJob]
    setJobList(newJobList)
  }

  function movingDownJobStage(updatedJob) {
    let filteredJob = jobList.filter((job) => job.company != updatedJob.company && job.title != updatedJob.title)
    let newJobList = [...filteredJob, updatedJob]
    setJobList(newJobList)
  }

  function handleLoginState() {
    setLoginCheck(true)
  }

  return (
    <div>
      {loginCheck ? 
      <div>
      <Header />
          <Card >
      <Card className="App">
        <Card className='one-card'>
          <Applied jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card'>
          <Round1 jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card >
        <Card className='one-card'>
          <Round2 jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card'>
          <Round3 jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card'>
          <Waiting jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card'>
          <Offer jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card'>
          <Closed jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
      </Card>
      <div>
        <h1>Add Job</h1>
        <AddJobSection newJobToJobList={newJobToJobList}/>
      </div>
      </Card>
      </div>:
      <Account>
      <SignUp/>
      <Login handleLoginState={handleLoginState}/>
      </Account>}
    </div>

  );
}

export default App;
