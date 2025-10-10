import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Switch, 
    Avatar, 
    Button } from '@mui/material';
import { 
        Brightness7 as LightModeIcon,
        Brightness4 as DarkModeIcon,
        Security as SecurityIcon,
        Logout as LogoutIcon
} from '@mui/icons-material';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

function NavBar() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const { handleLogout } = useContext(AuthContext);
    return (
            <AppBar position="static">
                <Toolbar>
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                        <SecurityIcon />
                    </Avatar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Secure Application
                    </Typography>
                    <IconButton color="inherit" onClick={toggleDarkMode} sx={{ mr: -1 }}>
                        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                    <Switch checked={darkMode} onChange={toggleDarkMode} color="default" sx={{ mr: 3 }}/>
                                        <Button
                        color="inherit"
                        onClick={handleLogout}
                        startIcon={<LogoutIcon />}
                    >
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar