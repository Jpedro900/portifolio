import { styled } from "@mui/material";
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    width: '75%',
    height: '100%',
    '& input': {
        width: '100%',
        border: "none",
        borderBottom: "1px solid #dedede",
        padding: '10px',
    },
    '& textarea': {
        width: '100%',
        height: '200px',
        border: "1px solid #dedede",
        padding: '10px',
    },
    '& input[type="submit"]': {
        width: '30%',
        alignSelf: 'end',
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        cursor: 'pointer',
    }
}));

const FormEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('service_39p884r', 'template_9sn5sgu', templateParams, 'WA2ADPJk3SsFAlspk')
        .then((response) => {
            console.log("EMAIL SENT", response.status, response.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />
            <input 
                type="email" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />
            <textarea 
                placeholder="Message" 
                onChange={(e) => setMessage(e.target.value)} 
                value={message}
            />
            <input 
                type="submit" 
                value="Submit" 
            />
        </StyledForm>
    );
};

export default FormEmail;
