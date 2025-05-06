import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Switch,
    Box,
  } from '@mui/material';
  import { Link } from 'react-router-dom';
  
  function Navbar({ darkMode, setDarkMode }) {
    const handleToggle = () => {
      setDarkMode((prev) => !prev);
    };
  
    return (
      <AppBar position="static" color="primary" elevation={3}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
  
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/exchange" color="inherit">
              Exchange Rates (Live)
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/error" color="inherit">
              Error Page
            </Button>
            <Switch checked={darkMode} onChange={handleToggle} />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;
  