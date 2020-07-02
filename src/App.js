import React, { useState } from 'react';
import logo from './assets/img/thecampusLogo.jpeg';
import './App.css';
import Countdown from 'react-countdown';
import { makeStyles } from '@material-ui/core/styles';
import FbIcon from '@material-ui/icons/Facebook';
import TwIcon from '@material-ui/icons/Twitter';
import IgIcon from '@material-ui/icons/Instagram';
import YtIcon from '@material-ui/icons/YouTube';
import InIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      color: '#a0a0a0 !important',
    },
  },
}));

// Renderer callback with condition
// Random component
const Completionist = () => <span className='ready-txt'>Let's get ready for it!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown

    // return <span>{hours}:{minutes}:{seconds}</span>;
    return (
      <div className='timer'>
        <div className='timer-sect'>
          <span className='timer-box'>{days}</span>Days
        </div>
        <div className='timer-sect'>
          <span className='timer-box'>{hours}</span>Hours
        </div>
        <div className='timer-sect'>
          <span className='timer-box'>{minutes}</span>Minutes
        </div>
        <div className='timer-sect'>
          <span className='timer-box'>{seconds}</span>Seconds
        </div>
      </div>
    );
  }
};

function App() {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };
  function triggerAlert() {
    setOpenSnackbar(true);
  }

  function handleEmail(e) {
    setTimeout(triggerAlert, 2000);
  }

  return (
    <div className='App'>
      <div className='header-section'>
        <div className='logo-section'>
          <img src={logo} alt='logo' />
          <span className='logo-txt'>The campus</span>
        </div>
      </div>
      <div className='body-section'>
        <div className='tuned'>Stay tuned to something amazing</div>
        <div className='text-big'>We are coming very soon</div>
        <Countdown
          date={Date.now() + parseInt(process.env.REACT_APP_TIMER, 10)}
          renderer={renderer}
        />
        <div className='input-sect'>
          <form>
            <input type='email' placeholder='Email address' />
            <input type='button' value='Notify me' onClick={handleEmail} />
          </form>
        </div>
        <div className='footer'>
          <div className={classes.root}>
            <IconButton aria-label='facebook' target='_blank' href='#'>
              <FbIcon />
            </IconButton>
            <IconButton aria-label='youtube' target='_blank' href='#'>
              <YtIcon />
            </IconButton>
            <IconButton aria-label='instagram' target='_blank' href='#'>
              <IgIcon />
            </IconButton>
            <IconButton aria-label='twitter' target='_blank' href='#'>
              <TwIcon />
            </IconButton>
            <IconButton aria-label='linkedin' target='_blank' href='#'>
              <InIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        onClick={handleClose}
        id='closeAlert'
      >
        <Alert severity={'info'} onClose={handleClose}>
          Thank you! we will contact you.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
