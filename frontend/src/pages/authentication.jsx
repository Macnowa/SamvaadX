import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7C3AED',
        },
        secondary: {
            main: '#F59E0B',
        },
        background: {
            default: '#0B1120',
            paper: '#111827',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
});

export default function Authentication() {

    

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setUsername('');
                setPassword('');
                setName('');
                setMessage(result);
                setOpen(true);
                setError('');
                setFormState(0);
            }
        } catch (err) {
            console.log(err);
            let message = err?.response?.data?.message || 'Unable to process request';
            setError(message);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ minHeight: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        color: '#fff',
                    }}
                >
                    <Box sx={{ maxWidth: 480 }}>
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                            SamvaadX
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)' }}>
                            Secure video meetings for every conversation.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                            Create a room instantly, share your room code, and connect with your team or friends without friction.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} component={Paper} elevation={6} square sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B1120' }}>
                    <Box sx={{ width: '100%', maxWidth: 420, px: 4, py: 6 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
                            <Button variant={formState === 0 ? 'contained' : 'outlined'} onClick={() => setFormState(0)} fullWidth>
                                Login
                            </Button>
                            <Button variant={formState === 1 ? 'contained' : 'outlined'} onClick={() => setFormState(1)} fullWidth>
                                Register
                            </Button>
                        </Box>

                        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 3, color: '#E2E8F0' }}>
                            {formState === 0 ? 'Welcome back to SamvaadX' : 'Create your SamvaadX profile'}
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && (
                                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                                    {error}
                                </Typography>
                            )}

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mt: 4, py: 1.5, borderRadius: '999px' }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? 'Login to SamvaadX' : 'Create SamvaadX account'}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message || 'Account created successfully'}
            />

        </ThemeProvider>
    );
}