import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Box } from '@mui/material';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // error handling
            }
        }
        fetchHistory();
    }, []);

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <Box className='historyContainer'>
            <Box className='historyTitle'>
                <IconButton onClick={() => routeTo('/home')} sx={{ color: '#CBD5E1' }}>
                    <HomeIcon />
                </IconButton>
                <div>
                    <Typography variant='h5' sx={{ color: '#F8FAFC', fontWeight: 700 }}>
                        SamvaadX Meeting History
                    </Typography>
                    <Typography variant='body2' sx={{ color: '#94A3B8' }}>
                        Review the rooms you've joined most recently.
                    </Typography>
                </div>
            </Box>

            {meetings.length > 0 ? (
                <Box className='historyList'>
                    {meetings.map((meeting, index) => (
                        <Card key={index} className='historyCard' variant='outlined'>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, color: '#A5B4FC' }} gutterBottom>
                                    Code: {meeting.meetingCode}
                                </Typography>
                                <Typography sx={{ mb: 1.5, color: '#CBD5E1' }}>
                                    Date: {formatDate(meeting.date)}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Typography sx={{ color: '#94A3B8', mt: 3 }}>
                    No meeting history found yet. Join a call to start building your history.
                </Typography>
            )}
        </Box>
    )
}
