import {
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Avatar,
    CircularProgress,
    Alert,
    AlertTitle,
    Divider,
} from '@mui/material';
import {
    Lock as LockIcon,
    Security as SecurityIcon,
} from '@mui/icons-material';

function LoginCard({error, loading, handleLogin}) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #66eaafff 0%, #764ba2 100%)',
                padding: 3,
            }}
        >
            <Card sx={{ maxWidth: 450, width: '100%', boxShadow: 6 }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', mb: 2 }}>
                            <LockIcon sx={{ fontSize: 40 }} />
                        </Avatar>
                        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                            Welcome Back
                        </Typography>
                        <Typography variant="body1" color="text.secondary" textAlign="center">
                            Sign in with your Microsoft account to continue
                        </Typography>
                    </Box>

                    {error && (
                        <Alert severity="error" sx={{ mb: 3 }}>
                            <AlertTitle>Error</AlertTitle>
                            {error}
                        </Alert>
                    )}

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handleLogin}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SecurityIcon />}
                        sx={{ py: 1.5, mb: 2 }}
                    >
                        {loading ? 'Signing in...' : 'Sign in with Microsoft'}
                    </Button>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <SecurityIcon fontSize="small" color="action" />
                        <Typography variant="caption" color="text.secondary">
                            Secure authentication via Microsoft Entra ID
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>

    );
}

export default LoginCard