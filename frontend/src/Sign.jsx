import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Alert } from '@mui/material';
import './Sign.css';

const Sign = () => {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const userData = {
      name,
      userName,
      dob,
      place,
      age,
      email,
      education,
      phoneNumber,
      password,
    };

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User already exists');
        }
      })
      .then((data) => {
        console.log('User registered:', data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setAlertMessage('User already exists');
      });
  };

  const handleReset = () => {
    setName('');
    setUsername('');
    setPlace('');
    setDob('');
    setAge('');
    setEmail('');
    setEducation('');
    setPhoneNumber('');
    setAgreeTerms(false);
    setPassword('');
    setAlertMessage('');
  };

  return (
    <div className="sign-container">
      <div className="video-background">
        <video src="/Videos/p.mp4" autoPlay loop muted></video>
      </div>

      <div className="sign-content">
        <Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Sign Up</h2>
          <div className="form-field">
            <p>Name</p>
            <TextField
              variant="filled"
              label="name"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Username</p>
            <TextField
              variant="filled"
              label="name"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>DOB</p>
            <TextField
              variant="filled"
              type='date'
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Place</p>
            <TextField
              variant="filled"
              label="place"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Age</p>
            <TextField
              variant="filled"
              label="age"
              type="number"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Email</p>
            <TextField
              variant="filled"
              label="email"
              type="email"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Education</p>
            <TextField
              variant="filled"
              label="education"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="text-field"
            />
          </div>
          
          <div className="form-field">
            <p>Phone Number</p>
            <TextField
              variant="filled"
              label="phoneNumber"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <p>Password</p>
            <TextField
              variant="filled"
              label="password"
              type="password"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-field"
            />
          </div>
          <div className="form-field">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agree-terms">I agree to the terms and conditions</label>
          </div>
          <div className="button-group">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              SignUp
            </Button>
            <Button variant="contained" color="warning" onClick={handleReset}>
              Reset
            </Button>
          </div>
          {alertMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {alertMessage}
            </Alert>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Sign;

