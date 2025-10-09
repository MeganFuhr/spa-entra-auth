import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  Alert,
  AlertTitle,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Groups as GroupsIcon,
  Security as SecurityIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

function Home({ user, handleLogout }) {
    // Debug: Log the user object to see its structure
    console.log('User object:', user);
    console.log('User Response Account Name:', user.response.account.name);
    
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Header */}
            <AppBar position="static" elevation={1}>
                <Toolbar>
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                        <SecurityIcon />
                    </Avatar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Secure Application
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        startIcon={<LogoutIcon />}
                    >
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Success Message */}
                <Alert severity="success" icon={<CheckCircleIcon />} sx={{ mb: 4 }}>
                    <AlertTitle sx={{ fontWeight: 'bold' }}>Authentication Successful!</AlertTitle>
                    You have been successfully authenticated and authorized to access this application.
                </Alert>

                {/* User Profile Card */}
                <Card elevation={3}>
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            p: 3,
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold">
                            User Profile
                        </Typography>
                    </Box>

                    <CardContent sx={{ p: 4 }}>
                        {/* User Header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    bgcolor: 'primary.main',
                                    fontSize: '2rem',
                                    mr: 3,
                                }}
                            >
                                {user.response?.account?.name.charAt(0).toUpperCase() || user.username?.charAt(0).toUpperCase() || 'U'}
                            </Avatar>
                            <Box>
                                <Typography variant="h5" fontWeight="bold">
                                    {user.response?.account?.name || 'Unknown User'}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {user.response?.account?.name}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        {/* User Details */}
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <PersonIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Full Name"
                                    secondary={user.response?.account?.name || 'Not available'}
                                    primaryTypographyProps={{ fontWeight: 'medium' }}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Email Address"
                                    secondary={user.response?.account?.username || 'Not available'}
                                    primaryTypographyProps={{ fontWeight: 'medium' }}
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                {/* Additional Info */}
                <Alert severity="info" icon={<InfoIcon />} sx={{ mt: 4 }}>
                    <AlertTitle sx={{ fontWeight: 'bold' }}>Secure Access</AlertTitle>
                    Your access to this application is managed through Microsoft Entra ID group membership.
                    All authentication and authorization is handled securely.
                </Alert>
            </Container>
        </Box>
    )
}

export default Home