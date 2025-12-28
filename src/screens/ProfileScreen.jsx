import { Avatar, Box, Button, Container, Typography, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  const navigate = useNavigate();

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
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px',
      }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ 
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '30px',
          textAlign: 'center',
        }}>
          Account Settings
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Box sx={{ position: 'relative', mb: 2 }}>
            <Avatar 
              alt="User Avatar" 
              src="/avatar-placeholder.png" 
              sx={{ 
                width: 100, 
                height: 100,
                bgcolor: '#6c25ff',
                fontSize: '2.5rem',
              }}
            >
              MD
            </Avatar>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#6c25ff',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                border: '2px solid white',
              }}
            >
              <EditIcon fontSize="small" />
            </Box>
          </Box>
          
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mt: 1 }}>
            Marry Doe
          </Typography>
          
          <Typography variant="body2" color="textSecondary" sx={{ color: '#666', mb: 3 }}>
            Marry@Gmail.Com
          </Typography>
          
          <Typography variant="body2" color="textSecondary" sx={{ 
            color: '#666',
            textAlign: 'center',
            mb: 3,
            lineHeight: 1.6,
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          
          <Divider sx={{ width: '100%', my: 2, borderStyle: 'dashed' }} />
          
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
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
            onClick={() => navigate('/')}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileScreen;
