import { styled , Toolbar , MenuItem, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    const StyledFooter = styled('footer')(({ theme }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: theme.palette.primary.main,
    }))

    const StyledToolBar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-evenly',
        color: theme.palette.primary.contrastText,
        width: '60%',
    }))

    return (
      <>
        <StyledFooter>
           <StyledToolBar>
                <MenuItem>
                    <GitHubIcon />
                </MenuItem>
                <MenuItem>
                    <LinkedInIcon />
                </MenuItem>
                <MenuItem>
                    <EmailIcon />
                </MenuItem>
            </StyledToolBar>
            <Typography variant="body2" color="primary.contrastText">© 2024 - João Pedro Cavalcante - All rights reserved</Typography>
        </StyledFooter>
      </>
    )
  }
  
  export default Footer

  