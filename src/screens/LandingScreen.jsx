import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
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
        <Typography variant="h4" component="h1" gutterBottom sx={{ 
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
        }}>
          Welcome to PopX
        </Typography>
        
        <Typography variant="body1" color="textSecondary" sx={{ 
          marginBottom: '40px',
          color: '#666',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography>
        
        <Button 
          variant="contained" 
          fullWidth 
          sx={{
            backgroundColor: '#6c25ff',
            padding: '12px',
            marginBottom: '15px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: '#5c1de8',
            },
          }}
          onClick={() => navigate('/signup')}
        >
          Create Account
        </Button>
        
        <Button 
          variant="contained" 
          fullWidth 
          sx={{
            backgroundColor: '#cebafb',
            color: 'white',
            padding: '12px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: '#b8a4e6',
            },
          }}
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </Button>
      </Box>
    </Container>
  );
};

export default LandingScreen;
