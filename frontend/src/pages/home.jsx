import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        const trimmedCode = meetingCode.trim();
        if (!trimmedCode) return;
        await addToUserHistory(trimmedCode);
        navigate(`/${trimmedCode}`);
    }

    return (
        <>
            <div className="pageHeader">
                <div>
                    <h2>SamvaadX</h2>
                    <p>Your secure meeting hub</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <IconButton onClick={() => navigate('/history')} sx={{ color: '#CBD5E1' }}>
                        <RestoreIcon />
                    </IconButton>
                    <p style={{ margin: 0 }}>History</p>
                    <Button onClick={() => {
                        localStorage.removeItem('token')
                        navigate('/auth')
                    }} variant='contained' sx={{ borderRadius: '999px' }}>
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Launch your next meeting in seconds</h2>
                        <p style={{ color: '#CBD5E1', maxWidth: '520px', marginBottom: '1.7rem' }}>
                            Enter a room code, join instantly, and keep your conversations private with SamvaadX.
                        </p>
                        <div className='actionRow'>
                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                                sx={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}
                            />
                            <Button onClick={handleJoinVideoCall} variant='contained' size='large' sx={{ borderRadius: '999px' }}>
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt='SamvaadX preview' />
                </div>
            </div>
        </>
    )
}

export default withAuth(HomeComponent)