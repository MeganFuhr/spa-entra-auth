import {
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Avatar,
} from '@mui/material';
import {
    Error as ErrorIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';

function LoginFailCard({ handleLogout }) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                padding: 3,
            }}
        >
            <Card sx={{ maxWidth: 450, width: '100%', boxShadow: 6 }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Avatar sx={{ width: 80, height: 80, bgcolor: 'error.main', mx: 'auto', mb: 3 }}>
                        <ErrorIcon sx={{ fontSize: 40 }} />
                    </Avatar>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Access Denied
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        You don't have permission to access this application. Please contact your administrator.
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        onClick={handleLogout}
                        startIcon={<LogoutIcon />}
                    >
                        Return to Login
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}

export default LoginFailCard