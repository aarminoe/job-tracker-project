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

  document.body.style = 'background: rgb(179, 178, 178);'

  console.log(UserPool)
  const [jobList, setJobList] = useState(null)
  const [loginCheck, setLoginCheck] = useState(false)
  const [jobsAppliedTo, setJobsAppliedTo] = useState(0)

  useEffect(() => {
    fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs") 
    .then(resp => resp.json())
    .then(data => {
      let userJobList = data.filter((job) => job.user == UserPool.getCurrentUser().username)
      setJobList(userJobList)
      setJobsAppliedTo(userJobList.length)
    })
  }, [])

  useEffect(() => {
    fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs/oo") 
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [])

  useEffect(() => {
    if (UserPool.getCurrentUser()) {
      setLoginCheck(true)
    }
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

  
  function logOut() {
    const user = UserPool.getCurrentUser()
    if (user) {
        setLoginCheck(false)
        user.signOut()
    }
  }


  return (
    <div className='App-page'>
      {loginCheck ? 
      <div>
      <button onClick={logOut}>Log Out</button>
      <Header />
      <Card className='add-job-card'>
        <h3>Add Job</h3>
        <AddJobSection newJobToJobList={newJobToJobList}/>
      </Card>
      <div>
        Jobs Applied To: {jobsAppliedTo}
      </div>
          <Card className="App">
      <Card className="App" style={{backgroundColor: "rgb(179, 178, 178)"}}>
        <Card className='one-card' style={{backgroundColor: "rgb(179, 246, 198)"}}>
          <Applied jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card' style={{backgroundColor: "rgb(147, 248, 175)"}}>
          <Round1 jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card >
        <Card className='one-card' style={{backgroundColor: "rgb(124, 244, 158)"}}>
          <Round2 jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card' style={{backgroundColor: "rgb(108, 244, 147)"}}>
          <Round3 jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card' style={{backgroundColor: "rgb(0, 244, 69)"}}>
          <Waiting jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card' style={{backgroundColor: "rgb(210, 235, 69)"}}>
          <Offer jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
        <Card className='one-card' style={{backgroundColor: "rgb(69, 230, 235)"}}>
          <Closed jobList={jobList} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
        </Card>
      </Card>
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
