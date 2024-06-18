import { styled } from "@mui/material";



const StyledButton = () => {

    const StyledForm= styled('form')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        width: '75%',
        height: '100%',
        '& input': {
            width: '100%',
            border : "none",
            borderBottom: "1px solid #dedede",
            padding: '10px',
        },
        '& input[name="fmessage"]': {
            height: '200px',

        },
        '& input[type="submit"]': {
            width: '30%',
            alignSelf: 'end',
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            cursor: 'pointer',
        }
    }))

    return (
        <>
            <StyledForm>
                    <input type="text" name="fname" placeholder="Name"/>
                    <input type="email" name="femail" placeholder="Email"/>
                    <input type="text" name="fmessage"/>
                    <input type="submit" value="Submit" placeholder="Enviar"/>
            </StyledForm>
        </>
    );
}

export default StyledButton;