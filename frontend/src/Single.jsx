import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Single.css';

const Single = () => {
  const [income, setIncome] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the username when the component mounts
    fetchUsername();
  }, []);

  const fetchUsername = () => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('token');
    console.log('TOKEN:', token);

    // Send a GET request to the server to fetch the username
    axios
      .get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('USERNAME FROM SINGLE', response.data.username);
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });
  };

  const handleAddClick = () => {
    // Create an object with the data to send to the server
    const expenseData = {
      username, // Replace with the actual username or fetch it from your authentication system
      income: parseFloat(income),
    };
    // Send a POST request to the server to add the expense
    axios
      .post('/api/expenses', expenseData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Replace with your token storage mechanism
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('Expense added successfully:', response.data);
        // Handle success, such as showing a success message or redirecting
        navigate('/home'); // Redirect to the Home component
        // window.location.reload();
      })
      .catch(error => {
        console.error('Error adding expense:', error);
        // Handle error, such as showing an error message
      });
  };

  return (
    <div className="backgroundpic">
    <div className="login-container">
      <box>
        <h1>Add Details</h1>

        <Typography variant="h1"> </Typography>
        <br />
        <h4>Enter the monthly income</h4>
        <TextField  variant="filled"
            label="Income"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiFilledInput-input': {
                color: '#FFFFFF',
              },
            }} value={income} onChange={e => setIncome(e.target.value)}></TextField>
        <br />
        <br />
      

        <br />
        <Button variant="outlined" color="warning" onClick={handleAddClick}>
          <Link style={{ textDecoration: 'none', color: 'red' }}>ADD</Link>
        </Button>

        <Button variant="outlined" color='primary'>
          <Link to='/Expense'>Expense</Link>
        </Button>
      </box>
    </div>
    </div>
  );
};

export default Single;
