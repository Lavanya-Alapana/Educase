import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm" sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    }}>
      <Box sx={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px',
      }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ 
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '10px',
        }}>
          Sign in to your PopX account
        </Typography>
        
        <Typography variant="body2" color="textSecondary" sx={{ 
          marginBottom: '30px',
          color: '#666',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography>
        
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
              marginBottom: '20px',
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
            autoComplete="current-password"
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
              marginBottom: '30px',
            }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#cbcbcb',
              color: 'white',
              padding: '12px',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: '#b0b0b0',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
