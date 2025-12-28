import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignupScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agency, setAgency] = useState('no');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAgencyChange = (event) => {
    setAgency(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{
      height: 'auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    }}>
      <Box sx={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px',
        margin: '20px 0',
      }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ 
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '10px',
        }}>
          Create your PopX account
        </Typography>
        
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
              },
              '& .MuiInputLabel-root': {
                color: '#6c25ff',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c25ff',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#6c25ff',
              },
              marginBottom: '15px',
            }}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone number"
            name="phone"
            autoComplete="tel"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
              },
              '& .MuiInputLabel-root': {
                color: '#6c25ff',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c25ff',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#6c25ff',
              },
              marginBottom: '15px',
            }}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            autoComplete="email"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
              },
              '& .MuiInputLabel-root': {
                color: '#6c25ff',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c25ff',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#6c25ff',
              },
              marginBottom: '15px',
            }}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="new-password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
              },
              '& .MuiInputLabel-root': {
                color: '#6c25ff',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c25ff',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#6c25ff',
              },
              marginBottom: '15px',
            }}
          />
          
          <TextField
            margin="normal"
            fullWidth
            id="company"
            label="Company name"
            name="company"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
              },
              '& .MuiInputLabel-root': {
                color: '#6c25ff',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c25ff',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#6c25ff',
              },
              marginBottom: '20px',
            }}
          />
          
          <FormControl component="fieldset" sx={{ width: '100%', mb: 3 }}>
            <FormLabel component="legend" sx={{ 
              color: '#6c25ff',
              fontWeight: '500',
              mb: 1,
            }}>
              Are you an Agency?
            </FormLabel>
            <RadioGroup
              row
              aria-label="agency"
              name="row-radio-buttons-group"
              value={agency}
              onChange={handleAgencyChange}
              sx={{
                '& .MuiSvgIcon-root': {
                  color: '#6c25ff',
                },
                '& .Mui-checked': {
                  color: '#6c25ff',
                },
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              mb: 2,
              backgroundColor: '#6c25ff',
              color: 'white',
              padding: '12px',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: '#5c1de8',
              },
            }}
            onClick={() => navigate('/profile')}
          >
            Create Account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupScreen;
