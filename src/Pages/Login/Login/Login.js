import { Paper } from '@mui/material';
import React from 'react';
import useAuth from './../../../hooks/useAuth';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Paper elevation={8} sx={{ width: '50%', backgroundColor: 'SeaShell', py: 10, px: 5, m: 'auto', mt: 5 }}>
                <h2>Please Sign in with Google</h2>
                <button style={{ marginTop: '10px' }} onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
            </Paper>
        </Container>
    );
};

export default Login;